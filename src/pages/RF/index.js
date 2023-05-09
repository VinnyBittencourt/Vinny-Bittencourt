import React from "react";
import { Link } from "react-router-dom";
import { FiAlertCircle, FiX, FiArrowLeft } from "react-icons/fi";

import "./style.css";

export default function hoje() {
  return (
    <>
      <div className="mobile">
        <div className="header">
          <FiArrowLeft size={20}></FiArrowLeft>
          <h2>Informar Lacre</h2>
        </div>
        <div className="body">

          <div className="body_group">
            <div className="disclaimer">
              <FiAlertCircle size={16}></FiAlertCircle>
              <p>Lacre o baú antes de informar o código do lacre</p>
            </div>

            <div className="info">
              <h6>Informações do veículo:</h6>
              <div className="group_info">
                <div className="info__line">
                  <p>Modelo:</p>
                  <p className="bold">Toco 16</p>
                </div>
                <div className="info__line">
                  <p>Placa:</p>
                  <p className="bold">ABC12D3</p>
                </div>
              </div>
            </div>

            <div className="positions">
              <h6>Posições:</h6>
              <div className="group_card">
                <div className="card">
                  <p>Traseira</p>
                  <Link to="#">Informar</Link>
                </div>
                <div className="card">
                  <p>Lateral 1</p>
                  <Link to="#">Informar</Link>
                </div>
                <div className="card">
                  <p>Lateral 2</p>
                  <Link to="#">Informar</Link>
                </div>
              </div>
            </div>
          </div>

          <Link to="#" className="btn">Finalizar</Link>
        </div>
      </div>
    </>
  );
}
