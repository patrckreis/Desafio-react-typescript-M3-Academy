import style from "./info-agencia-mobile.module.scss";
import plus from "./assets/plus.png";
import facebook from "../../info-agencia/assets/facebook.png";
import instagram from "../../info-agencia/assets/instagram.png";
import linkedin from "../../info-agencia/assets/linkedin.png";
import twitter from "../../info-agencia/assets/twitter.png";
import youtube from "../../info-agencia/assets/youtube.png";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export const InfoAgenciaMobile = () => {
  return (
    <Accordion className={style.accordion}>
      <AccordionItem>
        <AccordionHeader className={style.accordionContainer}>
          <div className={style.accordionDiv}>
            <span>Institucional</span>
            <img className={style.plusImg} src={plus} alt="" />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div className={style.accordionLi}>
            <li>Quem somos</li>
            <li>Política de Privacidade</li>
            <li>Segurança</li>
            <li className={style.institucionalInfosMobileUnderline}>
              Seja um Revendedor
            </li>
          </div>
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader className={style.accordionContainer}>
          <div className={style.accordionDiv}>
            <span>Dúvidas</span>
            <img className={style.plusImg} src={plus} alt="" />
          </div>
        </AccordionHeader>

        <AccordionBody>
          <div className={style.accordionLi}>
            <li>Entrega</li>
            <li>Pagamento</li>
            <li>Trocas e Devoluções</li>
            <li className={style.institucionalInfosMobileUnderline}>
              Dúvidas Frequentes
            </li>
          </div>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader className={style.accordionContainer}>
          <div className={style.accordionDiv}>
            <span>Fale conosco</span>
            <img className={style.plusImg} src={plus} alt="" />
          </div>
        </AccordionHeader>

        <AccordionBody>
          <div className={style.accordionLi}>
            <li>Atendimento ao Consumidor</li>
            <li>(11) 4159-9504</li>
            <li>Atendimento Online</li>
            <li className={style.institucionalInfosMobileUnderline}>
              (11) 99433-8825
            </li>
          </div>
        </AccordionBody>
      </AccordionItem>
      <div className={style.socialIconsMobile}>
        <a href="https://www.google.com.br/">
          {" "}
          <img src={facebook} alt=""></img>
        </a>
        <a href="https://www.google.com.br/">
          {" "}
          <img src={instagram} alt=""></img>
        </a>
        <a href="https://www.google.com.br/">
          {" "}
          <img src={twitter} alt=""></img>
        </a>
        <a href="https://www.google.com.br/">
          {" "}
          <img src={youtube} alt=""></img>
        </a>
        <a href="https://www.google.com.br/">
          {" "}
          <img src={linkedin} alt=""></img>
        </a>
      </div>
      <span>www.loremipsum.com</span>
    </Accordion>
  );
};
