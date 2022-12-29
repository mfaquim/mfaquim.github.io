document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 800) {
    header.style.backgroundColor = "#3f4a57";
    header.style.boxShadow =  "-1px 15px 10px #3f4a57";
    header.style.transition = ".3s ease";
    let heroSet = "<span>M</span>arco Antonio <span>F</span>aquim";
    document.querySelector("#header > div > div > div.brand > a > h1").innerHTML = heroSet;
  } else {
    header.style.backgroundColor = "transparent";
    header.style.boxShadow =  "none";
    document.querySelector("#header > div > div > div.brand > a > h1").innerHTML = "<span>MF</span>aquim";
  }
});


const hamburguer = document.querySelector(".header .nav-bar .nav-list .hamburguer");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);
const header = document.querySelector(".header.container");


hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});



menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

