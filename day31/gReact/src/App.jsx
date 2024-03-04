import "./App.css";
import Lottery from "./Lottery/Lottery";
import { sum } from "./Lottery/LotteryHelper";
// import Count from "./Count";
// import Todo from "./Todo";
// import Card from "./Card";

function App() {
  let winCondition = (arr) => sum(arr) === 24;
  return (
    <>
      {/* <h2 style={{ textAlign: "center" }}>
        Grab the latest deal in electronics
      </h2> */}
      <div
        style={{ height: "100vh" }}
        className="flex align-middle justify-center my-24 w-full"
      >
        {/* <Count /> */}

        {/* <Todo /> */}

        <div>
          <Lottery n={4} winCondition={winCondition} />
        </div>

        {/* <Card
          title={"Mx master"}
          description={["800 dpi", "5 buttons"]}
          src={
            "https://imgs.search.brave.com/iXALEPY60fGKC5YTGtLOQPCUEnxWMQV8LmyXVlpdlsE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNi8w/NC9QQy1Nb3VzZS5w/bmc"
          }
          oldPrice={12000}
          newPrice={9999}
        />
        <Card
          title={"Dell ipx54"}
          description={["24in Display", "8 hour long battary"]}
          src={
            "https://imgs.search.brave.com/QhBRzUSnrKN9DYEnHNDJuoPG35UdPQxDJg32GvwLKIQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9sYXB0b3AtcG5n/LWZyb20tcG5nZnJl/LTUucG5n"
          }
          oldPrice={54000}
          newPrice={49000}
        />
        <Card
          title={"HTC 300"}
          description={["5in Display", "5600 mAh battary"]}
          src={
            "https://imgs.search.brave.com/LhFMJhCNeqxZZjD8bt1cer385TvnXCh3w4xoqJYO7ek/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMS9Nb2Jp/bGUucG5n"
          }
          oldPrice={19000}
          newPrice={1200}
        /> */}
      </div>
    </>
  );
}

export default App;
