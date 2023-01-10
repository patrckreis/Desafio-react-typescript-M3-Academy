import style from "./info-agencia-mobile.module.scss";
import img from "../assets/Boleto.png";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

export const InfoAgenciaMobile = () => {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionHeader>
          <div className={style.divspan}>
            <span>Institucional</span>
            <img src={img} alt="" />
          </div>
        </AccordionHeader>
        <AccordionBody>
          <div>
            <li>Quem somos</li>
            <li>Política de Privacidade</li>
            <li>Segurança</li>
            <li>Seja um Revendedor</li>
          </div>
        </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader>
          <div className={style.divspan}>
            <span>Dúvidas</span>
          </div>
        </AccordionHeader>

        <AccordionBody>
          <div>
            <li>Entrega</li>
            <li>Pagamento</li>
            <li>Trocas e Devoluções</li>
            <li>Dúvidas Frequentes</li>
          </div>
        </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader>
          <div className={style.divspan}>
            <span>Fale conosco</span>
          </div>
        </AccordionHeader>

        <AccordionBody>
          <div>
            <li>Atendimento ao Consumidor</li>
            <li>(11) 4159-9504</li>
            <li>Atendimento Online</li>
            <li>(11) 99433-8825</li>
          </div>
        </AccordionBody>
      </AccordionItem>
      <div></div>
    </Accordion>
  );
};
