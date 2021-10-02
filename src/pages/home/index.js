import React from "react";
import { FiFileText } from "react-icons/fi";

import "./style.css";

export default function hoje() {
    return (
        <>
            <header>
                <img className="logo" src="" alt="Vinny Bittencourt" />
                <div className="navbar">
                    <a href="#">Home</a>
                    <a href="#">Casos de Estudo</a>
                    <a href="#">Sobre mim</a>
                    <a href="#">Contato</a>
                    <a href="#" className="outline-btn">
                        Curriculo <FiFileText size={16}></FiFileText>
                    </a>
                </div>
            </header>
        </>
    );
}
