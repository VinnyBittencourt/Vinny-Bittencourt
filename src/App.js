import logo from "./images/logo-small.png";
import bannerimg from "./images/projects-banner.png";

import "./App.css";

function App() {
    return (
        <div>
            <header>
                <div className="center">
                    <div className="nav__container">
                        <img src={logo} alt="Vinny B." className="logo-nav" />
                        <div className="navbar">
                            <a href="#aboutme">About me</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact me</a>
                        </div>
                    </div>
                    <div className="banner__container">
                        <div className="banner_left">
                            <h1>
                                I Build Captivating Web Experiences that Deliver{" "}
                            </h1>
                            <p className="subtitle_banner">
                                Web Developer/Designer & Your New Best Friend
                            </p>
                            <div className="flex-box">
                                <a href="#projects" className="btn-primary">
                                    My Projects
                                </a>
                                <a
                                    href="#contact"
                                    className="btn-secundary m-l-13"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                        <div className="banner_right">
                            <img src={bannerimg} alt="Projects" />
                        </div>
                    </div>
                </div>
            </header>
            <div className="decline-box"></div>
        </div>
    );
}

export default App;
