// Simulate a user profile
const userProfile = {
  name: "Sreevalli",
  email: "Sreevalli@example.com",
  address: "123 Gamer Street, Tech City, 12345",
  orders: [
    { id: 1, product: "Pro Headset", date: "2025-04-01", status: "Delivered" },
    { id: 2, product: "RGB Mouse", date: "2025-03-15", status: "Shipped" },
    { id: 3, product: "Gaming PC", date: "2025-02-20", status: "Delivered" }
  ]
};

// Render user profile details
document.addEventListener('DOMContentLoaded', () => {
  const userProfileSection = document.getElementById('user-profile');
  
  if (!userProfileSection) return;

  userProfileSection.innerHTML = `
    <div class="profile-details">
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${userProfile.name}</p>
      <p><strong>Email:</strong> ${userProfile.email}</p>
      <p><strong>Address:</strong> ${userProfile.address}</p>
    </div>

    <div class="order-history">
      <h3>Order History</h3>
      <table>
        <tr>
          <th>Product</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
        ${userProfile.orders.map(order => `
          <tr>
            <td>${order.product}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
          </tr>
        `).join('')}
      </table>
    </div>
  `;
});

// Function to simulate profile editing
function editProfile() {
  const newName = prompt("Enter new name:", userProfile.name);
  const newEmail = prompt("Enter new email:", userProfile.email);
  const newAddress = prompt("Enter new address:", userProfile.address);

  if (newName && newEmail && newAddress) {
    userProfile.name = newName;
    userProfile.email = newEmail;
    userProfile.address = newAddress;
    
    // Re-render the updated profile
    document.getElementById('user-profile').innerHTML = `
      <div class="profile-details">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> ${userProfile.name}</p>
        <p><strong>Email:</strong> ${userProfile.email}</p>
        <p><strong>Address:</strong> ${userProfile.address}</p>
      </div>
      
      <div class="order-history">
        <h3>Order History</h3>
        <table>
          <tr>
            <th>Product</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
          ${userProfile.orders.map(order => `
            <tr>
              <td>${order.product}</td>
              <td>${order.date}</td>
              <td>${order.status}</td>
            </tr>
          `).join('')}
        </table>
      </div>
    `;
  }
}
