import React, { useState, useEffect } from "react";
import uuid from "uuid/v4";
import Alert from "./Alert";
import ExpenseForm from "./Forms/ExpenseForm";
import Visual from "./Visual";
import List from "./List";
import Total from "./Total";

const initExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];

function Main() {
  const [expenses, setExpensesList] = useState(initExpenses);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({
    visibility: "hidden",
    // placeholder msg is required for the html element to take up the
    // same space height
    msg: "placeholder msg"
  });
  const [editing, setEditing] = useState(false);
  const [id, setId] = useState(null);

  const handleAmount = e => {
    setAmount(e.target.value);
  };

  const handleExpenseType = e => {
    setExpenseType(e.target.value);
  };

  const handleEdit = targetId => {
    const editExpense = expenses.find(expense => {
      return expense.id === targetId;
    });

    const { type, amount } = editExpense;
    setExpenseType(type);
    setAmount(amount);
    setEditing(true);
    setId(targetId);
  };

  const handleDelete = id => {
    const newExpensesList = expenses.filter(expense => {
      return expense.id !== id;
    });

    setExpensesList(newExpensesList);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (expenseType !== "" && amount > 0) {
      if (editing) {
        const editedExpensesList = expenses.map(expense => {
          return expense.id === id
            ? { ...expense, type: expenseType, amount: amount }
            : expense;
        });

        setExpensesList(editedExpensesList);
        setEditing(false);
        setId(null);
      } else {
        setExpensesList([
          { id: uuid(), type: expenseType, amount: amount },
          ...expenses
        ]);
      }

      setExpenseType("");
      setAmount("");
    } else {
      handleAlert();
    }
  };

  const handleClear = () => {
    // add a alert prompt to confirm clearing action
    setExpensesList([]);
  };

  const handleAlert = () => {
    setAlert({
      visibility: "",
      msg: "Expense type and/or amount cannot be blank."
    });
    setTimeout(() => {
      setAlert({
        visibility: "hidden",
        msg: "placeholder msg"
      });
    }, 5000);
  };

  return (
    <div className="ui container">
      <Alert visibility={alert.visibility} msg={alert.msg} />
      <div className="ui segment">
        <div className="ui two column very relaxed grid">
          <div className="column">
            <div className="ui basic segment">
              <div>
                <div className="column">
                  <ExpenseForm
                    handleAmount={handleAmount}
                    handleExpenseType={handleExpenseType}
                    handleSubmit={handleSubmit}
                    amount={amount}
                    expenseType={expenseType}
                    editing={editing}
                  />
                </div>
              </div>

              <div className="ui horizontal divider">...</div>

              <Total
                header={"TOTAL PLANNED MONTHLY EXPENSES"}
                amount={expenses}
              />

              <Visual items={expenses} />
            </div>
          </div>
          <div className="column">
            <List
              expensesList={expenses}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleClear={handleClear}
            />
          </div>
        </div>
        <div className="ui vertical divider">&</div>
      </div>
    </div>
  );
}

export default Main;
