import "./style.css";
import fetchProducts from "./src/js/products";
import addCart from "./src/js/add-to-card";
import { updateCartCounter } from "./src/js/render";

fetchProducts();
addCart();
updateCartCounter();
