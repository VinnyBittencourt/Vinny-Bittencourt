import styled from 'styled-components'

export const Container = styled.div`
header {
    width: 100%;
    height: 75vh;
    background-color: var(--bg-light);
}

.decline-box {
    height: 378px;
    width: 100%;
    background-image: linear-gradient(10deg, #fff 50%, #f2f4f9 50%);
}
.decline-box-2 {
    height: 378px;
    width: 100%;
    background-image: linear-gradient(10deg, #f2f4f9 50%, #fff 50%);
}

.nav__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-top: 20px;
}
.navbar {
    z-index: 999;
}

.navbar a {
    font-size: 16px;
    color: var(--text-color);
    font-weight: 500;
    margin-right: 60px;
    text-decoration: none;
    cursor: pointer;
    z-index: 99;
}

.navbar a:last-child {
    margin-right: 0px;
}

.banner__container {
    display: flex;
    height: calc(75vh - 109px);
}

.banner_left {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
}

.banner_left h1 {
    width: 640px;
    /* font-size: 50px; */
    font-size: 3.125em;
    font-size: 50px;
    color: var(--title-color);
    font-weight: 800;
    line-height: 63px;
    margin-bottom: 10px;
}

.banner_left .subtitle_banner {
    font-size: 20px;
    color: var(--text-color);
    margin-bottom: 40px;
}

.btn-primary {
    padding: 15px 37px 14px;
    background-color: var(--main-color);
    color: #fff;
    text-transform: uppercase;
    box-shadow: 0px 9px 18px rgba(58, 175, 201, 0.3);
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.5s;
}

/* .btn-primary:hover {
    transform: scale(1.3);
} */

.btn-secundary {
    padding: 15px 37px 14px;
    background-color: transparent;
    color: var(--main-color);
    border: 1px solid var(--main-color);
    text-transform: uppercase;
    /* box-shadow: 0px 9px 18px rgba(58, 175, 201, 0.3); */
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
}

.m-l-13 {
    margin-left: 13px;
}

.banner_right {
    position: relative;
    /* overflow: hidden; */
}

.banner_right img {
    position: absolute;
    top: -110px;
    width: 1115px;
    left: 15px;
}

.about {
    display: flex;
    justify-content: space-between;
}

.about_left h2 {
    font-size: 50px;
    color: var(--title-color);
    text-transform: uppercase;
    margin-bottom: 30px;
    font-weight: 800px;
    position: relative;
    z-index: 2;
}

.about_left h2::after {
    content: url("../../images/aboutmeimg.png");
    position: absolute;
    left: -400px;
    top: -164px;
    z-index: -1;
}

.about-text {
    font-size: 16px;
    color: var(--text-color);
    margin-bottom: 40px;
    line-height: 31px;
    max-width: 727px;
}

.ar-img {
    width: 600px;
    margin-top: 150px;
    position: relative;
}

.ar-img::after {
    content: url("../../images/retan.png");
    position: absolute;
    left: 100px;
    top: 0px;
    /* z-index: -1; */
}

.projects {
    background-color: var(--bg-light);
}

.proj h2 {
    font-size: 50px;
    color: var(--title-color);
    margin-bottom: 30px;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

.proj h2::after {
    content: url("../../images/Projects.png");
    position: absolute;
    left: -288px;
    top: -164px;
    z-index: -1;
}

.projects-text {
    font-size: 16px;
    color: var(--text-color);
    margin-bottom: 40px;
    line-height: 31px;
    max-width: 727px;
    z-index: 2;
    position: relative;
}

/* .projects__container {
    display: grid;
    grid-template-columns: 356px 356px 356px 356px;
    grid-template-rows: 522px 522px;
    row-gap: 25px;
    column-gap: 25px;

    margin-bottom: 200px;
}

.pj {
    background-color: cyan;
} */

.projs__container {
    max-width: 1500px;
    display: grid;
    grid-template-columns: 356px 356px 356px 356px;
    /* grid-template-columns: 25% 25% 25% 25%; */
    column-gap: 25px;
    padding-bottom: 200px;
}

.proj__midbox {
    display: flex;
    flex-direction: column;
    max-width: 356px;
}

.projs {
    /* background-color: cyan; */
    width: 356px;
    /* height: 522px; */
    background-position: center;
}

/* .mid01 {
    margin-right: 12.5px;
}

.mid02,
.mid03 {
    margin: 0 12.5px;
}

.mid04 {
    margin-left: 12.5px;
} */

.proj__midbox .projs:first-child {
    margin-bottom: 25px;
}

.p01 {
    height: 522px;
    background-image: url(../../images/Fig01.png);
    background-size: cover;
    border-radius: 10px;
}
.p02 {
    height: 363px;
    background-image: url(../../images/Fig02.png);
    background-size: cover;
    border-radius: 10px;
}
.p03 {
    height: 445px;
    background-image: url(../../images/Fig03.png);
    background-size: cover;
    border-radius: 10px;
}
.p04 {
    height: 440px;
    background-image: url(../../images/Fig04.png);
    background-size: cover;
    border-radius: 10px;
}
.p05 {
    height: 344px;
    background-image: url(../../images/Fig05.png);
    background-size: cover;
    border-radius: 10px;
}
.p06 {
    height: 541px;
    background-image: url(../../images/Fig06.png);
    background-size: cover;
    border-radius: 10px;
}
.p07 {
    height: 445px;
    background-image: url(../../images/Fig07.png);
    background-size: cover;
    border-radius: 10px;
}
.p08 {
    height: 440px;
    background-image: url(../../images/Fig08.png);
    background-size: cover;
    border-radius: 10px;
}

/* Skills */

.skills__container {
    padding: 300px 0 200px;
    width: 100%;
}

.skills h2 {
    font-size: 50px;
    color: var(--title-color);
    margin-bottom: 30px;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

.skills h2::after {
    content: url("../../images/Skills.png");
    position: absolute;
    left: -288px;
    top: -164px;
    z-index: -1;
}

.subtitle-skills {
    font-size: 16px;
    color: var(--text-color);
    margin-bottom: 40px;
    line-height: 31px;
    max-width: 727px;
    z-index: 2;
    position: relative;
}

.box__skills {
    max-width: 1326px;
    display: grid;
    grid-template-columns: 306px 306px 306px;
    column-gap: 205px;
    row-gap: 65px;
    margin: 0 auto;
    justify-content: center;
}

.upper-skill {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
}

.upper-skill h3 {
    margin-left: 55px;
    font-size: 30px;
    font-weight: 600;
    color: var(--title-color);
}

.skill-desc {
    max-width: 306px;
    color: var(--text-color);
    line-height: 31px;
    font-size: 16px;
}

/* Contact Me */

.contact__container {
    padding: 290px 0 200px;
    background-color: var(--bg-light);
}

.contact_box {
    display: flex;
}

.contact h2 {
    font-size: 50px;
    color: var(--title-color);
    margin-bottom: 30px;
    text-transform: uppercase;
    position: relative;
    z-index: 2;
}

.contact h2::after {
    content: url("../../images/ContactMe.png");
    position: absolute;
    left: -500px;
    top: -164px;
    z-index: -1;
}

.subtitle__contact {
    font-size: 16px;
    color: var(--text-color);
    margin-bottom: 30px;
    line-height: 31px;
    max-width: 727px;
    z-index: 2;
    position: relative;
}

.info-title {
    color: var(--title-color);
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: 400;
}

.email {
    color: var(--text-color);
    font-size: 18px;
    margin-bottom: 10px;
}

.info-2 {
    margin-bottom: 10px;
}

.social-media a {
    margin-right: 20px;
}

.contact {
    /* flex: 1; */
}
.img-logo {
    /* flex: 1; */
    position: relative;
    width: 100%;
}

.img-logo img {
    position: absolute;
    right: 0;
    top: -180px;
}

/* Media Query */

@media (max-width: 1600px) {
    .banner_right img {
        top: -95px;
        width: 1050px;
        left: -59px;
    }
    .about-text {
        max-width: 600px;
    }
    .projects-text {
        max-width: 600px;
    }
    .subtitle-skills {
        max-width: 600px;
    }
    .subtitle__contact {
        max-width: 600px;
    }
    .projs__container {
        grid-template-columns: repeat(4, 1fr);
    }
    .proj__midbox {
        max-width: unset;
        width: 100%;
    }
    .projs {
        width: 100%;
    }
    .img-logo img {
        top: -120px;
        width: 500px;
    }
}

@media (max-width: 1400px) {
    .banner_right img {
        top: -95px;
        width: 750px;
        left: -59px;
    }
    .ar-img {
        width: 500px;
    }
    .about-text {
        max-width: 550px;
    }
    .projects-text {
        max-width: 550px;
    }
    .subtitle-skills {
        max-width: 550px;
    }
    .subtitle__contact {
        max-width: 550px;
    }
    .box__skills {
        column-gap: 100px;
    }
    .img-logo img {
        top: 0px;
        width: 400px;
    }
    .contact h2::after {
        left: -620px;
    }
}

@media (max-width: 900px) {
    .about {
        flex-direction: column;
    }
    .ar-img {
        width: 100%;
        margin-top: 10px;
    }
    .projs__container {
        grid-template-columns: repeat(2, 1fr);
    }
    .projs {
        height: 215px;
    }
    .proj__midbox {
        margin-bottom: 25px;
    }
    .box__skills {
        grid-template-columns: unset;
        justify-content: unset;
    }
    .upper-skill h3 {
        margin-left: 25px;
    }
    .img-logo img {
        display: none;
    }
    .img-logo {
        display: none;
    }
    .contact h2,
    .skills h2,
    .proj h2,
    .about_left h2,
    .banner_left h1 {
        font-size: 2.2rem;
    }

    .banner__container {
        flex-direction: column;
        z-index: 1;
    }
    .banner_right img {
        top: -95px;
        width: 400px;
        left: -7%;
    }
    .banner_right {
        margin-top: 90px;
    }
    .banner_left h1 {
        font-size: 2.2rem;
        line-height: 38px;
        width: 100%;
        text-align: center;
    }
    .subtitle_banner {
        font-size: 14px !important;
        text-align: center;
        line-height: 20px;
        margin-bottom: 30px;
    }
    .banner_left {
        margin-top: 50%;
    }

    .btn-primary,
    .btn-secundary {
        padding: 15px 25px 14px;
        font-size: 14px;
    }
    .flex-box {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .banner_right img {
        display: none;
    }
}
`;