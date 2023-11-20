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
  {
    id: 1,
    name: "Hoodie",
    price: 49,
    type: "women",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 45,
    type: "women",
  },
  {
    id: 3,
    name: "Sweatshirt",
    price: 50,
    type: "women",
  },
  {
    id: 4,
    name: "Nike AJ4",
    price: 125,
    type: "women",
  },
  {
    id: 5,
    name: "Sweatshirt",
    price: 55,
    type: "women",
  },
  {
    id: 6,
    name: "NIKE Dunk",
    price: 140,
    type: "women",
  },
  {
    id: 7,
    name: "Hoodie",
    price: 49,
    type: "women",
  },
];

let HTML = ``;

//func to show cards list

function showCards() {
    productList.forEach((item) => {
        HTML += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <p>${item.price} $</p>
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `;
        document.querySelector("#card-list").innerHTML = HTML;
    })
}

window.onload = function () {
    showCards()
}

