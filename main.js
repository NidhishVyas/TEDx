const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

// const search = document.getElementById(search);

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    const filter = e.target.dataset.filter;
    console.log(filter);

    storeProducts.forEach((product) => {
      console.log(product);
      console.log(product.classList);
      if (product.classList.contains(filter)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

let navlist = document.querySelector(".nav-list") ||  document.querySelector(".navli");
let openicon = document.querySelector(".bx-menu");
let closeicon = document.querySelector(".close-icon");

console.log(openicon);

openicon.addEventListener("click", show);

function show() {
  console.log("clicked me");
  navlist.style.display = "flex";
  navlist.style.top = "0";
}

closeicon.addEventListener("click", shut);

function shut() {
  navlist.style.top = "-100%";
}
