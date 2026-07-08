const params = new URLSearchParams(window.location.search);

const productId = Number(params.get("id"));


fetch("products.json")
.then(response => response.json())
.then(products => {


    const product = products.find(p => p.id === productId);


    const container = document.getElementById("product-details");


    if (!product) {

        container.innerHTML = "<h2>Produkts nav atrasts</h2>";

        return;
    }


    container.innerHTML = `

    <div class="single-product">


        <img src="${product.image}" alt="${product.name}">


        <div class="product-info">


            <h1>${product.name}</h1>


            <p>${product.description}</p>


            <h2>${product.price}</h2>


            <p>PV punkti: ${product.pv}</p>


            <button>
                Pasūtīt
            </button>


        </div>


    </div>

    `;


});
