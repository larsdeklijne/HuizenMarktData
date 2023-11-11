const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from 'puppeteer'

puppeteer.use(StealthPlugin())

const url = 'https://www.funda.nl/zoeken/koop?selected_area=%5B%22gemeente-bodegraven-reeuwijk%22%5D&price=%22-350000%22'

export async function GET(request: Request) {
    testPuppeteer()

    return new Response('Succesvol')

    // const data = getData()
    // return new Response(data);
}

async function testPuppeteer() {
    const browser: Browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto(url)

    await page.click('#didomi-notice-agree-button')

    await page.screenshot({ path: 'funda.jpg' })

    await browser.close()
}
