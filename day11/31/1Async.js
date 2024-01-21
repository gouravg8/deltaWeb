// let evi = async () => {
//   throw "faltu ka error";
//   return "hii bro, it is resolved";
// };

// evi()
//   .then((res) => console.log("res is: ", res))
//   .catch((err) => console.error("error is: ", err));

// function getnum() {
//   let rand = Math.floor(Math.random() * 10 + 1);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (rand > 5) reject("promise rejected > 5");
//       else resolve("resolve kar diya");
//       console.log(rand);
//     }, 1000);
//   });
// }

// async function demo() {
//   try {
//     await getnum();
//     await getnum();
//     await getnum();
//     await getnum();
//   } catch (err) {
//     console.error("error hai biro: ", err);
//   }

//   console.log("main to execute hounga, even after the rejection");
// }
// demo();

let pData = document.querySelector("#data");
let btnFetch = document.querySelector("#fetch");

async function fetchTheData() {
  try {
    let result = await fetch("https://catfact.ninja/fact");
    // let result = await fetch('https://www.boredapi.com/api/activity')
    // let result = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await result.json();
    pData.textContent = data.fact;
  } catch (err) {
    console.error("birro err: ", err);
  }
  // console.log(data);
}

btnFetch.addEventListener("click", fetchTheData);

let dogBtn = document.querySelector("#dogBtn");
let dogImg = document.querySelector("#dogImg");
async function getDogImage() {
  try {
    let result = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await result.json();
    dogImg.src = data.message;
  } catch (err) {
    console.error("biro err: ", err);
  }
  // console.log(data);
}
dogBtn.onclick = getDogImage;
