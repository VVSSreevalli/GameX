document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query")?.toLowerCase() || "";

  const allProducts = [
    {
      name: "Mystic Dragon Hoodie",
      image: "assets/dragon hoodie.jpg",
      price: "₹580",
      description: "Embrace the flames with our dragon-themed hoodie."
    },
    {
      name: "Shadow Blade Mousepad",
      image: "assets/Shadow Blade Mousepad.jpeg",
      price: "₹400",
      description: "Slice through your gameplay with pixel precision."
    },
    {
      name: "Galactic Armor T-shirt",
      image: "assets/Galactic Armor T-shirt.jpeg",
      price: "₹640",
      description: "Look stellar with this space-age graphic tee."
    },
    {
      name: "Pixel Knight Hoodie",
      image: "assets/Pixel Knight Hoodie.jpeg",
      price: "₹699",
      description: "Cosy up like a pixelated warrior. Perfect for gaming marathons and chilly nights."
    },
        {
      name: "AFK Beanie",
      image: "assets/AFK Beanie.jpeg",
      price: "₹458",
      description: "Stay warm while away from keyboard. Simple. Stylish. Legendary."
    },
    {
      name: "Mana Mouse Pad",
      image: "assets/mouse pad.jpeg",
      price: "₹200",
      description: "Channel your inner mage with this magic-infused, extra-smooth mouse pad."
    },
    {
      name: "Health Potion Water Bottle",
      image: "assets/Health Potion Water Bottle.jpeg",
      price: "₹250",
      description: "Restore your IRL stamina with every sip from this potion-shaped BPA-free bottle."
    },
    {
      name: "XP Tracker Wristband",
      image: "assets/XP Tracker Wristband.jpg",
      price: "₹800",
      description: "Track your steps like levelling up your character. A wristband for true grinders."
    },
    {
      name: "CyberDrip RGB Keyboard",
      image: "assets/CyberDrip RGB Keyboard.jpg",
      price: "₹2500",
      description: "Ultra-sleek, backlit keyboard with reactive lighting and mechanical keys."
    },
    {
      name: "Noob Slayer Gaming Mouse",
      image: "assets/Noob Slayer Gaming Mouse.webp",
      price: "₹800",
      description: "Precision clicks, RGB glow, and ergonomic feel. Perfect for dominating lobbies."
    },
    {
      name: "Pro Headset",
      price: "₹4,999",
      image: "assets/headset.jpg",
      description: "Immersive surround sound gaming headset with RGB lighting and noise cancellation.",
    },
    {
      name: "RGB Mouse",
      price: "₹2,499",
      image: "assets/mouse.jpg",
      description: "High precision RGB gaming mouse with programmable buttons.",
    },
    {
      name: "Controller",
      price: "₹3,999",
      image: "assets/controller.jpeg",
      description: "Wireless gaming controller compatible with all platforms.",
    },
    {
      name: "Gamer Tee",
      price: "₹999",
      image: "assets/tee.webp",
      description: "Comfortable and stylish gamer t-shirt made from premium cotton.",
    },
    {
      name: "Cap",
      price: "₹699",
      image: "assets/cap.jpg" ,
      description: "Cool gaming-themed cap with adjustable strap.",
    },
    {
      name: "Mechanical Keyboard",
      price: "₹4,999",
      image: "assets/keyboard.webp",
      description: "Custom RGB mechanical keyboard with blue switches.",
    },
    {
      name: "Gaming PC",
      price: "₹89,999",
      image: "assets/assests/PC.jpg",
      description: "High performance gaming PC with RTX graphics card.",
    },
    {
      name: "Gaming Chair",
      price: "₹12,999",
      image: "assets/chair.jpg",
      description: "Ergonomic RGB gaming chair with adjustable height and lumbar support.",
    },
    {
      name: "Mouse Pad XL",
      price: "₹799",
      image: "assets/mouse pad.jpeg",
      description: "Extended waterproof gaming mouse pad with anti-fray edges.",
    },
    {
      name: "Streaming Mic",
      price: "₹5,499",
      image: "assets/mic.jpeg",
      description: "USB condenser microphone with noise reduction for high-quality streaming.",
    }    
  ];

  const resultsContainer = document.getElementById("search-results");
  const matched = allProducts.filter(product =>
    product.name.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query)
  );

  if (matched.length === 0) {
    resultsContainer.innerHTML = `<p>No results found for "<strong>${query}</strong>"</p>`;
  } else {
    matched.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-card";
      div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button onclick="window.location.href='product.html'">View Product</button>
      `;
      resultsContainer.appendChild(div);
    });
  }
});
