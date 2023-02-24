// const request = require("request");

const request = require('request');
const cheerio = require('cheerio');
const chalk = require('chalk');

console.log("Before");
request('https://www.worldometers.info/coronavirus/', cb);

console.log("After");

function cb(error, response, html) {
    

    if (error) {
        console.error('error:', error); // Print the error if one occurred
    }

    else {
        handlehtml(html);
        
        // Print the HTML for the Google homepage.
    }    
}
function handlehtml(html){
    let selTool = cheerio.load(html);
    let h1s  = selTool("h1");
    //console.log(h1s.length); 

    let array = selTool("#maincounter-wrap span");

   let totalCases =  selTool(array[0]).text();
   let totalDeath= selTool(array[1]).text();
   let totalRecovered =  selTool(array[2]).text();

   console.log(chalk.yellow("Total Cases "+ totalCases));
   console.log(chalk.red("Total Deaths "+ totalDeath));
   console.log(chalk.green("Total Recovered "+ totalRecovered));

    // for(let i=0; i<array.length;i++){
    //     let data=selTool(array[i]).text();
    //     console.log("data", data);
    // }
}