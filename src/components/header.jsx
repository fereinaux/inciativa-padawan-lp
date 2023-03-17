import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>
                  Dê o próximo passo para se tornar um{" "}
                  <strong>Mestre Jedi</strong>
                </p>
                <a href="#about" className="btn btn-custom btn-lg page-scroll">
                  Saiba Mais
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
