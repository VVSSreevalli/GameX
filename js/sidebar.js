function toggleSidebar() {
  document.querySelector('.sidebar').classList.toggle('active');
  document.querySelector('.overlay').classList.toggle('active');
}

function closeSidebar() {
  document.querySelector('.sidebar').classList.remove('active');
  document.querySelector('.overlay').classList.remove('active');
}
