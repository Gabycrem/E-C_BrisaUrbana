const URL = "../assets/data/products.json";
const container = document.getElementById('list-products');
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let productsData = [];

fetch(URL)
    .then(res => res.json())
    .then(data => {
        productsData = data;
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
                    <button class="btn-add-cart" id="btn-add-cart-${product.id}">
                        <i class='bx bx-cart-add'></i> Añadir
                    </button>
                </footer>
            </article>
        `
        });
    })
    .catch(e => console.log(e));

function addToCard(product) {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
        exists.qty++;
    } else {
        cart.push({...product, qty: 1})
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

container.addEventListener('click', (e)=> {
    if(e.target.closest('.btn-add-cart')){
        const card = e.target.closest('.card');
        const id = parseInt(card.dataset.id);
        const product = productsData.find(p => p.id === id);

        addToCard(product);
    }
})

function uploadCart(){
    console.log("carrito cargado")
}

document.addEventListener("DOMContentLoaded", () => {
    uploadCart();
})

