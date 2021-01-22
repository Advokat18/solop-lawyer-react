import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <nav className="navbar navbar-dark fixed-bottom pt-0 solop-bg solop-footer">
      <div className="navbar-expand m-auto navbar-text p-0">
        <h4 className="solop-footer-label">
          <i>Нововолинськ</i>,
          <a href="tel:+380962233515">
            <i>Тел. (096) 22 33 515</i>
          </a>
        </h4>
      </div>
    </nav>
  );
};

export default Footer;
