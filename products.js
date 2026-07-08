let allProducts = [];


// Ielādē produktus no products.json

fetch("/products.json")
.then(response => response.json())
.then(data => {

    allProducts = data;

    displayProducts(allProducts);

})
.catch(error => {

    console.error("Neizdevās ielādēt produktus:", error);

});




// Parāda produktus

function displayProducts(products) {

    const container = document.getElementById("products-container");


    if (!container) {
        console.error("Nav atrasts products-container");
        return;
    }


    container.innerHTML = "";


    products.forEach(product => {


        container.innerHTML += `

        <div class="product-card">


            <img src="${product.image}" 
                 alt="${product.name}">


            <h3>
                ${product.name}
            </h3>


            <p>
                ${product.description}
            </p>


            <strong>
                ${product.price}
            </strong>


            <br><br>


            <a href="product.html?id=${product.id}">
                Skatīt produktu
            </a>


        </div>

        `;


    });


}





// Filtrs pēc kategorijas

function filterProducts(category) {


    if (category === "all") {

        displayProducts(allProducts);

        return;

    }



    const filteredProducts = allProducts.filter(product => 
        product.category === category
    );


    displayProducts(filteredProducts);


}
