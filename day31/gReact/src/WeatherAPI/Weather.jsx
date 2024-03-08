import { useState } from "react";
import Result from "./Result";
import Search from "./Search";

function Weather() {
  const [info, setInfo] = useState({});

  function updateInfo(newInfo) {
    setInfo(newInfo);
  }

  console.log("from out", info);
  return (
    <>
      <Search updateInfo={updateInfo} />
      {Object.keys(info).length !== 0 && <Result info={info} />}
    </>
  );
}

export default Weather;
