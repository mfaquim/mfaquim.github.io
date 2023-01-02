document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 800) {
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.backgroundColor = "#768ba3";
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.boxShadow =  "-2px 15px 20px #3f4a57";
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.transition = "transition: .4s ease-in-out;";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.backgroundColor = "#768ba3";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.boxShadow =  "-2px 15px 20px #3f4a57";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.transition = "transition: .4s ease-in-out;";
  } else {
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.backgroundColor = "inherit";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.backgroundColor = "inherit";
  }
});


const hamburguer = document.querySelector(".header .nav-bar .nav-list .hamburguer");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);


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

