import React from "react";

const IncomeForm = () => {
  return (
    <div>
      <h4>INCOME</h4>

      <form className="ui form">
        <div className="field">
          <label>Hourly</label>
          <input
            type="number"
            // name="expenseType"
            // value={expenseType}
            // onChange={handleExpenseType}
            placeholder="9999999"
          />
        </div>
        <div className="field">
          <label>Yearly</label>
          <input
            type="number"
            // name="amount"
            // value={amount}
            // onChange={handleAmount}
            placeholder="9999999"
          />
        </div>
        <button
          className="ui secondary button"
          type="submit"
          aria-label="save income button"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default IncomeForm;
