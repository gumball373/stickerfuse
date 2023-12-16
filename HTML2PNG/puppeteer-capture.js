// import puppeteer from 'puppeteer-core';
const { mainModule } = require('process');
const puppeteer = require('puppeteer-core');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// var iteration = 0;

 async function capture(order, ht, wdth,filename){
  console.log(order, ht, wdth);
  wdth = wdth * 300;
  ht = ht * 300;
  await (async () => {

    //1. Launch a headless browser to capture a screenshot of the recieved files
    const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
      width: wdth,
      height: ht,
      isLandscape: true
    }});
  
    // 2. Open a new page
    const page = await browser.newPage();

    //create url early just in case
    url = 'https://stickerfuse.com/reciever.html?order=' + order;
  
    // 3. Go to the file which will be stored on the server, and capture the content
    await page.goto(url); //open page using order number. should wait until rendered
  
    // wait for grid items to load, used the second one in case there is already an item inside for some reason
    await page.waitForXPath('//*[@id="content"]/div[1]/img', {timeout:120_000});// path to html/body/content/grid item 1/image

    // 4. Take screenshot
    await page.screenshot({path: 'orders_ss/screenshot_'+filename+'.png'});
  
    await browser.close();

    console.log('done');
  })();
}

async function readline_func(){
  await readline.question('Enter an Order Number\n', userdata => {
  console.log(`Collecting ${userdata}`);

  // handle data
  var inputs = userdata.split(':');
  console.log(inputs);
  // return;
  
  // capture using inputs
  capture(userdata,inputs[1],inputs[2],inputs[0]);

  readline.close();
  });
}

async function main(){
  await readline_func();
}

//run sequence
main();