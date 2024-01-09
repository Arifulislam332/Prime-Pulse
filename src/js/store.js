import { renderSingleProductError } from "./render";

const basket = [];

export default function store(action = "VIEW_BASKET", product = {}) {
  switch (action) {
    case "ADD_PRODUCT":
      const existedProduct = basket.find((pr) => pr.id === product.id);
      if (existedProduct) {
        renderSingleProductError("You have already added this product");
      } else {
        basket.push(product);
      }

    case "VIEW_BASKET":
      return basket;
  }
}