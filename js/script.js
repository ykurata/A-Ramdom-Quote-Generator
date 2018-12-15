var quote;
var html = '';


// Get a random quote from array.
function getRandomQuote(array) {
  var randomNumber = Math.floor(Math.random() * array.length );
  quote = array[randomNumber]
  return quote;
}

// Print out a random quote, source, year, and tags.
function printQuote(html) {
  var randomQuote = getRandomQuote(quotes);
  html += "<p class='quote'>" + randomQuote.quote + "</p>";
  if ( randomQuote.year  ) {
    html += "<p class='source'>" + randomQuote.source +
            "<span class='year'>" + randomQuote.year + "</span>" +
            "<sapn class='citation'>" + randomQuote.tags + "</span></p>";
  } else {
    html += "<p class='source'>" + randomQuote.source +
            "<sapn class='citation'>" + randomQuote.tags + "</span></p>";
  }
  var div = document.getElementById('quote-box');
  div.innerHTML = html;
}
printQuote(html);


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
