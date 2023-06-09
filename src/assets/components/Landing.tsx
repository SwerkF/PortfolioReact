import React from 'react';

const Landing = () => {
    return (
    <>
        <div className="landing">
            <div className="square">
                <div className="inner-square">
                <div className="inner d-flex flex-column justify-content-between h-100">
                    <h1 className="text-os color-white f-krona">O<span className="color-br">S</span></h1>
                    <h2 className="text-os2 color-white f-krona">OLIWER <span className="color-br">S</span>KWERES</h2>
                </div>
                </div>
            </div>
            <div className="First form-col1"><p className="f-krona text-up color-white" data-aos="fade-right">FUTUR</p></div>
            <div className="Second form-col2"><p className="f-viaoda-black text-up color-white" data-aos="fade-down" data-aos-delay="300">DEV</p></div>
            <div className="Third form-col3 d-flex">
                <div className="d-flex flex-column">
                <p className="f-syne-black text-down" data-aos="fade-up" data-aos-delay="600">FULL</p>
                <div className="d-flex flex-row justify-content-end">
                    <a className="button-4" data-aos="fade-up" data-aos-delay="1200">Portfolio d'un <span>artiste</span> ✨</a>
                </div>
                </div>
            </div>
            <div className="Fourth form-col4">
                <div className="d-flex flex-column">
                    <p className="f-syne-black text-down color-white" data-aos="fade-up" data-aos-delay="900">STACK</p>
                </div>
            </div>
        </div>
        <div className="landing-2">
            <div className="Third form-col3"><p className="f-syne-black"></p></div>
            <div className="Fourth form-col4"><p className="f-syne-black"></p></div>
        </div>
    </>
        
    );
};

export default Landing;