let allProducts = [];

console.log("products.js darbojas");


fetch("products.json")
.then(response => response.json())
.then(products => {

    allProducts = products;

    console.log("Produkti ielādēti:", allProducts);

    displayProducts(allProducts);

})
.catch(error => {

    console.error("Kļūda ielādējot produktus:", error);

});



function displayProducts(products) {

    const container = document.getElementById("products-container");


    if (!container) {
        return;
    }


    container.innerHTML = "";


    products.forEach(product => {


        container.innerHTML += `

        <div class="product-card" onclick="openProduct(${product.id})">


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

        return;
    }


    const filteredProducts = allProducts.filter(product => {

        return product.category === category;

    });


    displayProducts(filteredProducts);


}




function openProduct(id) {

    window.location.href = "product.html?id=" + id;

}
