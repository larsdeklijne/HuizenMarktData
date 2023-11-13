"use server";

import { writeFileSync } from "fs";
import { NextResponse } from 'next/server';

// npm imports
const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from 'puppeteer'

puppeteer.use(StealthPlugin())

export async function GET(req: Request){
    const responseFunctie = getRentestanden()
    console.log("server side", responseFunctie)

//    const response = getRentestanden()
//    console.log("SERVER SIDE LOG", response)

    const response = "GET RETURN /API/HYPOTHEEKRENTES"
   return NextResponse.json({"response": responseFunctie})
}

async function getRentestanden(){
    const url = 'https://www.hypotheker.nl/rentestanden/'
    const browser: Browser = await puppeteer.launch({ 
        headless:false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    })
    const page = await browser.newPage()
    await page.goto(url)

    // todo: accepteeer cookies
    // await page.click('body > div.bcpNotificationBar.bcpNotificationBarStickyBottom > div.bcpNotificationBarContent > div > div > div > div > div > button')
    
    // Write data in 'html.txt' . 
    const html = await page.content();
    writeFileSync("html.txt", html, {
        flag: "w"
    })

    // search for rente in opened page
    const renteArray = await page.$$('.c-hypotheekaanbieders__rente')
    const renteTextValues = new Array()

    // loop through html object and save correct values in new array
    renteArray.forEach( async (rente) => {
        const renteWaarde = await (await rente.getProperty('textContent')).jsonValue()

        console.log("SERVERSIDE -> rentewaarde:", renteWaarde)

        renteTextValues.push(renteWaarde)
    })

    console.log(renteTextValues)

    // close browser and return correct values
    await page.screenshot({ path: 'hypotheekrentes.jpg' })
    await browser.close()

    // return renteTextValues
    return renteTextValues
}
