import React from "react";

const Item = ({ expense, handleDelete, handleEdit }) => {
  return (
    <div className="item" style={{ margin: "3px 0" }}>
      {/* <button
        className="ui icon grey button"
        aria-label="edit button"
        onClick={() => handleEdit(expense.id)}
      >
        <i className="edit outline icon"></i>
      </button> */}
      {/* <button
        className="ui icon red button"
        aria-label="delete button"
        onClick={() => handleDelete(expense.id)}
      >
        <i className="eraser icon"></i>
      </button> */}
      <i
        className="edit outline large grey icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleEdit(expense.id)}
      ></i>
      <i
        className="eraser large red icon"
        style={{ cursor: "pointer" }}
        onClick={() => handleDelete(expense.id)}
      ></i>

      <div className="content">
        <h4 className="header">{expense.type.toUpperCase()}</h4>
        <div className="description">${expense.amount}</div>
      </div>
    </div>
  );
};

export default Item;
