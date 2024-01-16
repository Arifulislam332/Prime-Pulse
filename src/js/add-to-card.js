import fetchSingleProduct from "./fetch-single-product";
import { getSubtotal, renderCartElement, updateCartCounter } from "./render";
import store from "./store";

const productsWrapper = document.querySelector(".products__wrapper");
const cartItemsel = document.querySelector(".cart__items");

export default function addCart() {
  productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
  if (e.target.classList.contains("add__to__cart__btn")) {
    const btn = e.target;
    const productId = +btn.dataset.id;

    // fetch single product -->btn
    const product = await fetchSingleProduct(productId, btn);
    store("ADD_PRODUCT", product);
    updateCartCounter();
    renderCartElement();
    getSubtotal();
  }
}

export function removeFromCart() {
  cartItemsel.addEventListener("click", (e) => productRemover(e));
}

function productRemover(e) {
  if (e.target.closest(".remove__item__btn")) {
    const btn = e.target.closest(".remove__item__btn");
    const productId = +btn.dataset.id;
    store("REMOVE_PRODUCT", productId);
    updateCartCounter();
    renderCartElement();
    getSubtotal();
  }
}
