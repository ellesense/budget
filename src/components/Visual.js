import React from "react";
import { Pie } from "react-chartjs-2";

const initState = {
  datasets: [
    {
      data: [10, 20, 30, 23, 50, 5, 23],
      label: "Expenses",
      // auto-generate RGBA based on number of expenses
      backgroundColor: ["#C48C9F", "#3C2656", "#FC9E5F"]
    }
  ],
  labels: ["Gas", "Rent", "Lunch"],
  options: { pieceLabel: { render: "value" } }
};

const Visual = () => {
  return (
    <div className="ui container">
      <h3>Total Expense: $9999</h3>
      <Pie data={initState} />
    </div>
  );
};

export default Visual;
