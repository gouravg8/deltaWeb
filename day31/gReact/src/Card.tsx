import React from "react";

function Title({ title }) {
  return <h3>{title}</h3>;
}
function Photo({ src }) {
  return (
    <img
      style={{ width: "10rem", height: "8rem" }}
      src={src}
      alt=""
      srcSet=""
    />
  );
}
function Description({ description }) {
  return (
    <ul style={{ textAlign: "left" }}>
      {description.map((des: String, index: React.Key | null | undefined) => (
        <li key={index}>{des}</li>
      ))}
    </ul>
  );
}
function Price({ oldPrice, newPrice }) {
  return (
    <div
      style={{
        width: "auto",
        backgroundColor: "yellow",
        color: "black",
        padding: "1rem 2rem",
        borderRadius: "5px",
      }}
    >
      Rs:
      <span style={{ textDecorationLine: "line-through", margin: "0 5px" }}>
        {oldPrice}
      </span>
      <span style={{ fontWeight: "bold" }}>{newPrice}</span>
    </div>
  );
}

function Card({ title, src, description, oldPrice, newPrice }) {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "20px",
        width: "auto",
        overflow: "hidden",
      }}
    >
      <div style={{ display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center',padding: "1rem 4rem" }}>
        <Title title={title} />
        <Photo src={src} />
        <Description description={description} />
      </div>
      <div>
        <Price oldPrice={oldPrice} newPrice={newPrice} />
      </div>
    </div>
  );
}

export default Card;
