import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>O Investimento</h2>
        </div>
        <div className="cards">
          <div className="card-pricing">
            <h6>YOUNGLING</h6>
            <h4>R$ 399,90</h4>
            <p>40 horas de aula</p>
            <p>Portal do Padawan</p>
            <div className="botao">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*YOUNGLING*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                className="btn btn-custom btn-lg page-scroll"
              >
                Adquirir
              </a>
            </div>
          </div>
          <div className="card-pricing">
            <h6>PADAWAN</h6>
            <h4>R$ 499,90</h4>
            <p>40 horas de aula</p>
            <p>Portal do Padawan</p>
            <p>Simulação de Entrevista</p>
            <p>Review Linkedin</p>
            <div className="botao">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5581997187441&text=Ol%C3%A1,%20me%20interessei%20no%20plano%20*PADAWAN*%20da%20Iniciativa%20Padawan,%20como%20prosseguir?"
                className="btn btn-custom btn-lg page-scroll"
              >
                Adquirir
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
