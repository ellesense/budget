import React from "react";

const Total = ({ amount, header }) => {
  return (
    <div style={{ marginTop: "33px" }}>
      <h3>{header}</h3>

      <h1>
        ${" "}
        {amount.reduce((accumulator, current) => {
          return (accumulator += parseInt(current.amount));
        }, 0)}
      </h1>
    </div>
  );
};

export default Total;
