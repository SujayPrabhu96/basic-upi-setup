import { PAYMENT_BTN_ID } from "./config.js";

const payButtonDivElement = document.getElementById("pay-button");
const formElement = document.createElement("form");

const scriptElement = document.createElement("script");
scriptElement.setAttribute(
  "src",
  "https://checkout.razorpay.com/v1/payment-button.js"
);
scriptElement.setAttribute("async", true);
scriptElement.setAttribute("data-payment_button_id", PAYMENT_BTN_ID);

formElement.appendChild(scriptElement);
payButtonDivElement.appendChild(formElement);
