import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conheça o Mestre</h2>

          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
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
          <p>Recifense de 28 anos apaixonado por tecnologia e Star Wars.</p>
          <p>
            {" "}
            Começou sua carreira com tecnologia aos 19 anos e desde então já fez
            parte de times em grandes empresas como <i>Avanade</i>,{" "}
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
  );
};
