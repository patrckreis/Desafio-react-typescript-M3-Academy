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
          <li>INSTITUCIONAL</li>
          <li>Quem somos</li>
          <li>Política de Privacidade</li>
          <li>Segurança</li>
          <li>Seja um Revendedor</li>
        </ul>
        <ul className={style.ulStyle}>
          <li>DÚVIDAS</li>
          <li>Entrega</li>
          <li>Pagamento</li>
          <li>Trocas e Devoluções</li>
          <li>Dúvidas Frequentes</li>
        </ul>
        <ul className={style.ulStyle}>
          <li>FALE CONOSCO</li>
          <li>Atendimento ao Consumidor</li>
          <li>(11) 4159 9504</li>
          <li>Atendimento Online</li>
          <li>(11) 9 9433-8825</li>
        </ul>
      </div>
      <div className={style.socialMediaContainer}>
        <div className={style.socialMediaIconsContainer}>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901">
            {" "}
            <img className={style.socialIcons} src={facebook}></img>
          </a>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901">
            {" "}
            <img className={style.socialIcons} src={instagram}></img>
          </a>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901">
            {" "}
            <img className={style.socialIcons} src={twitter}></img>
          </a>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901">
            {" "}
            <img className={style.socialIcons} src={youtube}></img>
          </a>
          <a href="https://www.devmedia.com.br/react-js-criando-rotas-com-react-router-dom/42901">
            {" "}
            <img className={style.socialIcons} src={linkedin}></img>
          </a>
        </div>
        <span>www.loremipsum.com</span>
      </div>
    </div>
  );
}
