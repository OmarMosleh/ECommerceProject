//slider part
// auto slider
// var sliderImg = document.getElementById("slider-image");
// let sliderLength=4;
// console.log(sliderImg);
// i=1;
// function slider(){
//     sliderImg.setAttribute("src",`../images/slider/slider${i}.jpg`);
//     i++;
//     if(i>sliderLength){
//         i=1
//     }
// }
// setInterval(slider, 3000);
//manual slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider-image");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
/**products part */
var myApi = "https://fakestoreapi.com/products";

//fetching data
fetch(myApi)
  .then((Response) => {
    console.log(Response);
    return Response.json();
  })
  .then((productsArr) => {
    console.log(productsArr);
    //array of objects
    return productsArr;
  })
  .catch((error) => console.error(error));

// asynch function for manipulating data out of its scope
let myProducts = [];
async function getData() {
  try {
    let response = await fetch(myApi);
    let data = await response.json();
    myProducts = data;
    return data;
  } catch (error) {
    console.error(error);
  }
}

getData().then((data) => {
  //here you can manipulate data outside of the first promise scope
  let catMen = data.filter((catMen) => catMen.category == "men's clothing");
  console.log(catMen);
});
// .ctach(console.error(error))
/**
 * !!!!!!!!!!! why do we have to comment this catch ??
 */

/** --------------------------function for creating card------------------- */
function productsFill(products) {
  let prodContainer = document.getElementById("prodContainer");
  prodContainer.innerHTML = "";
  products.forEach((product) => {
    // item.className ="item";
    // item.innerHTML=

    // `<img src="${product.image}" alt="">
    // <div class="caption">
    //     <span class="discreption">${product.title}</span>
    //     <span class="price">${product.price}$</span>
    // </div>
    // <div class="primary-button buyButton" onclick="addToCart(${index})">buy</div>`
    // prodContainer.appendChild(item);
    // Create the <img> element

    var img = document.createElement("img");
    img.src = product.image;

    var captionDiv = document.createElement("div");
    captionDiv.className = "caption";

    var descriptionSpan = document.createElement("span");
    descriptionSpan.className = "discreption";
    descriptionSpan.textContent = product.title;

    var priceSpan = document.createElement("span");
    priceSpan.className = "price";
    priceSpan.textContent = product.price;

    captionDiv.append(descriptionSpan, priceSpan);

    var buyButtonDiv = document.createElement("div");
    buyButtonDiv.className = "primary-button buyButton";
    buyButtonDiv.textContent = "buy";

    buyButtonDiv.addEventListener("click", () => {
      addToCart(product);
      console.log(cart);
    });

    let item = document.createElement("div");
    item.className = "item";
    item.append(img, captionDiv, buyButtonDiv);
    prodContainer.append(item);
  });
}

function filterProd(myCategory) {
  getData().then((data) => {
    let filteredProd = data.filter((Element) => Element.category == myCategory);
    productsFill(filteredProd);
  });
}
filterProd("women's clothing");
let btnmen = document.getElementById("btnmen");
let btnwom = document.getElementById("btnwom");
let btnjewl = document.getElementById("btnjewl");
let btnelec = document.getElementById("btnelec");
btnmen.addEventListener("click", () => {
  filterProd("men's clothing");
});
btnwom.addEventListener("click", () => {
  filterProd("women's clothing");
});
btnjewl.addEventListener("click", () => {
  filterProd("jewelery");
});
btnelec.addEventListener("click", () => {
  filterProd("electronics");
});

/**-----------------add to cart-------------------------- */

let cartDisplay = document.getElementById("cart-number");

var cart = [];
function addToCart(product) {
  cart.push(product);
  cartDisplay.innerHTML = cart.length;
  console.log(cart);
  localStorage.setItem("myCart", JSON.stringify(cart));
}

// arrow up function
let arrowUp = document.querySelector(".arrowUp");
arrowUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
