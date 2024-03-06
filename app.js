var cardImg = document.querySelector(".card-img");
var h2 = document.querySelector(".card-info h2");
var p = document.querySelector(".card-info p");
var btn = document.querySelector(".card-info button");

fetch("https://backoffice.nodemy.vn/api/products?populate=*")
  .then((res) => res.json())
  .then((res) => {
    let data = res.data[0];
    cardImg.classList.remove("loading");
    h2.classList.remove("loading");
    p.classList.remove("loading");
    btn.classList.remove("loading");

    cardImg.innerHTML = `<img src=https://backoffice.nodemy.vn${data?.attributes?.image?.data[0]?.attributes?.url}>`;
    btn.innerHTML = "Read more";
    h2.innerHTML = data?.attributes.name;
    p.innerHTML = data?.attributes.description.substring(0, 100) + "...";
  });
