// Add item to cart
function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Display cart (for cart.html)
if (window.location.pathname.includes("cart.html")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cartItems");
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
      ${item.product} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

// Remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}

// Add item to cart
function addToCart(product, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(product + " added to cart!");
}

// Display cart (for cart.html)
if (window.location.pathname.includes("cart.html")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItemsDiv = document.getElementById("cartItems");
  let total = 0;

  cart.forEach((item, index) => {
    let div = document.createElement("div");
    div.innerHTML = `
      ${item.product} - ₹${item.price} 
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItemsDiv.appendChild(div);
    total += item.price;
  });

  document.getElementById("totalPrice").innerText = "Total: ₹" + total;
}

// Remove item from cart
function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
}

// ----------------------
// Checkout button logic
// ----------------------
const checkoutBtn = document.getElementById("checkoutBtn");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", function() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    // Redirect to payment page
    window.location.href = "payment.html";
  });
}
