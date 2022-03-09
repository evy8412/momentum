const quotes = [
{
    quote: "“A hug is always the right size.”",
    author: "—Winnie the Pooh",
},
{
    quote: "“After all, one can’t complain. I have my friends.”",
    author: "—Eeyore",
},
{
    quote: "“The things that make me different are the things that make me, me.”",
    author: "—Piglet",
},
{
    quote: "“You’re braver than you believe, stronger than you seem and smarter than you think.”",
    author: "—Christopher Robin",
},
{
    quote: "“Sometimes the smallest things take up the most room in your heart.”",
    author: "—Winnie the Pooh",
},
{
    quote: "“If you live to be a hundred, I hope I live to be a hundred minus one day, so that I never have to live a day without you.”",
    author: "—Winnie the Pooh",
},
{
    quote: "“A little consideration, a little thought for others, makes all the difference.”",
    author: "—Eeyore",
},
{
    quote: "“People say nothing is impossible, but I do nothing every day.”",
    author: "—Winnie the Pooh",
},
{
    quote: "“A day without a friend is like a pot without a single drop of honey left inside.”",
    author: "—Winnie the Pooh",
},
{
    quote: "“It is more fun to talk with someone who doesn’t use long, difficult words but rather short, easy words like, ‘What about lunch?’”",
    author: "—Winnie the Pooh",
}]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author
