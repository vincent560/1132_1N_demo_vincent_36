import { _supabase } from './clientSupabase_36.js';

const productContainer = document.querySelector('.products-container');


let products_36 =[]

const fetchProducts = async () => {
  try{
    let { data, error } = await _supabase.from('product_36').select('*');
    console.log('data', data);
    return data;
  }catch(err){
    console.log(err);
  }

}

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, title, price, remote_img } = product;
      return `
        <div class="single-product">
        <img
          src=${remote_img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${id}-${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_36 = await fetchProducts();
  console.log('projects_36', products_36)
  displayProducts(products_36);
});
