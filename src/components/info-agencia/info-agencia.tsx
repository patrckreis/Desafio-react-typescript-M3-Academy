import style from "./info-agencia.module.css";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";
import linkedin from "./assets/linkedin.png";
import youtube from "./assets/youtube.png";

export function InfoAgencia() {
  return (
    <div className={style.infoAgenciaContainer}>
      <div className={style.infoAgenciaUl}>
        <ul className={style.ulStyle}>
          <li className={style.infoAgenciaName}>INSTITUCIONAL</li>
          <li>Quem somos</li>
          <li>Política de Privacidade</li>
          <li>Segurança</li>
          <li>Seja um Revendedor</li>
        </ul>
        <ul className={style.ulStyle}>
          <li className={style.infoAgenciaName}>DÚVIDAS</li>
          <li>Entrega</li>
          <li>Pagamento</li>
          <li>Trocas e Devoluções</li>
          <li>Dúvidas Frequentes</li>
        </ul>
        <ul className={style.ulStyle}>
          <li className={style.infoAgenciaName}>FALE CONOSCO</li>
          <li>Atendimento ao Consumidor</li>
          <li>(11) 4159 9504</li>
          <li>Atendimento Online</li>
          <li>(11) 9 9433-8825</li>
        </ul>
      </div>
      <div className={style.socialMediaContainer}>
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
  );
}
