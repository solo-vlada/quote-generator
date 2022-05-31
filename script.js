const quoteContainer = document.getElementById('quote-container')
const authorText = document.getElementById('author');
const quoteText = document.getElementById('quote')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = [];

//Show New Quote
function newQuote() {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!quote.author){
        authorText.textContent = 'Unknown'
    } else {

        authorText.textContent = quote.author;
    }
    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else{
        quoteText.classList.remove('long-quote');
    }
        quoteText.textContent = quote.text;
}


// Get Quotes from API
async function getQuotes() {
    const apiURL = 'https://type.fit/api/quotes';
    try{    
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        newQuote();
    } catch (err) {
        //Catch Error Here

    }
}

// Tweet Quote
function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');
}

//Event listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On load
getQuotes();

