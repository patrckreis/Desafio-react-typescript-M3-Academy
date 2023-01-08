import style from "./info-agencia.module.scss";

import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import youtube from "./assets/youtube.png";

export function InfoAgencia() {
  return (
    <div className={style.infoAgencia}>
      <div className={style.infoAgenciaContainer}>
        <div className={style.infoAgenciaMainContainer}>
          <div className={style.institucionalInfosContainer}>
            <ul className={style.institucionalInfosUl}>
              <li className={style.infoAgenciaName}>INSTITUCIONAL</li>
              <li>Quem somos</li>
              <li>Política de Privacidade</li>
              <li>Segurança</li>
              <li>Seja um Revendedor</li>
            </ul>
            <ul className={style.institucionalInfosUl}>
              <li className={style.infoAgenciaName}>DÚVIDAS</li>
              <li>Entrega</li>
              <li>Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li>Dúvidas Frequentes</li>
            </ul>
            <ul className={style.institucionalInfosUl}>
              <li className={style.infoAgenciaName}>INSTITUCIONAL</li>
              <li>Atendimento ao Consumidor</li>
              <li>Política de privacidade</li>
              <li>Segurança</li>
              <li>Seja um revendedor</li>
            </ul>
          </div>
          <div className={style.socialMedia}>
            <div className={style.socialMediaIconsContainer}>
              <a href="https://www.google.com.br/">
                {" "}
                <img className={style.socialIcons} src={facebook} alt=""></img>
              </a>
              <a href="https://www.google.com.br/">
                {" "}
                <img className={style.socialIcons} src={instagram} alt=""></img>
              </a>
              <a href="https://www.google.com.br/">
                {" "}
                <img className={style.socialIcons} src={twitter} alt=""></img>
              </a>
              <a href="https://www.google.com.br/">
                {" "}
                <img className={style.socialIcons} src={youtube} alt=""></img>
              </a>
              <a href="https://www.google.com.br/">
                {" "}
                <img className={style.socialIcons} src={linkedin} alt=""></img>
              </a>
            </div>
            <span>www.loremipsum.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
