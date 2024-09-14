products = document.querySelectorAll(".product-preview");

products.forEach((product) => {

    console.log("hi");

  let HQsrc = product.getAttribute("high-quality");
  let LQsrc = product.getAttribute("low-quality");
  product.style.backgroundImage = "url(" + LQsrc + ")";

  product.addEventListener("mouseover", () => {
    product.style.backgroundImage = "url(" + HQsrc + ")";
  });

  product.addEventListener("mouseout", () => {
    product.style.backgroundImage = "url(" + LQsrc + ")";
  });
});
