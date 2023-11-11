import axios from 'axios';

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
    

    const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1'; // URL we're scraping
    const AxiosInstance = axios.create(); // Create a new Axios Instance
    var data = null;

    // Send an async HTTP Get request to the url
    AxiosInstance.get(url)
    .then( // Once we have data returned ...
        response => {
        const html = response.data; // Get the HTML from the HTTP request
        console.log(html)
        data = html;
        }
    )
    .catch(console.error); // Error handling

    return data;
}