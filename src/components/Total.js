import React from "react";

const Total = ({ amount, header }) => {
  return (
    <div style={{ marginTop: "11px" }}>
      <h5>
        {header}: ${" "}
        {amount.reduce((accumulator, current) => {
          return (accumulator += parseInt(current.amount));
        }, 0)}
      </h5>
    </div>
  );
};

export default Total;
