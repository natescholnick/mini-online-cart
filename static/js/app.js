function displayProducts(products) {
  products.map((product) => {
    const product_card = `<div class="col-md-4">
    <div class="card card-id$.id}">
    <img src="${product.img_url}" alt="product id ${product.id}">
    <h2 id="name${product.id}">${product.name}</h2>
    <div class="product-price" id="price${product.id}">$${product.price}</div>
    <div class="description">${product.description}</div>
    <div class="btn btn-primary" id="btn${product.id}">Add to Cart</div>
    </div>
    </div>`;
    $('.row-products').append(product_card);
  })
}


$.getJSON('../../products.json', (data) => displayProducts(data));
