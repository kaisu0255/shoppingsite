document.addEventListener('DOMContentLoaded', () => {
  const cartButtons = document.querySelectorAll('.product-card button');
  
  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      alert('Product added to cart!');
    });
  });
});
