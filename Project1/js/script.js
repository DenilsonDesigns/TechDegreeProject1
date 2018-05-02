// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
// document.getElementById('loadQuote').addEventListener("click", printQuote, false);



// Create an array of JavaScript objects to hold the data for your quotes.
// Name the array quotes.
// The quotes array should be accessible in the global scope, meaning it shouldn't be inside of a function.

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
    source: "Bruce Lee"
},
{
    quote: "Frankly my dear, I don't give a damn.",
    source: "Clark Gable",
    citation: "Gone with the Wind",
    year: "1939"
}
]

// Create a function named getRandomQuote which:
// selects a random quote object from the quotes array.
// returns the randomly selected quote object.

function getRandomQuote(){
    //generate random num 0-4
    //return quote object of that random num
    let randomNum = Math.floor(Math.random() * 5);
    return quotes[randomNum];
}

// Create a function named printQuote which follows these rules:
// printQuote calls the getRandomQuote function and stores the returned quote object in a variable.
function printQuote(){
    let randomQuote= getRandomQuote();
    return randomQuote;
   
   
    //document.getElementById('quote-box').innerHTML;
    //document.write("<p class="quote"> [quote here] </p>")
    //Change the HTML content of a <p> element with id="demo":
    //document.getElementById("demo").innerHTML = "Paragraph changed!";
    //document.getElementById('quote-box').innerHTML
    //how to pull elements from object
    //quotes[4].year


}

document.getElementsByClassName("quote").innerHTML= "<p>hello</p>";

/* <p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p> */



