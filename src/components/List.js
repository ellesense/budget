import React from "react";
import Item from "./Item";

const List = ({ expensesList, handleDelete, handleEdit, handleClear }) => {
  const descendingExpensesList = [...expensesList].sort((a, b) =>
    parseInt(a.amount) > parseInt(b.amount) ? -1 : 1
  );

  return (
    <div>
      <div style={{ marginTop: "44px" }}>
        <h4 className="header">LIST OF PLANNED EXPENSES</h4>
      </div>

      <div style={{ margin: "13px 0" }}>
        {descendingExpensesList.length > 0 && (
          <button
            className="ui red mini basic button right "
            aria-label="clear the list button"
            onClick={handleClear}
          >
            <i className="redo icon"></i>
            CLEAR THE LIST
          </button>
        )}
      </div>

      <div className="ui relaxed divided list">
        {descendingExpensesList.map(expense => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
