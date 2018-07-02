const puppeteer = require('puppeteer');

var word = 'banana';

if (process.argv.length > 2){
  word = process.argv[2];
}
//if (system.args.length == 2) {
//  word = system.args[1];
//}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.etymologyexplorer.com/ety_explore/index.php?word='+word, {waitUntil: 'networkidle0'});
//  await page.pdf({path: 'hn.pdf', format: 'A4'});

//  await page.evaluate(() => {
//    let dom = Document.querySelector('#header'); //page.$('#header');
//    dom.parentNode.removeChild(dom);
//  });
  
  await page.screenshot({path: 'screenshots/'+word+'.png'});

  await browser.close();
})();
