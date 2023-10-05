// // // arrow up function
// // let arrowUp = document.querySelector(".arrowUp");
// // arrowUp.onclick = () => {
// //   window.scrollTo({
// //     top: 0,
// //     behavior: "smooth",
// //   });
// // };
// // // getting array of objects from local stoage
// // let mycart = JSON.parse(localStorage.getItem("myCart"));
// // console.log(mycart);
// // //changing cart number
// // let cartDisplay = document.getElementById("cart-number");
// // cartDisplay.innerHTML = mycart.length;

// // let totalPrice = 0;
// // function cartfill() {
// //   let cartContainer = document.getElementById("cartContainer");
// //   cartContainer.innerHTML = "";
// //   let cartWrapper = document.createElement("div");
// //   cartWrapper.className = "cartWrapper";
// //   mycart.forEach((element) => {
// //     let cartItem = document.createElement("div");
// //     cartItem.className = "item";

// //     let cartImage = document.createElement("img");
// //     cartImage.src = element.image;

// //     let cartDesc = document.createElement("div");
// //     cartDesc.className = "cartDesc";
// //     cartDesc.textContent = element.title;

// //     let thePrice = document.createElement("div");
// //     thePrice.className = "price";
// //     thePrice.innerText = `${element.price}$`;

// //     let removeButton = document.createElement("div");
// //     removeButton.className = "removeButton";
// //     removeButton.innerHTML = '<i class="ri-close-circle-fill"></i>';
// //     removeButton.addEventListener("click",()=> {console.log(element.title)
// //     itemIndex = mycart.indexOf(element);
// //     mycart.splice(itemIndex,1);
// //     totalPrice = totalPrice - element.price;
// //     document.querySelector(".total").innerHTML = `Total Price is ${totalPrice}$`;

// //     cartfill();
// //   });
  


// //     cartItem.append(cartImage, cartDesc, thePrice, removeButton);
// //     cartWrapper.append(cartItem);
// //     cartContainer.append(cartWrapper);

// //     totalPrice = totalPrice + element.price;
// //     totalPrice.toFixed(2);
    
// //   });
// // }
// // cartfill();
// // let theTotalPrice = document.createElement("div");
// //     theTotalPrice.className = "total";
// //     theTotalPrice.innerHTML = `Total Price is ${totalPrice}$`;
// //     cartContainer.append(theTotalPrice);

// //     // remove item fro cart





// // arrow up function
// let arrowUp = document.querySelector(".arrowUp");
// arrowUp.onclick = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// // Getting array of objects from local storage
// let mycart = JSON.parse(localStorage.getItem("myCart")) || [];
// console.log(mycart);

// // Changing cart number
// function changeCartNumber(){
// let cartDisplay = document.getElementById("cart-number");
// cartDisplay.innerHTML = mycart.length;
// }
// changeCartNumber();


// let totalPrice = 0;

// function cartfill() {
//   let cartContainer = document.getElementById("cartContainer");
//   cartContainer.innerHTML = "";

//   let cartWrapper = document.createElement("div");
//   cartWrapper.className = "cartWrapper";

//   mycart.forEach((element) => {
//     let cartItem = document.createElement("div");
//     cartItem.className = "item";

//     let cartImage = document.createElement("img");
//     cartImage.src = element.image;

//     let cartDesc = document.createElement("div");
//     cartDesc.className = "cartDesc";
//     cartDesc.textContent = element.title;

//     let thePrice = document.createElement("div");
//     thePrice.className = "price";
//     thePrice.innerText = `${element.price}$`;

//     let removeButton = document.createElement("div");
//     removeButton.className = "removeButton";
//     removeButton.innerHTML = '<i class="ri-close-circle-fill"></i>';
//     removeButton.addEventListener("click", () => {
//       console.log(element.title);
//       let itemIndex = mycart.indexOf(element);
//       mycart.splice(itemIndex, 1);
//       totalPrice -= element.price;
//       document.querySelector(".total").innerHTML = `Total Price is ${totalPrice.toFixed(2)}$`;

//       changeCartNumber();
//       cartfill();
//     });

//     cartItem.append(cartImage, cartDesc, thePrice, removeButton);
//     cartWrapper.append(cartItem);
//     cartContainer.append(cartWrapper);

//     totalPrice += element.price;
//     totalPrice = parseFloat(totalPrice.toFixed(2));
//   });

//   let theTotalPrice = document.createElement("div");
//   theTotalPrice.className = "total";
//   theTotalPrice.innerHTML = `Total Price is ${totalPrice.toFixed(2)}$`;
//   cartContainer.append(theTotalPrice);
// }

