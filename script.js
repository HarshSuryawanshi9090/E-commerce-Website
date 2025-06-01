const products = [
  {
    name: "Classic Sneakers",
    desc: "Stylish and comfortable sneakers for everyday wear.",
    price: 49.99,
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Smart Watch",
    desc: "Track your fitness and stay connected on the go.",
    price: 109.99,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Stylish Handbag",
    desc: "Elegant design with plenty of space for essentials.",
    price: 69.99,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Wireless Headphones",
    desc: "Enjoy high-quality sound and noise cancellation.",
    price: 89.99,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80"
  }
];

let cartCount = 0;

function renderProducts() {
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';
  products.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${p.desc}</p>
      <div class="price">$${p.price.toFixed(2)}</div>
      <button class="add-to-cart-btn" data-idx="${idx}">Add to Cart</button>
    `;
    productsList.appendChild(card);
  });
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      document.getElementById('cart-count').textContent = cartCount;
      btn.textContent = "Added!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "Add to Cart";
        btn.disabled = false;
      }, 1000);
    });
  });
}

document.addEventListener('DOMContentLoaded', renderProducts);
