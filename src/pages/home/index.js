import React from "react";
import { Link } from "react-router-dom";
import { FiFileText, FiChevronsRight } from "react-icons/fi";

import "./style.css";

export default function hoje() {
    return (
        <>
            <header>
                <img className="logo" src="" alt="Vinny Bittencourt" />
                <div className="navbar">
                    <Link to="#">Home</Link>
                    <Link to="#">Casos de Estudo</Link>
                    <Link to="#">Sobre mim</Link>
                    <Link to="#">Contato</Link>
                    <Link to="#" className="outline-btn">
                        Curriculo <FiFileText size={16}></FiFileText>
                    </Link>
                </div>
            </header>
            <div>
            <Link to="/tablet" className="btn-primary">
                        TABLET <FiChevronsRight size={32} />
                    </Link>
            </div>
            <section className="meio">
                <div className="box-esquerda">
                    <p className="uppertext">Olá, eu sou Vinny Bittencourt</p>
                    <h1>Eu Construo Experiências Cativantes Na Web</h1>
                    <p className="subtext">
                        UX/UI Designer e Front-end Developer.
                    </p>
                    <Link to="#" className="btn-primary">
                        Vamos nos conhecer <FiChevronsRight size={16} />
                    </Link>
                </div>
                <div className="box-direita">
                    {/* <div className="case">
                        <img src="" alt="Case" />
                        <div className="textos">
                            <h6>
                                Conectando profissionais autônomos a potenciais
                                clientes
                            </h6>
                            <p>
                                Como utilizamos UX Design para facilitar a
                                contratação de serviços gerais unindo qualidade
                                e segurança aos usuários
                            </p>
                            <Link to="#">
                                <FiChevronsRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="case">
                        <img src="" alt="Case" />
                        <div className="textos">
                            <h6>
                                Conectando profissionais autônomos a potenciais
                                clientes
                            </h6>
                            <p>
                                Como utilizamos UX Design para facilitar a
                                contratação de serviços gerais unindo qualidade
                                e segurança aos usuários
                            </p>
                            <Link to="#">
                                <FiChevronsRight size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="case">
                        <img src="" alt="Case" />
                        <div className="textos">
                            <h6>
                                Conectando profissionais autônomos a potenciais
                                clientes
                            </h6>
                            <p>
                                Como utilizamos UX Design para facilitar a
                                contratação de serviços gerais unindo qualidade
                                e segurança aos usuários
                            </p>
                            <Link to="#">
                                <FiChevronsRight size={16} />
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
            <footer className="socialmedia">
                <Link to="#">
                    <img src="#" alt="email" />
                </Link>
                <Link to="#">
                    <img src="#" alt="behance" />
                </Link>
                <Link to="#">
                    <img src="#" alt="linkedin" />
                </Link>
                <Link to="#">
                    <img src="#" alt="dribbble" />
                </Link>
            </footer>
        </>
    );
}