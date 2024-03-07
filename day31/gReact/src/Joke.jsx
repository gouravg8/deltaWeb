import { useEffect, useState } from "react";

function Joke() {
  //   const URL = "https://api.chucknorris.io/jokes/random";
  const URL = "https://v2.jokeapi.dev/joke/Dark?type=twopart";
  const [setup, setSetup] = useState("");
  const [delivery, setDelivery] = useState("");
  let getJoke = async () => {
    let response = await fetch(URL);
    let result = await response.json();
    setSetup(result.setup);
    setDelivery(result.delivery);
    return result;
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <h3 className="text-center text-2xl py-5 font-semibold">Dark Jokes</h3>
      <p>👽👽: {setup}</p>
      <p>🤠: {delivery}</p>
      <button
        className="bg-white text-black px-4 py-1 my-4 w-fit mx-auto"
        type="submit"
        onClick={getJoke}
      >
        Get
      </button>
    </>
  );
}

export default Joke;
