// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
 document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Create an array of JavaScript objects to hold the data for your quotes.
const quotes= [ 
{
    quote: "Success is walking from failure to failure with no loss of enthusiasm.",
    source: "Winston Churchill",
    citation: "Famous Quotes"
},
{
    quote: "Stay away from negative people, they have a problem for every solution.",
    source: "Albert Einstein"
},
{
    quote: "All successes begin with self-discipline. It starts with you.",
    source: "Dwayne 'The Rock' Johnson"
},
{
    quote: "Knowing is not enough, we must apply. Willing is not enough, we must do.",
    source: "Bruce Lee",
    citation: "Some epic TV interview"
},
{
    quote: "Frankly my dear, I don't give a damn.",
    source: "Clark Gable",
    citation: "Gone with the Wind",
    year: "1939"
}
]


// function returns the randomly selected quote object.
function getRandomQuote(){
    //generate random num 0-4
    //return quote object of that random num
    let randomNum = Math.floor(Math.random() * 5);
    return quotes[randomNum];
}

// Create a function named printQuote which follows these rules:
// printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
function printQuote(){
    //declaring object as a variable
    let randomQuote= getRandomQuote();
    
    //building html string
    let finalQuote= `<p class="quote">${randomQuote.quote}</p>`;
    finalQuote += `<p class="source">${randomQuote.source}</p>`;
    
    //conditional if citation is present
    if(randomQuote.citation != null){
        finalQuote +=`<span class="citation">${randomQuote.citation}</span>`;
    }
    //conditional if year of quote is present
    if(randomQuote.year != null){
        finalQuote +=`<span class="year">${randomQuote.year}</span>`;
    }
    //final writing html to page
    document.getElementById("quote-box").innerHTML= finalQuote;
}

