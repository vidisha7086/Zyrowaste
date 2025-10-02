// Login check
const loggedInUser = localStorage.getItem("loggedInUser");
if (!loggedInUser) {
  alert("Please login to proceed to payment.");
  window.location.href = "login.html";
}
// Display cart summary on payment page
if (window.location.pathname.includes("payment.html")) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let summaryDiv = document.getElementById("paymentSummary");
  let total = 0;

  if (cart.length === 0) {
    summaryDiv.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    let html = "<h3>Order Summary:</h3><ul>";
    cart.forEach(item => {
      html += `<li>${item.product} - ₹${item.price}</li>`;
      total += item.price;
    });
    html += `</ul><h3>Total: ₹${total}</h3>`;
    summaryDiv.innerHTML = html;
  }
}

// Simulate payment
function completePayment() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Simulate payment success
  alert("Payment Successful! Generating invoice...");

  // Generate invoice (basic HTML)
  let invoice = `
    <h2>ZyroWaste Invoice</h2>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <ul>
      ${cart.map(item => `<li>${item.product} - ₹${item.price}</li>`).join('')}
    </ul>
    <h3>Total: ₹${cart.reduce((a,b)=>a+b.price,0)}</h3>
    <p>Thank you for your purchase!</p>
  `;

  // Save invoice in localStorage for demo purposes
  localStorage.setItem("lastInvoice", invoice);

  // Clear cart
  localStorage.removeItem("cart");

  // Redirect to dashboard
  window.location.href = "dashboard.html";
}
