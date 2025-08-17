const products = [
  {
    id: 1,
    name: "Pro Headset",
    price: "₹4,999",
    image: "assets/headset.jpg" ,
    description: "Immersive surround sound gaming headset with RGB lighting and noise cancellation.",
    arSupported: true
  },
  {
    id: 2,
    name: "RGB Mouse",
    price: "₹2,499",
    image: "assets/mouse.jpg",
    description: "High precision RGB gaming mouse with programmable buttons.",
    arSupported: false
  },
  {
    id: 3,
    name: "Controller",
    price: "₹3,999",
    image: "assets/controller.jpeg",
    description: "Wireless gaming controller compatible with all platforms.",
    arSupported: true
  },
  {
    id: 4,
    name: "Gamer Tee",
    price: "₹999",
    image: "assets/tee.webp",
    description: "Comfortable and stylish gamer t-shirt made from premium cotton.",
    arSupported: false
  },
  {
    id: 5,
    name: "Cap",
    price: "₹699",
    image: "assets/cap.jpg",
    description: "Cool gaming-themed cap with adjustable strap.",
    arSupported: false
  },
  {
    id: 6,
    name: "Keyboard",
    price: "₹4,999",
    image: "assets/keyboard.webp",
    description: "Custom RGB mechanical keyboard with blue switches.",
    arSupported: true
  },
  {
    id: 7,
    name: "Gaming PC",
    price: "₹89,999",
    image: "assets/PC.jpg",
    description: "High performance gaming PC with RTX graphics card.",
    arSupported: true
  },
  {
    id: 8,
    name: "Gaming Chair",
    price: "₹12,999",
    image: "assets/chair.jpg",
    description: "Ergonomic RGB gaming chair with adjustable height and lumbar support.",
    arSupported: true
  },
  {
    id: 9,
    name: "Mouse Pad XL",
    price: "₹799",
    image: "assets/mouse pad.jpeg",
    description:"Extended waterproof gaming mouse pad with anti-fray edges.",
    arSupported: true
  },
  {
    id: 10,
    name: "Streaming Mic",
    price: "₹5,499",
    image: "assets/mic.jpeg",
    description: "USB condenser microphone with noise reduction for high-quality streaming.",
    arSupported: true
  }
  
];

// Render product details on checkout page
document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  const product = products.find(p => p.id === productId);
  const checkoutSection = document.getElementById('checkout-detail');

  if (!checkoutSection || !product) {
    checkoutSection.innerHTML = '<p>Product not found.</p>';
    return;
  }

  checkoutSection.innerHTML = `
    <h2>Checkout - ${product.name}</h2>
    <img src="${product.image}" alt="${product.name}" class="checkout-product-img" />
    <div class="checkout-info">
      <h3>${product.name}</h3>
      <div class="price">${product.price}</div>
      <div class="description">${product.description}</div>
      <div class="quantity">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" value="1" min="1" />
      </div>
      <button onclick="proceedToPayment(${product.id})">Proceed to Payment</button>
    </div>
  `;
});

// Proceed to Payment (dummy function for now)
function proceedToPayment(productId) {
  const quantity = document.getElementById('quantity').value;
  showAlert(`Proceeding to payment for Product ID: ${productId} with quantity: ${quantity}`);
}

function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
  document.getElementById('custom-alert').style.display = 'block';
}

function closeAlert() {
  document.getElementById('custom-alert').style.display = 'none';
}


const image = document.createElement('img');
image.src = product.imageURL;
image.className = 'checkout-product-img';
checkoutDetailDiv.appendChild(image);
