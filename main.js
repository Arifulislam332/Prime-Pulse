import "./style.css";
import fetchProducts from "./src/js/products";
import addCart, { removeFromCart } from "./src/js/add-to-card";
import {
  cartModal,
  getSubtotal,
  renderCartElement,
  updateCartCounter,
} from "./src/js/render";
import slideBtn from "./src/js/slides";

fetchProducts();
addCart();
updateCartCounter();
slideBtn();
cartModal();
renderCartElement();
removeFromCart();
getSubtotal();
