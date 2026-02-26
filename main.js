//une boite de dialogue écrite avec du js
// test du lien entre le html et le js
// alert("Hello There!")

// WORKSHOP:
// !JOURNALISATION ET CONSOLE

// alert("Bonjour tous le monde!"); // Ne pas utiliser pour le débogage
// console.log("bonjour tout le monde!");
// console.warn("Ceci est un avertissement");
// console.error("Ceci est une erreur");
// console.log(prompt("age"));

//!VARIABLES

// var → ancienne méthode (modifiable et redéclarable)
// const → constante (non modifiable)
// var nom = "Ali";
// console.log(nom);
// nom = true; // réassignation
// console.log("nom:", nom);
// nom = "abcd";

// const person = "Foulen";
// // person = "Foulani";
// var age = 99;
// console.log(age);
// prenom = "Samiha";
// console.log(prenom);
// var personne;
// console.log(personne);
// age = 100;
// console.log(age);
// age = "avbeh";
// console.log(age);

//!TYPES DE DONNÉES
// var name = " ";
// console.log(typeof name);
// var age = 260;
// console.log(typeof age);
// var tallness = 1.75;
// console.log(typeof tallness);
// var isPerson = false;
// console.log(typeof isPerson);
// var x = null;
// console.log(typeof x);
// var z;
// console.log(typeof z);

// ! OPÉRATEURS ARITHMÉTIQUES
// + , - , * , / , % , ++ , -- , **
// console.log(13 - 2);
// console.log("3" * 2);
// console.log(3 * "text");//NaN not a number
// console.log("10" / "2");
// console.log(typeof "3");
// console.log(10 % 3);
// console.log("3" ** "2"); //puissance
// console.log("5" + 2); //concaténation
// console.log(typeof (5 + ""));
// console.log(5 + "a");
// console.log(typeof ("" + 125));
// var y = 5;
// console.log(++y);
// console.log(y++);
// console.log(y);
// z = y++;
// console.log(z);
// console.log(y);
// t = ++y;
// console.log(t);

// ! OPÉRATEURS DE COMPARAISON
// var a = 25; //number
// var b = "25"; //string
// console.log(typeof a, typeof b);
// // if(condition){...}else{...}
// if (a === b) {
//   //égalité strict
//   console.log("Égal en valeur et type");
// } else if (a == b) {
//   //égalité de valeur
//   console.log("Égal seulement en valeur");
// } else {
//   console.log("Pas égal");
// }
// console.log(a === b);
//=================================================
// toDO:resume
// = affectation d'une vvaleur à une variable

// == comparer les valeur des variables

// === comparer valeurs et types variables

// / ! le contraire (opposite)

// /!= comparer l'inégalité des valeurs

// /!== compares the inequality based on value and type

//!TRUTHY & FALSY
// ======================================================
// Falsy: false, undefined, null, 0, "", NaN
// var t = "";
// console.log(Boolean(t));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean("re" * 3));
// console.log(Boolean(5 !== 5));

// if (null) {
//   //false
//   console.log("Truthy"); //condition vrai
// } else {
//   console.log("FALSY"); //condition fausse
// }
// if condition estimer la condition si vrai then
// si condition est fausse else
//!OPÉRATEURS LOGIQUES

// && → ET, || → OU, ! → NON
// console.log(null && "gdgdf"); //le premier est faux je l'affiche
// console.log("abc" && "rere"); //le premier est vrai j'affiche le deuxieme

// a  b     a && b //et logique &&
// 0  0       0
// 0  1       0
// 1  0       0
// 1  1       1

// a b     a || b //ou logique ||
// 0 0       0
// 0 1       1
// 1 0       1
// 1 1       1
// console.log("" || 7);
// console.log(true || 4);
// console.log(!false);

//!CONCATÉNATION DE CHAÎNES

// var nom2 = "Ahmed";
// var age2 = 18;
// console.log("je" + "\n" + " m'appelle " + nom2);
// console.log("je m'appelle sam"); //inverser les cotes entre "" ''
// console.log('je suis "sam"');

// // // es6
// console.log(`Je
//     m'appelle

//     ${nom2}
//     et
//     j'ai ${age2}
//     ans`);

// "" '' ``
// ` ` Alt GR +7
//!MÉTHODES DES CHAÎNES

