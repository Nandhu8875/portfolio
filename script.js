function toggleNav() {
  const nav = document.getElementById('nav');
  if (getComputedStyle(nav).display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

function copyEmail() {
  const email = 'nandhagopalvm19@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied: ' + email);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
