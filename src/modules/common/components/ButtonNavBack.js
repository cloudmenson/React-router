import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNavBack() {
  const navigate = useNavigate();
  return (
    <div className="App__common--return-btn">
      <button
        onClick={() => navigate(-1)}
        type="submit"
        name="action"
        className="btn waves-effect waves-light red lighten-1"
      >
        <i className="material-icons">arrow_back</i>
      </button>
    </div>
  );
}
