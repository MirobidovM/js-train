// #1
// alert("Ashettaga xush kelibsiz");

// var name = prompt("Ваше имя");
// var age = prompt("Ваш возраст");
// var job = prompt("Ваш профессия");

// console.log(`
// USER
// Имя: ${name},
// Возраст: ${age},
// Профессия: ${job}
// `);

// #2
// var number = prompt("Raqam krgazing");

// console.log(Number(number));

// QOSHIHS
// #3
// var a = 10;
// var b = 11;
// var summ = a + b;

// console.log(summ);

// bag
// #4
// var summ = 0.1 + 0.2;

// console.log(summ);

// AYRISH
// // #5
// var a = 10;
// var b = 8;
// var summ = a - b;

// console.log(summ);

// Qiymat oshiradi
// #6
// var a = 2;

// var summ = 2 + a++;

// a++;

// console.log(summ);
// console.log(a);

// #7
// var a = 2;

// var summ = 2 + ++a;

// console.log(summ);
// console.log(a);

// Qiymat kamaytiradi
// #8
// var a = 2;

// var summ = 2 + a--;

// console.log(summ);
// console.log(a);

// #9
// var a = 2;

// var summ = 2 + --a;

// console.log(summ);
// console.log(a);

// YAHLITLASH
// #10

// var a = 12.6;

// var roundFloor = Math.floor(a); // oziga eng kichik soni yahlitlaydi
// var roundCeil = Math.ceil(a); //oziga eng yaqin soni yahlitlaydi
// var round = Math.round(a); //matematik yahlitlash

// console.log("floor", roundFloor);
// console.log("ceil", roundCeil);
// console.log("round", round);

// random son yahlitlamagan
// console.log(Math.random() * 10);

// IF ELSE train
// var age = Number(prompt("Yoshingiz"));

// if (age < 0) {
//   console.log("hali tugilmagan");
// } else if (age <= 15) {
//   console.log("Yosh bola");
// } else if (age <= 20) {
//   console.log("O'smir yigit");
// } else {
//   console.log("katta yigit");
// }

// innerHTML
// var elText = document.querySelector(".js-text");

// elText.innerHTML = "<strong>Hello world!!!</strong>";

// HTMLda elementni talash
// // id orqali taladik
// var elText = document.querySelector("#js-text");
// var elText = document.getElementById("js-text");

// elText.innerHTML = "id orqali talab oldik";

// // class orqali taladik
// var elText = document.querySelector(".js-text");
// var elText = document.getElementsByClassName("js-text")[0];

// elText.innerHTML = "class orqali talab oldik";

// // tag orqali taladik
// // var elText = document.querySelector("h1");
// var elText = document.getElementsByTagName("h1")[0];

// elText.innerHTML = "tag orqali talab oldik";

// querySelectorAll

// var texts = document.querySelectorAll("#js-text");

// console.log(texts);

// FOR loop
// for (var i = 1; i <= 10; i++) {
//   console.log("salom");
//   for (var j = 1; j <= 1; j++) {
//     console.log("alik");
//   }
// }

// darsdagi mashq
for (var i = 1; i <= 100; i++) {
  // i += 2       har 3 chisini
  if (i % 2 === 0) {
    console.log(i);
  }
}

createElement;
var elWrapper = document.querySelector(".wrapper");

var elList = document.createElement("ul");

var elItem = document.createElement("li");

var elImg = document.createElement("img");

var elText = document.createElement("p");

elWrapper.appendChild(elList);

elList.appendChild(elItem);

elItem.appendChild(elImg);
elImg.src = "https://picsum.photos/200";
elImg.className = "rasm";
elImg.id = "rasm";
elImg.alt = "Site logo";
elImg.width = "200";
elImg.height = "200";

elItem.append(elText);
elText.textContent = "Rasim zorakan";
elItem.className = "item-wrapper";

// FUNCTIONS
// #1
// function log() {
//   console.log("Hello");
// }

// log();

// #2
// function square() {
//   console.log(2 * 2);
// }

// square();

// #3
// function square() {
//   console.log();
// }

// square();
