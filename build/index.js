let menu = document.getElementById("navMobile");
let btnMenu = document.getElementById("btnMenu");

function menuDisplay() {
  menu.classList.toggle("hidden");
  btnMenu.classList.toggle("fa-bounce");
  btnMenu.classList.toggle("fa-times");
}

const Doctors = [
  "John Doe",
  "Jane Joy",
  "Steve Appiah",
  "Mary Sam",
  "Josephine Mensah",
  "Frank Francis",
  "Alex Albert",
  "Kwame Kyei",
  "Kwesi Arthur",
  "Kwadwo Asamoah",
  "Kwabena Agyapong",
];

function randomDoc() {
  const selectDoc = Math.floor(Math.random() * Doctors.length);
  return Doctors[selectDoc];
}

function displayDoc() {
  alert(`The drug was made by doctor ${randomDoc()}`);
}

function calTotal() {
  const medi1 = document.getElementById("medi1");
  const medi2 = document.getElementById("medi2");
  const medi3 = document.getElementById("medi3");
  const medi4 = document.getElementById("medi4");
  const medi5 = document.getElementById("medi5");
  const medi6 = document.getElementById("medi6");
  const medi7 = document.getElementById("medi7");
  const medi8 = document.getElementById("medi8");
  const medi9 = document.getElementById("medi9");
  const medi10 = document.getElementById("medi10");
  const medi11 = document.getElementById("medi11");
  const medi12 = document.getElementById("medi12");
  const medi13 = document.getElementById("medi13");
  const medi14 = document.getElementById("medi14");

  // const total = document.getElementById("total");
  let priceOfDrug = 0;

  if (medi1.checked) {
    priceOfDrug += 250;
  }
  if (medi2.checked) {
    priceOfDrug += 400;
  }
  if (medi3.checked) {
    priceOfDrug += 380;
  }
  if (medi4.checked) {
    priceOfDrug += 400;
  }
  if (medi5.checked) {
    priceOfDrug += 400;
  }
  if (medi6.checked) {
    priceOfDrug += 400;
  }
  if (medi7.checked) {
    priceOfDrug += 400;
  }
  if (medi8.checked) {
    priceOfDrug += 400;
  }
  if (medi9.checked) {
    priceOfDrug += 400;
  }
  if (medi10.checked) {
    priceOfDrug += 400;
  }
  if (medi11.checked) {
    priceOfDrug += 400;
  }
  if (medi12.checked) {
    priceOfDrug += 400;
  }
  if (medi13.checked) {
    priceOfDrug += 400;
  }
  if (medi14.checked) {
    priceOfDrug += 400;
  }

  alert(`Total cost of drugs is ${priceOfDrug}`);
}
