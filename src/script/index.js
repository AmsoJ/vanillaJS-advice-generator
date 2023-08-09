"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Selected elements first
const diceContainer = document.querySelector(".dice-container");
const quote = document.querySelector(".quote");
const serialNumber = document.querySelector(".id");
// options and conditions
let url = "https://api.adviceslip.com/advice";
// updateQuoteSN
const updateQuoteSN = (serialDigit, advice) => {
    quote.textContent = advice;
    serialNumber.textContent = serialDigit;
};
// get quote
const getQuote = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        const gottenAdvice = yield response.json();
        let { slip: { id, advice } } = gottenAdvice;
        updateQuoteSN(id, advice);
    }
    catch (error) {
        console.log(error);
    }
});
// Event listeners
diceContainer.addEventListener("click", () => {
    getQuote();
});
