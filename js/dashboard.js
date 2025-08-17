const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Monthly Sales (in ₹)',
      data: [12000, 19000, 3000, 5000, 10000],
      backgroundColor: '#8a2be2'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    },
    scales: {
      x: { ticks: { color: '#fff' } },
      y: { ticks: { color: '#fff' } }
    }
  }
});

// Product form logic (example)
document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;
  const image = document.getElementById('productImage').value;
  const desc = document.getElementById('productDesc').value;

  alert(`Product Added:\nName: ${name}\nPrice: ${price}\nImage: ${image}\nDescription: ${desc}`);
  // Here, connect to backend or localStorage as needed
});
