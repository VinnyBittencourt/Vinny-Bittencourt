import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiX } from "react-icons/fi";

import "./style.css";

export default function hoje() {
  return (
    <>
      <div className="container">
        <div className="modal">
            <div className="modal-header">
            <h6><FiAlertCircle size={24} className="alertIcon"></FiAlertCircle>Título da mensagem</h6>
            <FiX size={24} className="exit"></FiX>
            </div>
            <p>Descrição da ação que o usuário está tomando.</p>
            <div className="btns">
                <Link to="#" className="outline btn-cancel">Cancelar</Link>
                <Link to="#" className="btnfull btn-delete">Sim, excluir</Link>
            </div>
        </div>
      </div>
    </>
  );
}
