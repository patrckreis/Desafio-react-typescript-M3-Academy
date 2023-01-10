import style from "./footer.module.scss";

import { InfoAgencia } from "../info-agencia/info-agencia";
import { Newsletter } from "../newsletter/newsletter";
import { InfoAgenciaMobile } from "./info-agencia-mobile/info-agencia-mobile";

import boleto from "./assets/Boleto.png";
import diners from "./assets/Diners.png";
import elo from "./assets/Elo.png";
import hiper from "./assets/Hiper.png";
import m3 from "./assets/m3.png";
import master from "./assets/Master.png";
import pagseguro from "./assets/Pagseguro.png";
import visa from "./assets/Visa.png";
import vtexPci from "./assets/vtex-pci.png";
import vtex from "./assets/vtex.png";
import line from "./assets/Line.png";

export function Footer() {
  return (
    <>
      <Newsletter />
      <InfoAgencia />
      <InfoAgenciaMobile />
      <div className={style.footer}>
        <div className={style.footerMainContainer}>
          <div className={style.footerContainer}>
            <div className={style.footerSpanContainer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </span>
            </div>
            <div className={style.footerCardIconsContainer}>
              <img src={master} alt="" />
              <img src={visa} alt="" />
              <img src={diners} alt="" />
              <img src={elo} alt="" />
              <img src={hiper} alt="" />
              <img src={pagseguro} alt="" />
              <img src={boleto} alt="" />
              <img src={line} alt="" />
              <img src={vtexPci} className={style.Pci} alt="" />
            </div>
            <div className={style.PdDbContainer}>
              <span>Powered By</span>
              <img src={vtex} alt="" />
              <span>Developed By</span>
              <img src={m3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
