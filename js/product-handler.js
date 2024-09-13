products = document.querySelectorAll(".product-preview");

products.forEach((product) => {
  HQsrc = product.getAttribute("high-quality");
  LQsrc = product.getAttribute("low-quality");
  product.style.backgroundImage = "url(" + LQsrc + ")";
});
