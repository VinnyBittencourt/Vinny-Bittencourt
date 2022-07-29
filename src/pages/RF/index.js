import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiX } from "react-icons/fi";

import "./style.css";

export default function hoje() {
  return (
    <>
    
      <div className="rf">
        <h1>Login</h1>
        <h5>Login</h5>
        <p>Aperte Enter</p>

        <div className="box-inp">
          <input type="text" placeholder="Nome" className="inputzera" />
          <input type="password" placeholder="Senha" className="inputzera" />
        </div>

        <a href="#" className="btn-rf">Concluir</a>
        <div className="caixa01"></div>
      </div>
    </>
  );
}
