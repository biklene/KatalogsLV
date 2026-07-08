const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));


fetch("products.json")
.then(response => response.json())
.then(products => {


    const product = products.find(p => p.id === productId);

    const container = document.getElementById("product-details");


    if (!container) {
        console.log("Nav atrasts product-details");
        return;
    }


    if (!product) {

        container.innerHTML = `
            <h2>Produkts nav atrasts</h2>
        `;

        return;
    }



    let benefitsHTML = "";

    if (product.benefits) {

        benefitsHTML = `
        <h3>Galvenās priekšrocības</h3>
        <ul>
            ${product.benefits.map(item => `<li>${item}</li>`).join("")}
        </ul>
        `;

    }



    let ingredientsHTML = "";

    if (product.ingredients) {

        ingredientsHTML = `
        <h3>Sastāvdaļas</h3>
        <ul>
            ${product.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>
        `;

    }



    let targetHTML = "";

    if (product.target) {

        targetHTML = `
        <h3>Kam paredzēts</h3>
        <ul>
            ${product.target.map(item => `<li>${item}</li>`).join("")}
        </ul>
        `;

    }



    container.innerHTML = `


    <div class="single-product">


        <img src="${product.image}" alt="${product.name}">



        <div class="product-info">


            <h1>${product.name}</h1>


            <p>
                ${product.description}
            </p>



            <h2>
                ${product.price}
            </h2>



            <p>
                PV punkti: ${product.pv}
            </p>



            <p class="product-id">
                ID: ${product.code}
            </p>



            ${benefitsHTML}


            ${ingredientsHTML}


            <h3>Lietošana</h3>

            <p>
                ${product.usage || ""}
            </p>



            <h3>Iepakojums</h3>

            <p>
                ${product.package || ""}
            </p>



            ${targetHTML}



            <button class="order-button">
                Pasūtīt
            </button>


        </div>


    </div>


    `;


})
.catch(error => {

    console.error("Kļūda ielādējot produktu:", error);

});
