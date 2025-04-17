import { mid_products_xx } from './products_data_xx.js';
console.log('products-container', productsContainer);
const productsContainer = document.querySelector('.products-container');

const displayProductItems = (productItems) => {
  let productMenu = productItems
    .map((item) => {
      const { id, title, category, price, img, desc } = item;
      return `
      <article class="menu-item">
      <img src=${img} alt=${title} class="photo" />
      <div class="item-info">
        <header>
          <h4>${title}</h4>
          <h4 class="price">$${price}</h4>
        </header>
      </div>
    </article>
      `;
    })
    .join('');
  console.log('productMenu', productMenu);
  sectionCenter.innerHTML = productMenu;
};
