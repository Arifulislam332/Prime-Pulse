import fetchSingleProduct from "./fetch-single-product";
import store from "./store";

const productsWrapper = document.querySelector(".products__wrapper");

export default function addCart() {
  productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
  if (e.target.classList.contains("add__to__cart__btn")) {
    const btn = e.target;
    const productId = +btn.dataset.id;

    // fetch single product -->btn
    const product = await fetchSingleProduct(productId, btn);
    console.log(product);
    store("ADD_PRODUCT", product);
    console.log(store());
  }
}
