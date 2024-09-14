products = document.querySelectorAll(".product-preview");

products.forEach((product) => {
  let HQsrc = product.getAttribute("high-quality");
  let LQsrc = product.getAttribute("low-quality");
  preloadImage(HQsrc);
  
  product.style.backgroundImage = "url(" + LQsrc + ")";


  product.addEventListener("mouseover", () => {
    product.style.backgroundImage = "url(" + HQsrc + ")";
  });
  product.addEventListener("mouseout", () => {
    product.style.backgroundImage = "url(" + LQsrc + ")";
  });
});

function preloadImage(url) {
  var img=new Image();
  img.src=url;
}
