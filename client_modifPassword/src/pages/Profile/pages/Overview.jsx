import React from "react";
import { NavLink } from "react-router-dom";

export default function Overview() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <NavLink to="/change">
        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 cursor-pointer">
          Modification du mot de passe
        </button>
      </NavLink>
    </div>
  );
}
