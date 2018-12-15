var quote;
var html = '';
var rgbColor;


// Get random rgb
function randomRGB() {
  return Math.floor(Math.random() * 256);
}

// Generate random color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')'
  return color;
}

// Apply a new background color.
function changeColor(rgbColor) {
  rgbColor = randomColor();
  document.body.style.background = rgbColor;
}


// Get a random quote from array.
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length);
  quote = array[randomNumber];
  return quote;
}


// Create a HTML with a quote.
function createHTML(quote) {
  html = "<p class='quote'>" + quote.quote + "</p>";
  if ( quote.year ) {
    html += "<p class='source'>" + quote.source +
            "<span class='year'>" + quote.year + "</span>" +
            "<sapn class='citation'>" + quote.tags + "</span></p>";
  } else {
    html += "<p class='source'>" + quote.source +
            "<sapn class='citation'>" + quote.tags + "</span></p>";
  }
  return html;
}


// Print out a random quote, source, year, and tags.
function printQuote() {
  var randomQuote = getRandomQuote(quotes);
  changeColor(rgbColor);  // Change the background color everytime a quote is printed.
  var div = document.getElementById('quote-box');
  div.innerHTML = createHTML(randomQuote);
}

// Run printQuote function.
printQuote();


// Show a new quote everytime the buttom is clicked.
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Get a new quote in every 20 seconds.
setInterval(printQuote, 20000);
