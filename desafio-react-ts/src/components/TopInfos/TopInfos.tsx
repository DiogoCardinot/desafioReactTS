import React, { useState } from "react";
import "./TopInfos.css";
import HomeInstitucional from "../../assets/images/home-institucional.png";

import { TopInfosAll } from "./TopInfosContents/TopInfosAll";
import { CustomForm } from "./TopInfosContents/CustomForm";

const TopInfos = () => {
  const [sobre, setSobre] = useState(true);
  const [pagamento, setPagamento] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [troca, setTroca] = useState(false);
  const [seguranca, setSeguranca] = useState(false);
  const [contato, setContato] = useState(false);

  const handleToSobre = () => {
    setSobre(true);
    setPagamento(false);
    setEntrega(false);
    setTroca(false);
    setSeguranca(false);
    setContato(false);
  };
  const handleToPagamento = () => {
    setSobre(false);
    setPagamento(true);
    setEntrega(false);
    setTroca(false);
    setSeguranca(false);
    setContato(false);
  };
  const handleToEntrega = () => {
    setSobre(false);
    setPagamento(false);
    setEntrega(true);
    setTroca(false);
    setSeguranca(false);
    setContato(false);
  };
  const handleToTroca = () => {
    setSobre(false);
    setPagamento(false);
    setEntrega(false);
    setTroca(true);
    setSeguranca(false);
    setContato(false);
  };
  const handleToSeguranca = () => {
    setSobre(false);
    setPagamento(false);
    setEntrega(false);
    setTroca(false);
    setSeguranca(true);
    setContato(false);
  };

  const handleToContacts = () => {
    setSobre(false);
    setPagamento(false);
    setEntrega(false);
    setTroca(false);
    setSeguranca(false);
    setContato(true);
  };
  return (
    <div className="top-infos-wrapper">
      <div className="top-infos-image">
        <img src={HomeInstitucional} alt="Página Home Institucional" />
      </div>
      <div className="top-infos-wrapper-title">
        <h1 className="top-infos-title">INSTITUCIONAL</h1>
      </div>
      <div className="top-infos-select">
        <div className="top-infos-buttons-wrapper">
          <ul className="top-infos-buttons">
            <li
              className={`top-infos-button-list ${sobre ? "sobre" : ""}`}
              onClick={handleToSobre}
            >
              <button className={`top-infos-button ${sobre ? "sobre" : ""}`}>
                Sobre
              </button>
            </li>
            <li
              className={`top-infos-button-list ${
                pagamento ? "pagamento" : ""
              }`}
              onClick={handleToPagamento}
            >
              <button
                className={`top-infos-button ${pagamento ? "pagamento" : ""}`}
              >
                Forma de Pagamento
              </button>
            </li>
            <li
              className={`top-infos-button-list ${entrega ? "entrega" : ""}`}
              onClick={handleToEntrega}
            >
              <button
                className={`top-infos-button ${entrega ? "entrega" : ""}`}
              >
                Entrega
              </button>
            </li>
            <li
              className={`top-infos-button-list ${troca ? "troca" : ""}`}
              onClick={handleToTroca}
            >
              <button className={`top-infos-button ${troca ? "troca" : ""}`}>
                Troca e Devolução
              </button>
            </li>
            <li
              className={`top-infos-button-list ${
                seguranca ? "seguranca" : ""
              }`}
              onClick={handleToSeguranca}
            >
              <button
                className={`top-infos-button ${seguranca ? "seguranca" : ""}`}
              >
                Segurança e Privacidade
              </button>
            </li>
            <li
              className={`top-infos-button-list ${contato ? "contato" : ""}`}
              onClick={handleToContacts}
            >
              <button
                className={`top-infos-button ${contato ? "contato" : ""}`}
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
        <div className={`top-infos-context-sobre ${sobre ? "is-open" : ""}`}>
          <TopInfosAll title="Sobre" />
        </div>
        <div
          className={`top-infos-context-pagamento ${
            pagamento ? "is-open" : ""
          }`}
        >
          <TopInfosAll title="Forma de Pagamento" />
        </div>
        <div
          className={`top-infos-context-entrega ${entrega ? "is-open" : ""}`}
        >
          <TopInfosAll title="Entrega" />
        </div>
        <div className={`top-infos-context-troca ${troca ? "is-open" : ""}`}>
          <TopInfosAll title="Troca e Devolução" />
        </div>
        <div
          className={`top-infos-context-seguranca ${
            seguranca ? "is-open" : ""
          }`}
        >
          <TopInfosAll title="Segurança e Privacidade" />
        </div>
        <div
          className={`top-infos-context-contato ${contato ? "is-open" : ""}`}
        >
          <CustomForm />
        </div>
      </div>
    </div>
  );
};
export { TopInfos };
