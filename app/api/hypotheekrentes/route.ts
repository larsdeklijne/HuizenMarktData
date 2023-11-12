"use server";

import { writeFileSync } from "fs";

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from 'puppeteer'

puppeteer.use(StealthPlugin())

const url = 'https://www.hypotheker.nl/rentestanden/'

export async function GET(request: Request) {
    const returnData = getData()

    // const data = getData()
    return new Response('succesvol serverside test');
}

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)

    return new Response('OK')
}

async function getData(){
    const browser: Browser = await puppeteer.launch({ headless: true })
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
        console.log("server side renteWaarde:", renteWaarde)
        renteTextValues.push(renteWaarde)
    })

    // close browser and return correct values
    await page.screenshot({ path: 'hypotheekrentes.jpg' })
    await browser.close()

    return renteTextValues
}
