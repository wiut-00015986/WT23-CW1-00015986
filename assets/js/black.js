const productList = [
  {
    id: 1,
    name: "Jeans",
    price: 20,
    newprice: 15,
    type: "black",
  },
  {
    id: 2,
    name: "Hoodie",
    price: 45,
    newprice: 25,
    type: "black",
  },
  {
    id: 3,
    name: "VANS",
    price: 99,
    newprice: 85,
    type: "black",
  },
  {
    id: 4,
    name: "AJ 1 HIGH",
    price: 130,
    newprice: 110,
    type: "black",
  },
  {
    id: 6,
    name: "Hoodie",
    price: 49,
    newprice: 35,
    type: "black",
  },
];

let blackHTML = ``;

//func to show cards list

function showCards() {
  productList.forEach((item) => {
    blackHTML += `
        <div class="card">
                    <img src="assets/img/${item.type}${item.id}.jpg" alt="">
                    <div class="card-text">
                        <h4>${item.name}</h4>
                        <div class="button-group">
                          <p style="text-decoration:line-through;color:black;">${item.price} $</p>
                          <p>${item.newprice} $</p>
                        </div>
                       
                        <a href="#" class="btn">Buy</a>
                    </div>
                </div>
    `;
    document.querySelector("#card-list").innerHTML = blackHTML;
  });
}

window.onload = function () {
  showCards();
};
