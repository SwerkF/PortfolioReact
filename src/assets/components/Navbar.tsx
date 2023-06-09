import React from 'react';

const Navbar = () => {
    return (
    <div className="custom-nav">
        <div className="d-flex">
            <p className="align-items-center f-syne-black color-white w-100 logo"><span className="hover-text-animate-b">O</span><span className="hover-text-animate-p">S</span></p>
            <p className="align-items-center f-syne-black color-white w-100 logo-min"><span className="hover-text-animate-b" data-aos-delay="1500">Oliwer </span><span className="hover-text-animate-p">Skweres</span></p>
            <div className="d-flex">
            <a className="align-items-center nav-item f-syne-black color-white" data-aos="fade-down" data-aos-delay="1000">•&nbsp;ACCUEIL</a>
            <a className="align-items-center nav-item f-syne-black color-white" href="#about" data-aos="fade-down" data-aos-delay="1100">•&nbsp;ABOUT</a>
            <a className="align-items-center nav-item f-syne-black color-white" href="#projets" data-aos="fade-down" data-aos-delay="1200">•&nbsp;PROJETS</a>
            <a className="align-items-center nav-item f-syne-black color-white" href="#stages" data-aos="fade-down" data-aos-delay="1300">•&nbsp;STAGES</a>
            <a className="align-items-center nav-item f-syne-black color-white" href="#certif" data-aos="fade-down" data-aos-delay="1400">•&nbsp;CERTIF</a>
            <a className="align-items-center nav-item-last f-syne-black color-white" href="#veilles" data-aos="fade-down" data-aos-delay="1500">•&nbsp;VEILLES</a>
            </div>
        </div>
    </div>
    );
};

export default Navbar;