const quotes = [
	{
		quote: "Action is the foundational key to all success.",
		author: "Pablo Picasso",
	},
	{
		quote: "Get busy living or get busy dying.",
		author: "Steven King",
	},
	{
		quote: "It's not that I'm so smart, it's just that I stay with problems longer.",
		author: "Albert Einstein",
	},
	{
		quote: "He makes no friend who never made a foe.",
		author: "Alfred, Lord Tennyson",
	},
	{
		quote: "True Knowledge exists in knowing that you know nothing.",
		author: "Socrates",
	},
	{
		quote: "The secret of happiness is renunciation.",
		author: "Andrew Carnegie",
	},
	{
		quote: "You never know what life is like, until you have lived it.",
		author: "Marilyn Monroe",
	},
	{
		quote: "If always seems impossible until it's done.",
		author: "넬슨 만델라",
	},
	{
		quote: "Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it.",
		author: "괴테",
	},
	{
		quote: "If you can't get a miracle, Become one.",
		author: "닉 부이치치",
	},
	
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.round 반올림 해줌
//Math.ceil 올림 해줌
//Math.floor 내림 해줌

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;