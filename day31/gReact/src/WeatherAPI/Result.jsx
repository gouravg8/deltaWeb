import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PropTypes from "prop-types";
function Result({ info }) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle
            className={
              "flex text-center justify-center align-middle items-center h-1/2"
            }
          >
            {info.name},{info.country}
            <img className="rounded size-12" src={info.icon} alt="" srcSet="" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Temp: <b>{info.temp}&deg;C</b>
          </p>
          <p>
            It feels like: <b>{info.feelslike}&deg;C</b> and the weather is{" "}
            <b>{info.condition}</b>
          </p>
        </CardContent>
      </Card>
    </>
  );
}

export default Result;
Result.propTypes = {
  info: PropTypes.object,
};
