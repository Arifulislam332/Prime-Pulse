import "./style.css";
import fetchProducts from "./src/js/products";
import addCart, { removeFromCart } from "./src/js/add-to-card";
import {
  cartModal,
  renderCartElement,
  updateCartCounter,
} from "./src/js/render";
import slideBtn from "./src/js/slides";
import { updateStorage } from "./src/js/local-storage";

fetchProducts();
addCart();
updateCartCounter();
slideBtn();
updateStorage();
cartModal();
renderCartElement();
removeFromCart();
