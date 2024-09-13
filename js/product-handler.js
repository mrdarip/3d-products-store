products = document.querySelectorAll(".product-preview");

products.forEach((product) => {
  HQsrc = product.getAttribute("high-quality");
  LQsrc = product.getAttribute("low-quality");
  product.style.backgroundImage = "url(" + LQsrc + ")";

  product.addEventListener("mouseover", () => {
    product.style.backgroundImage = "url(" + HQsrc + ")";
  });

  product.addEventListener("mouseout", () => {
    product.style.backgroundImage = "url(" + LQsrc + ")";
  });
});
