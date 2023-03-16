import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <div className="logo-container">
              <img src="img/logo.png" className="img-responsive" alt="" />{" "}
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre a Iniciativa</h2>
              <p>
                Surgiu da ideia de capacitar pessoas em transição e início de
                carreira, de uma forma intensiva e com um projeto real,
                envolvendo tecnologias e processos atuais de desenvolvimento.
              </p>
              <p>
                {" "}
                O modelo de ensino, no estilo mentoria, facilita entender o
                momento de mercado de cada um e seus pontos de melhoria.
              </p>
              <p>
                A paixão por Star Wars é refletida no processo criativo da
                mentoria e na elabração de seus conteúdos, exercícios, exemplos
                e projetos.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="team">
              {" "}
              <img src="img/team/01.jpg" alt="..." className="team-img" />
              <div className="caption">
                <h4>Felipe Reinaux</h4>
                <p>Grande Mestre Jedi</p>
              </div>
            </div>

            <div className="contact-brands">
              <a
                href="https://www.linkedin.com/in/reinauxfelipe/"
                target="_blank"
              >
                <i className="fa fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5581997187441"
                target="_blank"
              >
                <i className="fa fa-brands fa-whatsapp"></i>
              </a>
              <a href="https://www.instagram.com/fereinaux/" target="_blank">
                <i className="fa fa-brands fa-instagram"></i>
              </a>
              <a href="https://github.com/fereinaux" target="_blank">
                <i className="fa fa-brands fa-github"></i>
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Sobre o Mestre</h2>
              <p>Recifense de 28 anos apaixonado por tecnologia e Star Wars.</p>
              <p>
                {" "}
                Começou sua carreira com tecnologia aos 19 anos e desde então já
                fez parte de times em grandes empresas como <i>Avanade</i>,{" "}
                <i>Globant</i> e atualmente
                <i> Thomnson Reuters</i>.
              </p>
              <p>
                {" "}
                Sua trajetória envolve certificações <i>Microsoft</i>, projetos
                internacionais e envolvimento em mentorias de capacitação para o
                mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
