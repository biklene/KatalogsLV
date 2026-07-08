fetch("products.json")
.then(response => response.json())
.then(products => {

    const container = document.getElementById("products-container");

    // Ja šajā lapā nav produktu konteinera, neko nedarām
    if (!container) {
        return;
    }

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

})
.catch(error => {
    console.error("Kļūda ielādējot produktus:", error);
});
