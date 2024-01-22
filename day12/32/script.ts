let inpQuery = document.querySelector("#inpQuery") as HTMLInputElement;
let btnSubmit = document.querySelector("#btnSubmit");
let olOutput = document.querySelector("#olOutput") as HTMLOListElement;

btnSubmit?.addEventListener("click", handleSearching);
// document?.addEventListener("keyup", function (e) {
//   if (e.key == "Enter") handleSearching();
// });

async function handleSearching(e) {
  e.preventDefault();
  let URL = "http://universities.hipolabs.com/search?country=india";
  let state = inpQuery.value.toLowerCase();
  //   state = state.replaceAll(" ", "+");
  //   let stateUrl = URL;
  let req = await fetch(URL);
  let data = await req.json();
  //   console.log(URL);
  //   console.log(data[0]["state-province"]);

  olOutput.innerHTML = "";
  for (const collegeName of data) {
    if (collegeName["state-province"] == null) {
      //   console.log("null tha");
      continue;
    } else if (collegeName["state-province"].toLowerCase() == state) {
      let li = document.createElement("li");
      li.textContent = collegeName.name;
      //   console.error(collegeName["state-province"], collegeName.name);
      olOutput.appendChild(li);
    } else {
      //   console.log("wrong state");
      //   console.log(collegeName["state-province"]);
    }
  }
}