// cartfill();






/**---------------------------------------------------- */
// arrow up function
// let arrowUp = document.querySelector(".arrowUp");
// arrowUp.onclick = () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "smooth",
//   });
// };

// // Getting array of objects from local storage
// let mycart = JSON.parse(localStorage.getItem("myCart")) || [];
// console.log(mycart);

// // Changing cart number
// function changeCartNumber() {
//   let cartDisplay = document.getElementById("cart-number");
//   cartDisplay.innerHTML = mycart.length;
// }
// changeCartNumber();

// let totalPrice = 0;

// function cartfill() {
//   let cartContainer = document.getElementById("cartContainer");
//   cartContainer.innerHTML = "";

//   let cartWrapper = document.createElement("div");
//   cartWrapper.className = "cartWrapper";

//   mycart.forEach((element) => {
//     let cartItem = document.createElement("div");
//     cartItem.className = "item";

//     let cartImage = document.createElement("img");
//     cartImage.src = element.image;

//     let cartDesc = document.createElement("div");
//     cartDesc.className = "cartDesc";
//     cartDesc.textContent = element.title;

//     let thePrice = document.createElement("div");
//     thePrice.className = "price";
//     thePrice.innerText = `${element.price}$`;

//     let removeButton = document.createElement("div");
//     removeButton.className = "removeButton";
//     removeButton.innerHTML = '<i class="ri-close-circle-fill"></i>';
//     removeButton.addEventListener("click", () => {
//       console.log(element.title);
//       let itemIndex = mycart.indexOf(element);
//       mycart.splice(itemIndex, 1);
//       totalPrice -= element.price;
//       document.querySelector(".total").innerHTML = `Total Price is ${totalPrice.toFixed(
//         2
//       )}$`;

//       changeCartNumber();

//       // Call the cartfill() function to update the page cart
//       cartfill();
//     });

//     cartItem.append(cartImage, cartDesc, thePrice, removeButton);
//     cartWrapper.append(cartItem);
//     cartContainer.append(cartWrapper);

//     totalPrice += element.price;
//     totalPrice = parseFloat(totalPrice.toFixed(2));
//   });

//   let theTotalPrice = document.createElement("div");
//   theTotalPrice.className = "total";
//   theTotalPrice.innerHTML = `Total Price is ${totalPrice.toFixed(2)}$`;
//   cartContainer.append(theTotalPrice);
// }

// cartfill();

// arrow up function
let arrowUp = document.querySelector(".arrowUp");
arrowUp.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Getting array of objects from local storage
let mycart = JSON.parse(localStorage.getItem("myCart")) || [];
console.log(mycart);

// Changing cart number
let cartDisplay = document.getElementById("cart-number");
cartDisplay.innerHTML = mycart.length;

let totalPrice = 0;

function cartfill() {
  let cartContainer = document.getElementById("cartContainer");
  cartContainer.innerHTML = "";

  let cartWrapper = document.createElement("div");
  cartWrapper.className = "cartWrapper";

  mycart.forEach((element) => {
    let cartItem = document.createElement("div");
    cartItem.className = "item";

    let cartImage = document.createElement("img");
    cartImage.src = element.image;

    let cartDesc = document.createElement("div");
    cartDesc.className = "cartDesc";
    cartDesc.textContent = element.title;

    let thePrice = document.createElement("div");
    thePrice.className = "price";
    thePrice.innerText = `${element.price}$`;

    let removeButton = document.createElement("div");
    removeButton.className = "removeButton";
    removeButton.innerHTML = '<i class="ri-close-circle-fill"></i>';
    removeButton.addEventListener("click", () => {
      console.log(element.title);
      let itemIndex = mycart.indexOf(element);
      mycart.splice(itemIndex, 1);
      cartContainer.removeChild(cartWrapper); // Remove the entire cartWrapper

      cartfill();
    });

    cartItem.append(cartImage, cartDesc, thePrice, removeButton);
    cartWrapper.append(cartItem);
    cartContainer.append(cartWrapper);

    totalPrice += element.price;
    totalPrice = parseFloat(totalPrice.toFixed(2));
  });

  let theTotalPrice = document.createElement("div");
  theTotalPrice.className = "total";
  theTotalPrice.innerHTML = `Total Price is ${totalPrice.toFixed(2)}$`;
  cartContainer.append(theTotalPrice);
}

cartfill();

// Other parts of your code are missing or incomplete. Please add them accordingly.