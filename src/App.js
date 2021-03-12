import logo from "./images/logo-small.png";
import bannerimg from "./images/projects-banner.png";
import aboutmeimg from "./images/profilepicture.png";
import js from "./images/JS.png";
import html from "./images/HTML.png";
import css from "./images/CSS.png";
import ui from "./images/UI.png";
import reactjsimg from "./images/REACT.png";
import github from "./images/github-sign.png";
import linkedin from "./images/027-linkedin.png";
import dribble from "./images/040-dribbble.png";
import behance from "./images/047-behance.png";
import logobg from "./images/logobg.png";

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

            {/* My Skills */}
            <section className="skills__container">
                <div className="center skills">
                    <h2>My Skills</h2>
                    <p className="subtitle-skills">
                        These are some of the skills and tools that I use in my
                        day to day to create websites that make dreams come
                        true.
                    </p>
                    <div className="box__skills">
                        <div className="skill">
                            <div className="upper-skill">
                                <img src={js} alt="Skill" />
                                <h3>JavaScript</h3>
                            </div>
                            <p className="skill-desc">
                                Tool to make applications more fluid and with
                                good interactions.
                            </p>
                        </div>
                        <div className="skill">
                            <div className="upper-skill">
                                <img src={html} alt="Skill" />
                                <h3>HTML5</h3>
                            </div>
                            <p className="skill-desc">
                                For optimal application functioning and quick
                                maintenance it is important to have a good
                                structure with HTML5.
                            </p>
                        </div>
                        <div className="skill">
                            <div className="upper-skill">
                                <img src={css} alt="Skill" />
                                <h3>CSS3</h3>
                            </div>
                            <p className="skill-desc">
                                Stylization of websites at the highest level to
                                ensure customer attraction.
                            </p>
                        </div>
                        <div className="skill">
                            <div className="upper-skill">
                                <img src={ui} alt="Skill" />
                                <h3>UI/UX</h3>
                            </div>
                            <p className="skill-desc">
                                Landing Page, User Flow, Wireframing and
                                Prototyping Web applications.
                            </p>
                        </div>
                        <div className="skill">
                            <div className="upper-skill">
                                <img src={reactjsimg} alt="Skill" />
                                <h3>React JS</h3>
                            </div>
                            <p className="skill-desc">
                                Most used tool on the market for its numerous
                                advantages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Me */}
            <section className="contact__container">
                <div className="center contact_box">
                    <div className="contact">
                        <h2>Let's Connect</h2>
                        <p className="subtitle__contact">
                            Make your ideas and dreams come true now. Get in
                            touch with me through any of the following platforms
                            and we will become best friends.
                        </p>
                        <h4 className="info-title">Contact me by email</h4>
                        <p className="email">vinisataides@gmail.com</p>
                        <h4 className="info-title info-2">Or</h4>
                        <div className="social-media">
                            <a
                                href="https://github.com/VinnyBittencourt"
                                target="_blank"
                            >
                                <img src={github} alt="GitHub" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/vinnybittencourt/"
                                target="_blank"
                            >
                                <img src={linkedin} alt="Linkedin" />
                            </a>
                            <a
                                href="https://www.behance.net/viniciusataides"
                                target="_blank"
                            >
                                <img src={behance} alt="Behance" />
                            </a>
                            <a
                                href="https://dribbble.com/VinnyAtaides"
                                target="_blank"
                            >
                                <img src={dribble} alt="Dribble" />
                            </a>
                        </div>
                    </div>
                    <div className="img-logo">
                        <img src={logobg} alt="Vinny B." />
                    </div>
                </div>
            </section>
        </>
    );
}

export default App;
