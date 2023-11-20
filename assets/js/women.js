const productList = [
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

let womenHTML = ``;

//func to show cards list

function showCards() {
    productList.forEach((item) => {
        womenHTML += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <p>${item.price} $</p>
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `
        document.querySelector("#card-list").innerHTML = womenHTML;
    })
}

window.onload = function () {
    showCards()
}

