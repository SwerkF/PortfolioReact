import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
        <footer className="py-5 footer-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5>Mon Portfolio</h5>
                <p className="text-muted">Un site pour montrer mes projets et mes compétences. Ce site ne recolte aucune donnée, cependant certaines informations peuvent être stockées en local sur votre navigateur afin d'améliorer les performances du site.</p>
              </div>
              <div className="col-md-6">
                <h5>Contactez-moi</h5>
                <ul className="list-unstyled">
                  <li><a href="mailto:oliwer721@gmail.com"><i className="fas fa-envelope"></i> oliwer721@gmail.com</a></li>
                  <li><a href="tel:+33640810044"><i className="fas fa-phone"></i> +33640810044</a></li>
                  <li><a href="https://www.linkedin.com/in/oliwer-skweres/"><i className="fab fa-linkedin"></i> Mon profil LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-md-6">
                <p className="text-muted">© 2023 Mon Portfolio. Tous droits réservés.</p>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-row justify-content-around">
                    <ul className="list-inline text-md-right">
                        <p>Made with 💝 by Oliwer Skweres</p>
                    </ul>
                    <ul className="d-flex flex-row">
                        <div className="color-square-prim"></div>
                        <div className="color-square-sec"></div>
                        <div className="color-square-white"></div>
                        <div className="color-square-black"></div>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
};

export default Footer;