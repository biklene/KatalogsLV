let allProducts = [];

fetch("./products.json")
.then(response => response.json())
.then(data => {

    allProducts = data;

    displayProducts(allProducts);

})
.catch(error => {
    console.log(error);
});


function displayProducts(products){

const container = document.getElementById("products-container");

container.innerHTML="";


products.forEach(product=>{


container.innerHTML += `

<div class="product-card">

<img src="${product.image}" 
alt="${product.name}">

<h3>${product.name}</h3>

<p>${product.description}</p>

<b>${product.price}</b>

</div>

`;

});


}



function filterProducts(category){


if(category=="all"){

displayProducts(allProducts);

return;

}


let result = allProducts.filter(product =>
product.category == category
);


displayProducts(result);


}
