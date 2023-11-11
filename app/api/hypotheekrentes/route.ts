"use server";

import axios from 'axios';
import { JSDOM } from 'jsdom'
import { writeFileSync } from "fs";

export async function GET(request: Request) {
    const data = getData()

    return new Response(data);
}

export async function POST(req: Request) {
    const body = await req.json()
    console.log(body)

    return new Response('OK')
}

function getData(){
    

    // const url = 'https://www.funda.nl/zoeken/koop?selected_area=%5B%22gemeente-bodegraven-reeuwijk%22%5D&price=%22-350000%22'; // URL we're scraping
    
    const url = 'https://www.npmjs.com/package/jsdom'
    const AxiosInstance = axios.create(); // Create a new Axios Instance
    var data = null;

    // Send an async HTTP Get request to the url
    AxiosInstance.get(url)
    .then( // Once we have data returned ...
        response => {
            const html = response.data; // Get the HTML from the HTTP request

            const dom = new JSDOM(html)
            const document = dom.window.document

            const htmlSelector = document.querySelector('._9ba9a726')?.textContent

           console.log("htmlSelector::", htmlSelector)

           // log html object and write to file for debugging
            // console.log('html', html)
            // writeFileSync("html.txt", html, {
            //     flag: "w"
            // })
            // console.log("End Write")

            data = html;
        }
    )
    .catch(console.error); // Error handling

    return data;
}