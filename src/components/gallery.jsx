import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>O Investimento</h2>
          <p>
            Inscrições abertas até <strong>31/03</strong> e as vagas são
            limitdas
          </p>
        </div>
        <div className="cards">
          <div className="card-holder">
            <img src="img/obiwan.png" className="obiwan" alt="" />
            <div className="card-pricing obiwan" id="obiwan">
              <h6>Obi-Wan</h6>
              <span className="crossed">R$ 499,90</span>
              <h4>R$ 399,90</h4>
              <div>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Obi Wan*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Adquirir
                </a>
              </div>
              <div className="botao">
                <p>40 horas de aula</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
              </div>
            </div>
          </div>
          <div className="card-holder selected">
            <img src="img/vader.png" alt="" className="vader" />
            <div className="card-pricing vader" id="vader">
              <h6>Darth Vader</h6>
              <span className="crossed">R$ 599,90</span>
              <h4>R$ 499,90</h4>
              <div>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Darth Vader*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Adquirir
                </a>
              </div>
              <div className="botao">
                <p>40 horas de aula</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
                <p>
                  <strong>Simulação de Entrevista</strong>
                </p>
                <p>
                  <strong>Review Linkedin</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="card-holder">
            <img src="img/yoda.png" alt="" className="yoda" />
            <div className="card-pricing yoda" id="yoda">
              <h6>Yoda</h6>
              <span className="crossed">R$ 799,90</span>
              <h4>R$ 699,90</h4>
              <div>
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Yoda*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Adquirir
                </a>
              </div>
              <div className="botoao">
                <p>40 horas de aula</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
                <p>Simulação de Entrevista</p>
                <p>Review Linkedin</p>
                <p>
                  <strong>Projeto FrontEnd ReactJS</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
