const puppeteer = require('puppeteer-core');


 async function capture(){
  await (async () => {

    //1. Launch a headless browser to capture a screenshot of the recieved files
    const browser = await puppeteer.launch({executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
      width: 1920,
      height: 1080,
      isLandscape: true
    }});
  
    // 2. Open a new page
    const page = await browser.newPage();

    //create url early just in case
    url = "http://localhost:3000"
  
    // 3. Go to the file which will be stored on the server, and capture the content
    await page.goto(url); //open page using order number. should wait until rendered

    // 4. Take screenshot
    await page.screenshot({path: 'orders_ss/screenshot_'+ "localhost2" +'.png', fullPage: true});
  
    await browser.close();

    console.log('done');
  })();
}

//run
capture();