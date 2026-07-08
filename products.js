console.log("products.js darbojas");


fetch("products.json")
.then(response => response.json())
.then(products => {

    console.log("Produkti ielādēti:", products);


    const container = document.getElementById("products-container");


    if (!container) {

        console.log("Nav atrasts products-container");

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

    console.error("Kļūda:", error);

});