// var s = "Hello World of JS";
// console.log(s.length);
// console.log(s[0]);

// console.log(s[s.length - 1]);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(2, 10));
// console.log(s.split(""));
// console.log(["H", "i"].join(""));

//! CONDITIONS ET BOUCLES

//--------------If else /Switch------------
// const x2 = 10;
// if (x2 == 10) {
//   console.log("x est égal à 10");
// } else {
//   if (x2 > 10) console.log("x > 10");
//   else console.log("x < 10");
// }

// var color = "bleue";
// switch (color) {
//   case "rouge":
//     console.log("La couleur est rouge");
//     break;
//   case "bleue":
//     console.log("La couleur est bleue");
//     break;
//   case "jaune":
//     console.log("La couleur est jaune");
//     break;
//   default:
//     console.log("Autre couleur");
// }

// // // traduction en if/else
// if (color === "rouge") console.log("rouge");
// else if (color === "bleue") console.log("bleue");
// else if (color === "jaune") console.log("jaune");
// else console.log("autre");

// ---------------- For Loop ----------------
// for (var i = 1; i <= 5; i++) console.log("For:", i);

// var tab = [1, "p", "bonjour", true];
// console.log(tab);

// for (var i = 0; i < tab.length; i++) {
//   //   console.log(i);
//   console.log(tab[i]);
// }

// for (var x of tab) console.log(x); //for of
// for (var i in tab) console.log(tab[i]); //for in

// ---------------- While & Do While ----------------
// var l = 50;
// while (l <= 12) {
//   //la condition
//   console.log("While:", l); //l'instruction
//   l++; //changement
// }
// var i = 0;
// do {
//   console.log(`Do While : ${i}`); //l'instruction
//   i++; //changement
// } while (i <= -1);

//!FONCTIONS
// function salutation(n) {
//   console.log("moi"); //procedure
//   return `Bonjour,
//   je m'appelle ${n}`;
// }
// // // console.log(salutation());
// console.log(salutation("Nessrine"));

// function soustraction(g, h) {
//   return g - h;
// }
// console.log(soustraction("10", "3tyt"));

// function addition(g, h) {
//   return g + h;
// }
// // // console.log(typeof 4);
// console.log(addition(4, "5"));
// console.log(typeof addition(4, "5"));

//! TABLEAUX
// const arr = [];
// console.log(arr);
// var numbers = [1, 2, 3, 4, 5];

// var fruits = ["pommes", "oranges", "poires", "raisins"];
// console.log(numbers);
// console.log(typeof numbers);
// console.log(numbers[1]);
// // // // // // Modifier un élément
// numbers[0] = "bonjour";
// console.log(numbers);

// // // Méthodes utiles
// var colors = ["noir", "blanc", "rouge", "bleu"];
// // console.log(colors);
// // colors = "abcde";
// // // console.log(colors);
// // colors.push("jaune"); //fin de tab
// // console.log(colors);
// // colors.unshift("violet"); //debut de tab
// // console.log(colors);
// // colors.pop(); //enleve le dernier
// // console.log(colors);
// // colors.shift(); //enleve le premier
// // console.log(colors);
// console.log(Array.isArray(colors));
// console.log(colors.indexOf("rouge"));

// //!Objets
// const person = {
//   name: "foulan",
//   age: 27,
//   adresse: {
//     city: "tunis",
//     codePostal: 2049,
//   },
//   color: [4, 1],
// };
// // console.log(person);
// console.log(person.adresse); //objet
// // // // // Modifier une propriété
// person.adresse.city = "Ariana";
// console.log(person);
// console.log(person.color[0]);
// // // // // Supprimer une propriété
// delete person.age;
// console.log(person);

// // // // // Ajouter une propriété
// person.email = "m@gmail.com";
// console.log(person);

// ************ /!\ Tableau d'objets
// const users = [
//   {
//     name: "personne",
//     age: 23,
//     email: "p1@gmail.com",
//   },
//   {
//     name: "personne 2",
//     age: 31,
//     email: "p2@gmail.com",
//   },
//   {
//     name: "personne 3",
//     age: 155,
//     email: "p3@gmail.com",
//   },
// ];

// console.log(users);
// console.table(users);

// // function add(a, b) {
// //   return a + b;
// // }

// // console.log(typeof (add))
// // console.log(add)
