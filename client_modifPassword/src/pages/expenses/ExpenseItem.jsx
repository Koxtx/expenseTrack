import React, { useContext } from "react";
import { ExpanseContext } from "../../context/ExpanseContext";
import { NavLink } from "react-router-dom";

function ExpenseItem({ expence }) {
  const { deleteExpense } = useContext(ExpanseContext);

  const dateObj = new Date(expence.date);

  const dateFR = dateObj.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <NavLink to={`/details/${expence.id}`}>
      <div className="flex flex-col md:flex-row justify-between items-center p-4 border border-gray-200 rounded bg-gray-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full">
          <div className="mb-3 md:mb-0">
            <h3 className="text-xl font-bold text-blue-600">
              {expence.description}
            </h3>
            <p className="text-gray-600">Montant: {expence.amount} €</p>
            <p className="text-gray-600">Date: {dateFR}</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">
              Modifier
            </button>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
              onClick={() => deleteExpense(expence.description)}
            >
              Supprimer
            </button>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ExpenseItem;
