const productList = [
  {
    id: 1,
    name: "Jeans",
    price: 20,
    type: "men",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 45,
    type: "men",
  },
  {
    id: 3,
    name: "Hoodie",
    price: 50,
    type: "men",
  },
  {
    id: 4,
    name: "Sweatshirt",
    price: 39,
    type: "men",
  },
  {
    id: 5,
    name: "Sweatshirt",
    price: 55,
    type: "men",
  },
  {
    id: 6,
    name: "Sweatshirt",
    price: 49,
    type: "men",
  },
];

let menHTML = ``;

//func to show cards list

function showCards() {
    productList.forEach((item) => {
        menHTML += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <p>${item.price} $</p>
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `
        document.querySelector("#card-list").innerHTML = menHTML;
    })
}

window.onload = function () {
    showCards()
}

