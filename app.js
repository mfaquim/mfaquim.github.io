document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  if (scroll_position > 800) {
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.backgroundColor = "#768ba3";
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.boxShadow =  "-2px 15px 20px #3f4a57";
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.transition = "transition: .4s ease-in-out;";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.backgroundColor = "#768ba3";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.boxShadow =  "-2px 15px 20px #3f4a57";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.transition = "transition: .4s ease-in-out;";
    document.querySelector("#header > div.header.container > div > div.nav-list > div").style.backgroundColor = "#768ba3";
    document.querySelector("#header > div.header.container > div > div.nav-list > div").style.transition = "transition: .4s ease-in-out;";
  } else {
    document.querySelector("#header > div.header.container > div > div.nav-list > nav").style.backgroundColor = "inherit";
    document.querySelector("#header > div.header.container > div > div.brand > a > h1").style.backgroundColor = "inherit";
    document.querySelector("#header > div.header.container > div > div.nav-list > div").style.backgroundColor = "inherit";
  }
});

document.querySelectorAll(".nav").forEach((e) => {
  e.addEventListener('click', function(el) {
    el.preventDefault();
    setTimeout(function() {
      window.location = e.target.href;
    }, 450);
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

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


const languageButton = document.querySelector("#translateEn");
const languageButton2 = document.querySelector("#translatePt");
const selectEnglish = document.querySelectorAll('span[lang="en"]');
const selectPortuguese = document.querySelectorAll('span[lang="pt"]');
translate(selectPortuguese, selectEnglish);
languageButton.addEventListener("click", (event) => {
  event.preventDefault();
  translate(selectEnglish, selectPortuguese);
});

languageButton2.addEventListener("click", (event) => {
  event.preventDefault();
  translate(selectPortuguese, selectEnglish);
});

function translate(language, language2) {
  for (let i = 0; i < language.length; i++) {
    const element = language[i].classList;
    element.add("selected");
    const element2 = language2[i].classList;
    element2.remove("selected");
  }
}

