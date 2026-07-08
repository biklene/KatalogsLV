fetch("products.json")
  .then(response => response.json())
  .then(products => {

    const container = document.querySelector(".products");

    products.forEach(product => {

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p><b>Kategorija:</b> ${product.category}</p>
        <p>${product.description}</p>
        <p>${product.price}</p>
      `;

      container.appendChild(card);

    });

  });
