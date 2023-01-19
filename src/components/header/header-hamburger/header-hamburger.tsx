import style from "./header-hamburger.module.scss";
import menu from "../assets/menu.png";
import m3logo from "../assets/logo.png";
import cart from "../assets/cart1.png";
import lupa from "../assets/lupa.png";
import React from "react";

interface HamburgerProps {
  openModal: () => void;
}

export function HeaderHamburger({ openModal }: HamburgerProps) {
  return (
    <div className={style.headerHamburger}>
      <div className={style.headerHamburgerTop}>
        <button onClick={openModal} className={style.btnModal}>
          {" "}
          <img src={menu} alt="" />
        </button>
        <img src={m3logo} alt="" />
        <img src={cart} alt="" />
      </div>
      <div className={style.headerHamburgerPlaceholder}>
        <input type="text" placeholder="Buscar..." />
        <a href="/">
          {" "}
          <img className={style.lupaIcon} src={lupa} alt=""></img>
        </a>
      </div>
    </div>
  );
}
