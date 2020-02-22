import React, { createContext, useReducer } from "react";

const initState = {
  expenses: [{ id: 1, type: "rent", amount: 999 }]
};

export const BudgetContext = createContext(initState);

export const BudgetContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer();
};
