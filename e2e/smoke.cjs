(async()=>{
const {chromium}=require('playwright');
const browser=await chromium.launch({headless:true});
const page=await browser.newPage({acceptDownloads:true,viewport:{width:1440,height:1000}});
const errors=[];
page.on('pageerror',e=>errors.push(String(e)));
await page.goto(process.env.SMOKE_URL||'http://127.0.0.1:4173',{waitUntil:'networkidle'});
await page.waitForSelector('.shell');
if(!(await page.locator('body').innerText()).includes('Good morning')) throw new Error('Dashboard did not load');
await page.locator('[data-nav="#command"]').click();
await page.waitForSelector('h1');
if(!(await page.locator('body').innerText()).includes('Command Center')) throw new Error('Command Center did not load');

page.once('dialog',d=>d.accept('Smoke test follow-up'));
page.once('dialog',d=>d.accept('BID-1042'));
page.once('dialog',d=>d.accept('Jordan Smith'));
page.once('dialog',d=>d.accept('2026-11-01'));
page.once('dialog',d=>d.accept('High'));
await page.locator('[data-action="add-task"]').first().click();
await page.waitForTimeout(100);
let state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.tasks.some(t=>t.title==='Smoke test follow-up')) throw new Error('Task did not persist');

page.once('dialog',d=>d.accept('Smoke delivery risk'));
page.once('dialog',d=>d.accept('BID-1042'));
page.once('dialog',d=>d.accept('High'));
page.once('dialog',d=>d.accept('Jordan Smith'));
page.once('dialog',d=>d.accept('Request delivery plan from owner'));
await page.locator('[data-action="add-risk"]').click();
await page.waitForTimeout(100);
state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.risks.some(r=>r.title==='Smoke delivery risk')) throw new Error('Risk did not persist');

page.once('dialog',d=>d.accept('Smoke clarification'));
page.once('dialog',d=>d.accept('BID-1042'));
page.once('dialog',d=>d.accept('Please confirm the response format.'));
page.once('dialog',d=>d.accept('Jordan Smith'));
await page.locator('[data-action="add-clarification"]').first().click();
await page.waitForTimeout(100);
state=await page.evaluate(()=>JSON.parse(localStorage.getItem('bidpilot:v1')));
if(!state.clarifications.some(c=>c.title==='Smoke clarification')) throw new Error('Clarification did not persist');

const csvPromise=page.waitForEvent('download');
await page.locator('[data-action="export-csv"]').click();
const csv=await csvPromise;
if(!csv.suggestedFilename().endsWith('.csv')) throw new Error('Requirements CSV export failed');

page.once('dialog',d=>d.accept('BID-1042'));
const packPromise=page.waitForEvent('download');
await page.locator('[data-action="export-pack"]').click();
const pack=await packPromise;
if(!pack.suggestedFilename().endsWith('.html')) throw new Error('Bid pack export failed');

await page.locator('[data-nav="#settings"]').click();
await page.waitForSelector('#backupInput');
const backupPromise=page.waitForEvent('download');
await page.locator('[data-action="export"]').first().click();
const backup=await backupPromise;
if(!backup.suggestedFilename().endsWith('.json')) throw new Error('JSON backup export failed');

if(errors.length) throw new Error('Page errors: '+errors.join(' | '));
console.log(JSON.stringify({ok:true,taskPersistence:true,riskRegister:true,clarificationLog:true,requirementsCsv:csv.suggestedFilename(),bidPack:pack.suggestedFilename(),backup:backup.suggestedFilename()}));
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});