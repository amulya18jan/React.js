import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
const name = "Amulya";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <a href="http://www.amazon.in/" target="_blank">
      Back to Amazon
    </a>
    <p class="nike">Nike Black running Shoes</p>
    <p class="cost">39000INR- in stock</p>
    <p>Free delivery tommorow.</p>
    <button class="cart">Add to cart</button>
    <button class="buy">Buy Now</button>
  </div>,
  document.getElementById("root")
);
