import "./App.css";

function Title() {
  return <h1>This is title</h1>;
}

const Description = () => {
  return (
    <>
      <p>This is decription {2 + 5}</p>
    </>
  );
};

function App() {
  return (
    <>
      <Title />
      <Description />
    </>
  );
}

export default App;
