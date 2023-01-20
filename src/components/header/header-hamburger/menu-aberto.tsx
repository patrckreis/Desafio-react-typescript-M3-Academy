import React from "react";
import Modal from "react-modal";
import style from "./menu-aberto.module.scss";
import close from "../assets/close.png";

interface MenuHamburgerProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function MenuAberto({ isOpen, onRequestClose }: MenuHamburgerProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={style.modalOverlay}
      className={style.menuModal}
      ariaHideApp={false}
    >
      <div className={style.modalOpen}>
        <span>ENTRAR</span>
        <img src={close} alt="" />
      </div>
      <div className={style.menu}>
        <span>CURSOS</span>
        <span>SAIBA MAIS</span>
        <span>INSTITUCIONAL</span>
      </div>
    </Modal>
  );
}
