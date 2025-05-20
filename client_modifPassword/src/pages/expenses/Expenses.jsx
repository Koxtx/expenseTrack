import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function Expenses() {
  return (
    <div>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
}
