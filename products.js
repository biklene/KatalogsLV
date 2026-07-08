```javascript
let allProducts = [];


// Ielādē produktus no products.json

fetch("products.json")
.then(response => response.json())
.then(data => {

    allProducts = data;

    displayProducts(allProducts);

})
.catch(error => {

    console.error("Kļūda ielādējot produktus:", error);

});




// Parāda produktus lapā

function displayProducts(products) {


    const container = document.getElementById("products-container");


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


        </div>

        `;


    });


}





// Filtrē pēc kategorijas

function filterProducts(category) {


    if (category === "all") {

        displayProducts(allProducts);

        return;

    }



    const filtered = allProducts.filter(product => {

        return product.category === category;

    });



    displayProducts(filtered);


}
```
