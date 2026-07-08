let allProducts = [];


console.log("products.js darbojas");


fetch("products.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    console.log("Produkti ielādēti:", products);

    displayProducts(allProducts);

});



function displayProducts(products) {

    const container = document.getElementById("products-container");

    if (!container) {
        return;
    }


    container.innerHTML = "";


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

}




function filterProducts(category) {


    if (category === "all") {

        displayProducts(allProducts);

    } else {

        const filtered = allProducts.filter(product => 
            product.category === category
        );

        displayProducts(filtered);

    }

}
