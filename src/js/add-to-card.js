import fetchSingleProduct from "./fetch-single-product";

const productsWrapper = document.querySelector(".products__wrapper");

export default function addCart() {
  productsWrapper.addEventListener("click", (e) => detectProduct(e));
}

async function detectProduct(e) {
  if (e.target.classList.contains("add__to__cart__btn")) {
    const btnAddToCart = e.target;
    const btnProductId = +btnAddToCart.dataset.id;

    // fetch single product -->btn
    const product = await fetchSingleProduct(btnProductId);
  }
}