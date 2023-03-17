import { Image } from "./image";
import React from "react";
import "./style.scss";

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
          <a
            className="card-holder"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Obi Wan*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
          >
            <img src="img/obiwan.png" className="obiwan" alt="" />
            <div className="card-pricing obiwan" id="obiwan">
              <h6>
                Obi-Wan <span className="tag-obiwan">Plano Padawan</span>
              </h6>
              <span>
                de <span className="crossed">R$ 499,90</span> por
              </span>
              <h4>R$ 399,90</h4>
              <div className="botao">
                <div>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Obi Wan*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Adquirir
                  </a>
                </div>
                <p>40 horas de aula</p>
                <p>Certificado Personalizado</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
                <p>-</p>
                <p>-</p>
                <p>-</p>
              </div>
            </div>
          </a>

          <a
            className="card-holder selected"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Darth Vader*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
          >
            <img src="img/vader.png" alt="" className="vader" />
            <div className="card-pricing vader" id="vader">
              <h6>
                Darth Vader <span className="tag-vader">Plano Jedi</span>
              </h6>
              <span>
                de <span className="crossed">R$ 599,90</span> por
              </span>
              <h4>R$ 499,90</h4>
              <div className="botao">
                <div>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Darth Vader*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Adquirir
                  </a>
                </div>
                <p>40 horas de aula</p>
                <p>Certificado Personalizado</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
                <p>Simulação de Entrevista</p>
                <p>Review Linkedin</p>
                <p>-</p>
              </div>
            </div>
          </a>

          <a
            className="card-holder "
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Yoda*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
          >
            <img src="img/yoda.png" alt="" className="yoda" />
            <div className="card-pricing yoda" id="yoda">
              <h6>
                Yoda <span className="tag-yoda">Plano Mestre</span>
              </h6>
              <span>
                de <span className="crossed">R$ 899,90</span> por
              </span>
              <h4>R$ 799,90</h4>
              <div className="botao">
                <div>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*Yoda*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Adquirir
                  </a>
                </div>
                <p>60 horas de aula</p>
                <p>Certificados Personalizados</p>
                <p>Projeto de API para Portfolio</p>
                <p>Grupo no Whatsapp</p>
                <p>Simulação de Entrevista</p>
                <p>Review Linkedin</p>
                <p>Projeto FrontEnd ReactJS</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
