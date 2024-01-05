import { renderError, renderLoading, renderProducts } from "./render";

export default async function fetchProducts() {
  try {
    renderLoading(true);
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Fetch can not find!");
    const data = await res.json();
    renderProducts(data.products);
  } catch (err) {
    renderError(err.message);
  } finally {
    renderLoading(false);
  }
}
