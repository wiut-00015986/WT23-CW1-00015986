const productList = [
  {
    id: 1,
    name: "Nike AJ 1 HIGH",
    price: 150,
    type: "shoes",
  },
  {
    id: 2,
    name: "Nike Dunk low",
    price: 120,
    type: "shoes",
  },
  {
    id: 3,
    name: "Nike AJ 4",
    price: 135,
    type: "shoes",
  },
  {
    id: 4,
    name: "Nike Dunk Low",
    price: 160,
    type: "shoes",
  },
  {
    id: 5,
    name: "Adidas Stan Smith",
    price: 90,
    type: "shoes",
  },
];

let htmlCode = ``;

//func to show cards list

function showCards() {
  productList.forEach((item) => {
    htmlCode += `
        <div class="card">
            <img
                src="./assets/img/${item.type}${item.id}.jpg"
                alt="Avatar"
                style="width: 100%"
            />
            <div class="card-text">
                <h4>${item.name}</h4>
                <p>${item.price} $</p>
                <a href="#" class="btn">Buy</a>
            </div>
        </div>
    `;
    document.querySelector("#card-list").innerHTML = htmlCode;
  });
}

window.onload = function () {
  showCards();
};
