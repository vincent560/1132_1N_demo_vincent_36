const productContainer = document.querySelector('.products-container');

const url = 'http://localhost:3000/api/product_36'

let products_36 =[]

const fetchProducts = async (url) => {
  try{
    const response = await fetch(url)
    const data = await response.json()
    console.log('data', data)
    return data
    // displayProducts(data.meals)
  }catch(err){
    console.log(err)
  }
}

const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { title, price, img } = product;
      return `
        <div class="single-product">
        <img
          src=${img}
          class="single-product-img img"
          alt=${title}
        />
        <footer>
          <h3 class="name">${title}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_36 = await fetchProducts(url);
  // console.log('projects_36', products_36)
  displayProducts(products_36);
});
