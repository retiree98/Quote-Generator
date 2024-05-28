var quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  { quote: "So many books, so little time.", author: "Frank Zappa" },
  {
    quote: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: "Mark Twain",
  },
  {
    quote: "A friend is someone who knows all about you and still loves you.",
    author: "Elbert Hubbard",
  },
  {
    quote: "We accept the love we think we deserve.",
    author: "Stephen Chbosky",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
  },
  {
    quote: "If you don't stand for something you will fall for anything.",
    author: "Gordon A. Eadie",
  },
  {
    quote: "A day without sunshine is like, you know, night.",
    author: "Steve Martin",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
];

var shownQuotes = [];

function displayQuote() {
  if (shownQuotes.length === quotes.length) {
    alert("That's it for today, come back tommorow for more!");
    shownQuotes = [];
  }
  var randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (shownQuotes.includes(randomIndex));

  var quote = quotes[randomIndex];
  shownQuotes.push(randomIndex);
  document.getElementById("quoteText").innerHTML = `"${quote.quote}"`;
  document.getElementById("quoteAuthor").innerHTML = `-- ${quote.author}`;
}

document.getElementById("qBtn").addEventListener("click", displayQuote);
