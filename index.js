
///request-promise and cheerio required modules
const request = require('request-promise');
const cheerio = require('cheerio');
///targeted URL
const URL = 'https://www.imdb.com/title/tt8111088/';

(async () => {

    const response = await request(URL);

    let $ = cheerio.load(response);
    ///target title tag
    let title = $('div[class="title_wrapper"] > h1').text();
    ///let genre = $('')
    ///target rating tag
    let rating = $('span[itemprop="ratingValue"]').text();

    ///print out debug results
    console.log(title, rating);

})()