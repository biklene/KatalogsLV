fetch("products.json")
.then(response => response.json())
.then(products => {

    const container = document.getElementById("featured-products");


    products.forEach(product => {

        container.innerHTML += `

        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <h3>${product.name}</h3>

            <p>${product.description}</p>

            <strong>${product.price}</strong>

        </div>

        `;

    });

});
