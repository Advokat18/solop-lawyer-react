import React from 'react';
import contentBg from './contentBg.jpg';

import './contacts.css';
import './content.css';

const Contacts = () => {
  return (
    <div className="solop-content-bg solop-bg">
      <img src={contentBg} alt="content backgound" />
      <div className="solop-contacts">
        <div className="contacts-information">
          <div className="inform-div-style">
            <div>
              <i className="bi bi-telephone-fill my-icons-style"></i> <br />
              <p className="text-tille-style">Телефон</p> 
              <a 
                href="tel:+380962233515" 
                className="contacts-text">38 (096) 22 33 515</a> 
            </div>
          </div>
          <div className="inform-div-style">
            <div>
              <i className="bi bi-geo-alt-fill my-icons-style"></i> <br />
              <p className="text-tille-style">Адреса</p> 
              <p 
                className="contacts-text"> Нововолинськ<br /> вул. Святого Володимира,6 
              </p> 
            </div>
          </div>
          <div className="inform-div-style">
            <div>
              <i className="bi bi-envelope-fill my-icons-style"></i> <br />
              <p className="text-tille-style">Ел. пошта</p> 
              <p className="contacts-text">soloplawyer@gmail.com</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
