import React from 'react';

const Login = () => {
    return (
        <div className="section-login" id="login">
            <div className="container text-center">
                <div className="row">
                    <h2 className="f-syne-black title-presentation p-12 z-2">login 🔑</h2>
                    <div className="col-c w-100">
                        <div className="col square-s-big"  data-aos="zoom-in-up" data-aos-delay="300">
                            <h3 className="f-syne-black title-s">Connexion</h3>
                            <br/>
                            <p className="f-syne veilles-pres-text">
                                Vous pouvez vous connecter en cliquant sur le bouton ci-dessous.
                            </p>
                            <br/>
                            <a href="http://localhost:3000/api/auth/login" className="btn button-2 btn2-border-color-white">Connexion</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;