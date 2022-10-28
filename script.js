console.log(`-------1 uzduotis------`);
/**
 *
 * @param {*} a pirmas kintamasis
 * @param {*} b antras kintamasis
 *
 */
let daugyba = function (a, b) {
  console.log(a * b);
};

daugyba(5, 4);

console.log(`-------2 uzduotis-------`);

function pasisveikinimas(name) {
  console.log(`Labas ${name}`);
}

pasisveikinimas("vaidas");

console.log(`-------3 uzduotis-------`);

function textLenght(text) {
  console.log(text.length);
}

textLenght("vaidas");

console.log(`-------4 uzduotis-------`);

function initials(name, lastName) {
  console.log(
    name.slice(0, 1).toUpperCase() + " " + lastName.slice(0, 1).toUpperCase()
  );
}

initials("Vaidas", "Šipelis");

console.log(`-------5 uzduotis-------`);

let numberPlace = document.getElementById("numberPlace");

function number(number) {
  numberPlace.innerText = number;
}

number(10);

console.log(`-------6 uzduotis-------`);

function nextPresident(candidate1, candidate2, candidate3) {
  number = Math.round(Math.random() * 2);
  console.log(number);
  let president = "";
  if (number === 0) {
    president += candidate1;
  }
  if (number === 1) {
    president += candidate2;
  }
  if (number === 2) {
    president += candidate3;
  }
  console.log(president);
}

nextPresident("Grybauskaite", "Nauseda", "Paksas");

console.log(`------7 uzduotis--------`);

function randomNumbers() {
  let theNumber = "";

  for (i = 0; i < 3; i++) {
    rndNum = Math.round(Math.random() * (5 - 0) + 0);
    if (i === 2) {
      theNumber += rndNum;
    } else {
      theNumber += rndNum + ", ";
    }
  }
  console.log(theNumber);
}

randomNumbers(3, 0, 5);

console.log(`--------8 uzduotis-------`);

function twoRandomNum(min, max) {
  rndNum = Math.round(Math.random() * (max - min) + min);
  return rndNum;
}

console.log(twoRandomNum(2, 10000));

console.log(`---------9 uzduotis-------`);

let sequence = document.getElementById("sequence");
function addSequence() {
  for (let i = 10; i >= 0; i--) {
    sequence.innerHTML += `<p>${i}</p>`;
  }
}

addSequence();

console.log(`--------Vidutiniai------`);
console.log(`--------Vidutiniai------`);
console.log(`--------Vidutiniai------`);
console.log(`--------1 uzduotis------`);

function pakeltiLaipsniu(number, n) {
  answer = 1;
  for (let i = 1; i <= n; i++) {
    answer = answer * number;
  }
  return answer;
}
console.log(pakeltiLaipsniu(2, 8));

console.log(`--------2 uzduotis------`);
/**
 *
 * @param {*} number numeris kuri norima pakelti laipsniu
 * @param {*} pow laipsnis kuriuo norima pakelti numeri
 * @param {*} id HTML elemento id kuriame norima matyti rezultata
 */
function printToHTML(number, pow, id) {
  let HTMLelementas = document.getElementById(id);
  HTMLelementas.innerText = number ** pow;
}

printToHTML(5, 3, "dauginimas");

console.log(`--------Sunkesni------`);
console.log(`--------Sunkesni------`);
console.log(`--------Sunkesni------`);
console.log(`--------1 uzduotis------`);

function addToH1(text) {
  let h1s = document.getElementsByTagName("h1");

  for (let i = 0; i < h1s.length; i++) {
    h1s[i].innerText = text;
  }
}
addToH1("labas");

console.log(`--------2 uzduotis------`);

function addToWantedH(text, headerNum) {
  number = headerNum;
  let header = document.createElement(`h${number}`);
  header.innerText = text;

  document.body.appendChild(header);
}

addToWantedH("laxxxxs", 1);
addToWantedH("oho", 2);
addToWantedH("oho", 2);

console.log(`--------3 uzduotis------`);

function addAllNumbers() {
  let string = "";
  var characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    string += characters.charAt(Math.round(Math.random() * characters.length));
  }
  console.log(string);
  let withoutText = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/(\d+)/)) {
      withoutText += string[i];
    }
  }
  let h1 = document.getElementsByTagName("h1");

  for (let i = 0; i < h1.length; i++) {
    h1[i].innerText = withoutText;
  }
}
addAllNumbers();

console.log(`-------4 uzduotis-------`);

function something() {
  let masyvas1 = [];
  for (let i = 0; i < 100; i++) {
    masyvas1[i] = Math.round(Math.random() * (77 - 33) + 33);
  }
  masyvas1.sort((a, b) => a - b);
  masyvas1.sort((a, b) => isKiekSveikuDalinas(a) - isKiekSveikuDalinas(b));
  console.log(masyvas1);
}

something();

console.log(`-------5 uzduotis-------`);

function isKiekSveikuDalinas(number) {
  counter = 0;
  for (let i = 2; i < number - 1; i++) {
    if (number % i === 0) {
      counter++;
    }
  }
  return counter;
}

console.log(isKiekSveikuDalinas(50));

console.log(`-------5B uzduotis-------`);

function something2() {
  let masyvas2 = [];
  let masyvas3 = [];
  for (let i = 0; i < 100; i++) {
    masyvas2[i] = Math.round(Math.random() * (777 - 333) + 333);
    if (isKiekSveikuDalinas(masyvas2[i]) === 0) {
      masyvas3.push(masyvas2[i]);
    }
  }
  return masyvas3;
}

console.log(something2());

console.log(`-------6 uzduotis-------`);

function funkcija6() {
  masyvas = [];
  rndNum = Math.round(Math.random() * (20 - 10) + 10);
  console.log(rndNum);
  for (let i = 0; i < rndNum; i++) {
    if (i + 1 === rndNum) {
      masyvas[i] = [];
    } else {
      masyvas[i] = Math.round(Math.random() * 10);
    }
  }
  console.log(masyvas);
}

funkcija6();