import logo from "./images/logo-small.png";
import bannerimg from "./images/projects-banner.png";
import aboutmeimg from "./images/profilepicture.png";

import "./App.css";

function App() {
    return (
        <>
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

            {/* About Me */}
            <section className="about center">
                <div className="about_left">
                    <h2>About Me</h2>
                    <p className="about-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                <div className="about-right">
                    <img src={aboutmeimg} alt="Me" className="ar-img" />
                </div>
            </section>
            <div className="decline-box-2"></div>

            {/* Projects */}
            <section className="projects">
                <div className="proj center">
                    <h2>My Projects</h2>
                    <p className="projects-text">
                        Take a look at some of my projects done with great care
                        and dedication to the smallest details.
                    </p>
                    {/* <div className="projects__container">
                        <div className="pj p01"></div>
                        <div className="pj p02"></div>
                        <div className="pj p03"></div>
                        <div className="pj p04"></div>
                        <div className="pj p05"></div>
                        <div className="pj p06"></div>
                        <div className="pj p07"></div>
                        <div className="pj p08"></div>
                    </div> */}

                    <div className="projs__container">
                        <div className="proj__midbox mid01">
                            <a
                                href="#"
                                target="_blank"
                                className="projs p01"
                            ></a>
                            <a
                                href="#"
                                target="_blank"
                                className="projs p02"
                            ></a>
                        </div>
                        <div className="proj__midbox mid02">
                            <a
                                href="#"
                                target="_blank"
                                className="projs p03"
                            ></a>
                            <a
                                href="#"
                                target="_blank"
                                className="projs p04"
                            ></a>
                        </div>
                        <div className="proj__midbox mid03">
                            <a
                                href="#"
                                target="_blank"
                                className="projs p05"
                            ></a>
                            <a
                                href="#"
                                target="_blank"
                                className="projs p06"
                            ></a>
                        </div>
                        <div className="proj__midbox mid04">
                            <a
                                href="#"
                                target="_blank"
                                className="projs p07"
                            ></a>
                            <a
                                href="#"
                                target="_blank"
                                className="projs p08"
                            ></a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
