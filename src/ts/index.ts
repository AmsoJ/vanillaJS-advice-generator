// Selected elements first
const diceContainer = document.querySelector(".dice-container") as HTMLDivElement;
const quote = document.querySelector(".quote") as HTMLParagraphElement;
const serialNumber = document.querySelector(".id") as HTMLSpanElement;

// options and conditions
let url : string = "https://api.adviceslip.com/advice";

// updateQuoteSN
const updateQuoteSN = (serialDigit: string, advice: string) => {
    quote.textContent = advice;
    serialNumber.textContent = serialDigit;
}

// get quote
const getQuote = async () => {
    try {
        const response = await fetch(url);
        const gottenAdvice = await response.json();
        let {slip : {id, advice}} = gottenAdvice;
        updateQuoteSN(id, advice);
    } catch (error) {
        console.log(error);
    }
}

// Event listeners
diceContainer.addEventListener("click", () => {
    getQuote();
})
