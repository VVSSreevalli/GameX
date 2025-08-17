// List of all products
const products = [
  {
    id: 1,
    name: "Pro Headset",
    price: "₹4,999",
    image: "assets/headset.jpg",
    description: "Immersive surround sound gaming headset with RGB lighting and noise cancellation.",
    arSupported: true
  },
  {
    id: 2,
    name: "RGB Mouse",
    price: "₹2,499",
    image: "assets/mouse.jpg",
    description: "High precision RGB gaming mouse with programmable buttons.",
    arSupported: true
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
    arSupported: true
  },
  {
    id: 5,
    name: "Cap",
    price: "₹699",
    image: "assets/cap.jpg" ,
    description: "Cool gaming-themed cap with adjustable strap.",
    arSupported: true
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
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
    description: "Extended waterproof gaming mouse pad with anti-fray edges.",
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

// Render individual product on product.html
function renderSingleProduct() {
  const params = new URLSearchParams(window.location.search);
  const productId = parseInt(params.get('id'));

  const product = products.find(p => p.id === productId);
  const detailSection = document.getElementById('product-detail');

  if (!detailSection || !product) return;

  detailSection.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-info">
      <h2>${product.name}</h2>
      <div class="price">${product.price}</div>
      <div class="description">${product.description}</div>
      <div class="quantity">
        <label for="quantity">Quantity:</label>
        <input type="number" id="quantity" value="1" min="1" />
      </div>
      <div class="button-group">
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button class="buy-now" onclick="buyNow(${product.id})">Buy Now</button>
        ${product.arSupported ? '<a href="ar-view.html" class="ar-button">🔍 View in AR</a>' : ''}
      </div>
    </div>
  `;
}

// Add to Cart function
function addToCart(productId) {
  // Get existing cart or initialize it
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const product = products.find(p => p.id === productId);

  // Add product to cart
  if (product) {
    cart.push({
      name: product.name,
      image: product.image,
      price: product.price.replace(/[₹,]/g, ''), // ✅ remove ₹ and commas
      description: product.description,
      id: product.id
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Added to cart! Product: " + product.name);
  }
}

// Buy Now function
function buyNow(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    // Redirect to checkout page with the product ID
    window.location.href = `checkout.html?id=${productId}`;
  } else {
    alert("Product not found!");
  }
}

// Call renderSingleProduct when the page loads
document.addEventListener('DOMContentLoaded', () => {
  renderSingleProduct();
});
