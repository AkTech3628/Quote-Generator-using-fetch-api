const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("btn");

async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if(!response.ok){
      throw new Error("some error occured while fetching the quote");
    }

    const data = await response.json();

    quote.innerText = `"${data.quote}"`;
    author.innerText = `  Author Name- ${data.author}`;

  } catch (error) {
    quote.innerText = "Failed to fetch quote.";
    author.innerText = "Not found";
    console.log(error);
  }
}

button.addEventListener("click", getQuote);

getQuote();