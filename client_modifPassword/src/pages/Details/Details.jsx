import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ExpanseContext } from "../../context/ExpanseContext";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expenses } = useContext(ExpanseContext);
  const [expenseDetail, setExpenseDetail] = useState({});
  const [message, setMessage] = useState("");
  console.log(id);

  useEffect(() => {
    const detail = expenses.find((uneDepense) => uneDepense.id === Number(id));
    if (detail) {
      setExpenseDetail(detail);
    } else {
      navigate("/");
      setMessage("Oops cette donnée n'existe pas");
    }
  }, [id]);

  return (
    <div>
      {!message ? (
        <>
          <h2>Dépense : {expenseDetail.description}</h2>
          <p>Avis : {expenseDetail.avis}</p>
        </>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
}
