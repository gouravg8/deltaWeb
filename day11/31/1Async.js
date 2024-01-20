// let evi = async () => {
//   throw "faltu ka error";
//   return "hii bro, it is resolved";
// };

// evi()
//   .then((res) => console.log("res is: ", res))
//   .catch((err) => console.error("error is: ", err));

function getnum() {
  let rand = Math.floor(Math.random() * 10 + 1);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 5) reject("promise rejected > 5");
      else resolve("resolve kar diya");
      console.log(rand);
    }, 1000);
  });
}

async function demo() {
  try {
    await getnum();
  await getnum();
  await getnum();
  await getnum();
  } catch (err) {
    console.error('error hai biro: ', err);
  }

  console.log('main to execute hounga, even after the rejection');

}
demo()