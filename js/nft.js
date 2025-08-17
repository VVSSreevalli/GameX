const nftData = [
  {
    id: 1,
    title: "Dragon Slayer Blade",
    creator: "MysticForge",
    price: "0.75 ETH",
    image: "assets/nfts/dragon slayer.jpg"
  },
  {
    id: 2,
    title: "Cyberwolf Skin",
    creator: "WolfPack Studios",
    price: "1.20 ETH",
    image: "assets/nfts/wolfskin.jpg"
  },
  {
    id: 3,
    title: "Shadow Elf Emblem",
    creator: "ElvenArts",
    price: "0.45 ETH",
    image: "assets/nfts/emblem.jpg"
  },
  {
    id: 4,
    title: "Voidwalker Cape",
    creator: "DarkMode",
    price: "1.90 ETH",
    image: "assets/nfts/voidwalker.jpeg"
  },
  {
    id: 5,
    title: "Galaxy Guardian",
    creator: "StarCraze",
    price: "2.5 ETH",
    image: "assets/nfts/galaxy guardians.avif"
  },
  {
    id: 6,
    title: "Crimson Phoenix",
    creator: "FlareArts",
    price: "0.98 ETH",
    image: "assets/nfts/phoenix.jpeg"
  },
  {
    id: 7,
    title: "Neon Samurai",
    creator: "BladeByte",
    price: "1.45 ETH",
    image: "assets/nfts/samurai.jpeg"
  },
  {
    id: 8,
    title: "Spectral Dragon",
    creator: "EtherRealms",
    price: "3.0 ETH",
    image: "assets/nfts/dragon.jpeg"
  }
];

function renderNFTs() {
  const container = document.getElementById("nftList");
  nftData.forEach(nft => {
    const nftCard = document.createElement("div");
    nftCard.className = "nft-card";

    nftCard.innerHTML = `
      <img src="${nft.image}" alt="${nft.title}" />
      <h3>${nft.title}</h3>
      <div class="creator">Creator: ${nft.creator}</div>
      <div class="price">Price: ${nft.price}</div>
      <button onclick="buyNFT(${nft.id})">Buy NFT</button>
    `;

    container.appendChild(nftCard);
  });
}

function buyNFT(id) {
  const nft = nftData.find(n => n.id === id);
  showAlert(`Buying ${nft.title} for ${nft.price}... (Feature coming soon!)`);
}

function showAlert(message) {
  document.getElementById('alert-message').innerText = message;
  document.getElementById('custom-alert').style.display = 'block';
}

function closeAlert() {
  document.getElementById('custom-alert').style.display = 'none';
}


window.onload = renderNFTs;
