const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "The pessimist sees difficulty in every opportunity. The optimist sees the opportunity in every difficulty.",
        author: "Winston Churchill",
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers",
    },
    {
        quote: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown",
    },
    {
        quote: "It's not whether you get knocked down, it's whether you get up.",
        author: "Vince Lombardi",
    },
    {
        quote: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you.",
        author: "Steve Jobs",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
console.log("HI");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;