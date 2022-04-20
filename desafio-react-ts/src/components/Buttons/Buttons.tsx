import React from "react";

import "./Buttons.css";
import WhatsappIcon from "../../assets/images/whatsapp-icon.png";
import UpArrowIcon from "../../assets/images/up-arrow-icon.png";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Buttons = () => {
  return (
    <div className="buttons-wrapper">
      <div className="button-whatsapp">
        <a
          href="https://api.whatsapp.com/send?phone=5511994338825"
          target="_blank"
        >
          <img src={WhatsappIcon} alt="Whatsapp" />
        </a>
      </div>
      <div className="button-up" onClick={scrollTop}>
        <img src={UpArrowIcon} alt="Voltar ao topo" />
      </div>
    </div>
  );
};
export { Buttons };
