const params = new URLSearchParams(window.location.search);

const productId = params.get("id");


fetch("products.json")
.then(response => response.json())
.then(products => {


    const product = products.find(item => item.id == productId);


    if (!product) {

        document.getElementById("product-detail").innerHTML =
        "<h2>Produkts nav atrasts</h2>";

        return;

    }



    document.getElementById("product-detail").innerHTML = `


        <div class="single-product">


            <img src="${product.image}" 
                 alt="${product.name}">


            <div class="product-info">


                <h1>
                    ${product.name}
                </h1>


                <p>
                    ${product.description}
                </p>


                <h2>
                    ${product.price}
                </h2>


                <p>
                    PV: ${product.pv || ""}
                </p>


            </div>


        </div>


    `;


})
.catch(error => {

    console.error("Kļūda:", error);

});
