import React from "react";

const ExpenseForm = ({
  handleAmount,
  handleExpenseType,
  handleSubmit,
  amount,
  expenseType,
  editing
}) => {
  return (
    <div>
      <h4>PLANNED EXPENSE</h4>

      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Expense Type</label>
          <input
            type="text"
            name="expenseType"
            value={expenseType}
            onChange={handleExpenseType}
            placeholder="Rent"
            autoFocus
          />
        </div>
        <div className="field">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={handleAmount}
            placeholder="9999999"
          />
        </div>
        <button
          className="ui secondary button"
          type="submit"
          aria-label="add an expense button"
        >
          {editing ? "EDIT" : "ADD"}
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
