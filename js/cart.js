// document.addEventListener("DOMContentLoaded", () => {
//   const cartItemsContainer = document.getElementById("cart-items");
//   const cartTotalSpan = document.getElementById("cart-total");
//   const checkoutBtn = document.getElementById("checkout-btn");

//   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   function updateCartDisplay() {
//     cartItemsContainer.innerHTML = "";
//     let total = 0;

//     if (cart.length === 0) {
//       cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
//       cartTotalSpan.textContent = "0";
//       return;
//     }

//     cart.forEach((item, index) => {
//       const itemDiv = document.createElement("div");
//       itemDiv.className = "cart-item";
//       itemDiv.innerHTML = `
//         <img src="${item.image}" alt="${item.name}">
//         <div class="cart-item-details">
//           <h3>${item.name}</h3>
//           <p>₹${item.price}</p>
//         </div>
//         <button class="remove-btn" data-index="${index}">Remove</button>
//       `;
//       cartItemsContainer.appendChild(itemDiv);
//       const cleanPrice = parseFloat(item.price.replace(/[₹,]/g, ''));
//       total += cleanPrice;


//     });

//     cartTotalSpan.textContent = total.toFixed(2);

//     document.querySelectorAll(".remove-btn").forEach(btn => {
//       btn.addEventListener("click", (e) => {
//         const index = e.target.getAttribute("data-index");
//         cart.splice(index, 1);
//         localStorage.setItem("cart", JSON.stringify(cart));
//         updateCartDisplay();
//       });
//     });
//   }

//   checkoutBtn.addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("Your cart is already empty.");
//       return;
//     }
  
//     alert("Thank you for your purchase!");
//     cart = []; // Clear the cart
//     localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
//     updateCartDisplay(); // Refresh cart view
//   });
  

//   updateCartDisplay();
// });

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalSpan = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartDisplay() {
    cartItemsContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
      cartTotalSpan.textContent = "0";
      return;
    }

    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(itemDiv);

      const cleanPrice = parseFloat(item.price.replace(/[₹,]/g, ''));
      total += cleanPrice;
    });

    cartTotalSpan.textContent = total.toFixed(2);

    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const index = e.target.getAttribute("data-index");
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
      });
    });
  }

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      showAlert("Your cart is already empty.");
      return;
    }

    showAlert("Thank you for your purchase!");
    cart = []; // Clear the cart
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
    updateCartDisplay(); // Refresh cart view
  });

  function showAlert(message) {
    document.getElementById('alert-message').innerText = message;
    document.getElementById('custom-alert').style.display = 'block';
  }

  window.closeAlert = function () {
    document.getElementById('custom-alert').style.display = 'none';
  };

  updateCartDisplay();
});
