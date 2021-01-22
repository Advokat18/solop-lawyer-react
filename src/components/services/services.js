import React from "react";

import contentBg from "../contacts/contentBg.jpg";

import "../contacts/content.css";
import "./services.css";

const Services = () => {
  return (
    <div className="solop-content-bg solop-bg">
      <img src={contentBg} alt="content backgound" />
      <div className="solop-content-services scroll-block">
        <div className="solop-practics-grid-container">
          <a href="./services/commercial.html" className="services-style">
            <p className="services-title">Господарське право</p>
          </a>
          <a href="./services/contract.html" className="services-style">
            <p className="services-title">
              Договірне <br />
              право
            </p>
          </a>
          <a href="./services/labor.html" className="services-style">
            <p className="services-title">
              Трудове <br />
              право
            </p>
          </a>
          <a href="./services/tax.html" className="services-style">
            <p className="services-title">
              Податкове <br />
              право
            </p>
          </a>
          <a href="./services/criminal.html" className="services-style">
            <p className="services-title">
              Кримінальне <br />
              право
            </p>
          </a>
          <a href="./services/family.html" className="services-style">
            <p className="services-title">
              Сімейне <br />
              право
            </p>
          </a>
          <a href="./services/inheritance.html" className="services-style">
            <p className="services-title">
              Спадкове <br />
              право
            </p>
          </a>
          <a href="./services/enforcement.html" className="services-style">
            <p className="services-title">
              Виконавче <br />
              право
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
