"use server";

import axios from 'axios';
import { JSDOM } from 'jsdom'
import { writeFileSync } from "fs";

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
import { Browser } from 'puppeteer'

puppeteer.use(StealthPlugin())

const url = 'https://www.hypotheker.nl/rentestanden/'

export async function GET(request: Request) {
    getData()
    return 'succesvol'

    // const data = getData()
    // return new Response(data);
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

    await page.click('body > div.bcpNotificationBar.bcpNotificationBarStickyBottom > div.bcpNotificationBarContent > div > div > div > div > div > button')

    await page.screenshot({ path: 'hypotheekrentes.jpg' })

    await browser.close()
}
