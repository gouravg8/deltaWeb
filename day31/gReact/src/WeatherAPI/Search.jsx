import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PropTypes from "prop-types";

function Search({ updateInfo }) {
  const [city, setCity] = useState("");

  async function handleSubmit() {
    let URL = "http://api.weatherapi.com/v1/current.json";
    let API_KEY = "cc804fc0e1e14c44aec145450240803";

    let response = await fetch(`${URL}?key=${API_KEY}&q=${city}&aqi=no`);
    let result = await response.json();
    console.log(result);

    let newInfo = {
      icon: result.current.condition["icon"],
      name: result.location["name"],
      country: result.location["country"],
      feelslike: result.current.feelslike_c,
      temp: result.current.temp_c,
      condition: result.current.condition.text,
    };

    updateInfo(newInfo);
    console.log(result);
    return result;
  }

  return (
    <>
      <div className="search">
        <Input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={"Enter city or country name"}
        />
        <Button variant="outline" className="my-4" onClick={handleSubmit}>
          Get Weather
        </Button>
      </div>
    </>
  );
}

export default Search;
Search.propTypes = {
  updateInfo: PropTypes.func,
};
