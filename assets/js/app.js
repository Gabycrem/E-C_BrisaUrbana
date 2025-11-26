const URL = "../assets/data/products.json";
const container = document.getElementById('list-products');

fetch(URL)
    .then(res => res.json())
    .then(data => {
        container.innerHTML = "";
        data.forEach(product => {
            container.innerHTML += `
            <article class="card" data-id="${product.id}">
                <figure class="card-image">
                    <img src="${product.image}" alt="${product.name}">
                </figure>
                <h3 class="card-title">${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <footer class="card-footer">
                    <p class="card-price">$${product.price}</p>
                    <button class="btn-add-cart">
                        <i class='bx bx-cart-add'></i> Añadir
                    </button>
                </footer>
            </article>
        `
        });
    })
    .catch(e => console.log(e));