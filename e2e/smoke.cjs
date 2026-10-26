(async()=>{
const {chromium}=require('playwright');
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({acceptDownloads:true,viewport:{width:1440,height:1000}});
const errors=[];
page.on('pageerror',e=>errors.push(String(e)));
async function runPromptAction(locator,values){let i=0;const handler=async d=>{await d.accept(values[i++]===undefined?'':String(values[i-1]))};page.on('dialog',handler);await locator.click();await page.waitForTimeout(100);page.off('dialog',handler);if(i!==values.length)throw new Error('Expected '+values.length+' prompts, received '+i);}
await page.goto(process.env.SMOKE_URL||'http://127.0.0.1:4173',{waitUntil:'networkidle'});
await page.waitForSelector('.shell');
if(!(await page.locator('body').innerText()).includes('Good morning')) throw new Error('Dashboard did not load');
if(!(await page.locator('body').innerText()).includes('Prototype · local demo')) throw new Error('Prototype disclosure is missing');
let seededState=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
const clock=new Date();const localToday=[clock.getFullYear(),String(clock.getMonth()+1).padStart(2,'0'),String(clock.getDate()).padStart(2,'0')].join('-');
if(!seededState.bids.some(b=>!['Won','Lost','Submitted'].includes(b.status)&&b.deadline>=localToday)) throw new Error('Seed data has no upcoming open bid');
await page.locator('[data-nav="#new-bid"]').first().click();
await page.locator('[data-action="load-sample"]').click();
if(!(await page.locator('[name="name"]').inputValue()).includes('Cloud Security')) throw new Error('Sample RFP did not populate bid name');
if(!(await page.locator('[name="rfp"]').inputValue()).includes('supplier must demonstrate')) throw new Error('Sample RFP text did not load');
if(!(await page.locator('[name="deadline"]').inputValue())||await page.locator('[name="deadline"]').inputValue()<localToday) throw new Error('Sample RFP deadline is not future-dated');
await page.locator('[data-nav="#command"]').click();
await page.waitForSelector('h1');
if(!(await page.locator('body').innerText()).includes('Command Center')) throw new Error('Command Center did not load');

await runPromptAction(page.locator('[data-action="add-task"]').first(),['Smoke test follow-up','BID-1042','Jordan Smith','2026-11-01','High']);
let state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.tasks.some(t=>t.title==='Smoke test follow-up')) throw new Error('Task did not persist');

await runPromptAction(page.locator('[data-action="add-risk"]'),['Smoke delivery risk','BID-1042','High','Jordan Smith','Request delivery plan from owner']);
state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.risks.some(r=>r.title==='Smoke delivery risk')) throw new Error('Risk did not persist');

await runPromptAction(page.locator('[data-action="add-clarification"]').first(),['Smoke clarification','BID-1042','Please confirm the response format.','Jordan Smith']);
state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.clarifications.some(c=>c.title==='Smoke clarification')) throw new Error('Clarification did not persist');

const csvPromise=page.waitForEvent('download');
await page.locator('[data-action="export-csv"]').click();
const csv=await csvPromise;
if(!csv.suggestedFilename().endsWith('.csv')) throw new Error('Requirements CSV export failed');

const packPromise=page.waitForEvent('download');
await runPromptAction(page.locator('[data-action="export-pack"]'),['BID-1042']);
const pack=await packPromise;
if(!pack.suggestedFilename().endsWith('.html')) throw new Error('Bid pack export failed');

await page.locator('[data-nav="#settings"]').click();
await page.waitForSelector('#backupInput',{state:'attached'});
const backupPromise=page.waitForEvent('download');
await page.locator('[data-action="export"]').first().click();
const backup=await backupPromise;
if(!backup.suggestedFilename().endsWith('.json')) throw new Error('JSON backup export failed');

await page.evaluate(()=>{location.hash='#bid/BID-1042'});
await page.waitForSelector('h1');
const directPackPromise=page.waitForEvent('download');
await page.locator('[data-action="export-pack"][data-id="BID-1042"]').click();
const directPack=await directPackPromise;
if(!directPack.suggestedFilename().includes('bid-1042')) throw new Error('Context-aware bid-pack export failed');

await page.evaluate(()=>{location.hash='#dashboard'});
await page.waitForSelector('[data-action="reset"]');
const resetHandler=async dialog=>{if(dialog.type()==='confirm') await dialog.accept(); else await dialog.dismiss()};
page.on('dialog',resetHandler);
await page.locator('[data-action="reset"]').click();
await page.waitForTimeout(100);
page.off('dialog',resetHandler);
if(!(await page.locator('body').innerText()).includes('Good morning')) throw new Error('Reset did not keep the dashboard rendered');
const resetState=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(resetState.tasks.length||resetState.risks.length||resetState.clarifications.length) throw new Error('Reset did not clear local activity');

if(errors.length) throw new Error('Page errors: '+errors.join(' | '));
console.log(JSON.stringify({ok:true,taskPersistence:true,riskRegister:true,clarificationLog:true,requirementsCsv:csv.suggestedFilename(),bidPack:pack.suggestedFilename(),backup:backup.suggestedFilename()}));
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});