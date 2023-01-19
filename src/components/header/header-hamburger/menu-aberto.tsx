import React from "react";
import Modal from "react-modal";
import style from "./menu-aberto.module.scss";

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
      <h1 className={style.cscs}>Hello World</h1>
    </Modal>
  );
}
