import style from "./info-agencia.module.scss";

import facebook from "../assets/assets-info-agencia/facebook.png";
import instagram from "../assets/assets-info-agencia/instagram.png";
import twitter from "../assets/assets-info-agencia/twitter.png";
import linkedin from "../assets/assets-info-agencia/linkedin.png";
import youtube from "../assets/assets-info-agencia/youtube.png";

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
              <li className={style.institucionalInfosUnderline}>
                Seja um Revendedor
              </li>
            </ul>
            <ul className={style.institucionalInfosUl}>
              <li className={style.infoAgenciaName}>DÚVIDAS</li>
              <li>Entrega</li>
              <li>Pagamento</li>
              <li>Trocas e Devoluções</li>
              <li className={style.institucionalInfosUnderline}>
                {" "}
                Dúvidas Frequentes
              </li>
            </ul>
            <ul className={style.institucionalInfosUl}>
              <li className={style.infoAgenciaName}>FALE CONOSCO</li>
              <li>Atendimento ao Consumidor</li>
              <li>(11) 4159-9504</li>
              <li>Atendimento Online</li>
              <li className={style.institucionalInfosUnderline}>
                (11) 99433-8825
              </li>
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
