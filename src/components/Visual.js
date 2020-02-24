import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";

const Visual = ({ items }) => {
  const rgbArray = [];
  // useEffect(() => {
  //   items.forEach(item => {
  //     let r = Math.floor(Math.random() * 255);
  //     let g = Math.floor(Math.random() * 255);
  //     let b = Math.floor(Math.random() * 255);
  //     let rgb = "rgb(" + r + "," + g + "," + b + ")";
  //     rgbArray.push(rgb);
  //   });
  // }, [items, rgbArray]);
  // console.log(rgbArray);

  items.forEach(item => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = "rgb(" + r + "," + g + "," + b + ")";
    rgbArray.push(rgb);
  });

  const chart = {
    datasets: [
      {
        data: items.map(item => {
          return item.amount;
        }),
        label: "Expenses",
        // auto-generate RGBA based on number of items
        backgroundColor: rgbArray
      }
    ],
    labels: items.map(item => {
      return item.type;
    })
  };

  return (
    <div>
      <Pie data={chart} height={400} options={{ maintainAspectRatio: false }} />
    </div>
  );
};

export default Visual;
