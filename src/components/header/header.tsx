import { HeaderMenu } from "./header-menu/header-menu";
import { HeaderRoute } from "./header-route/header-route";
import { HeaderHamburger } from "./header-hamburger/header-hamburger";
import { MenuAberto } from "./header-hamburger/menu-aberto";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import style from "./header.module.scss";
import logoM3 from "./assets/logo.png";
import cartBuy from "./assets/cart1.png";
import searchIcon from "./assets/lupa.png";

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Router>
        <header className={style.header}>
          <div className={style.headerMainContainer}>
            <div className={style.headerContainer}>
              <div className={style.headerLogoContainer}>
                <a href="/home">
                  {" "}
                  <img src={logoM3} alt=""></img>
                </a>
              </div>
              <div className={style.headerSearch}>
                <input type="text" placeholder="Buscar..." />
                <img
                  className={style.socialIcons}
                  src={searchIcon}
                  alt=""
                ></img>
              </div>
              <div className={style.headerSafebuy}>
                <Link to="entrar">ENTRAR</Link>
                <img src={cartBuy} alt="" />
              </div>
            </div>
          </div>
        </header>
      </Router>
      <HeaderHamburger openModal={() => setOpenModal(true)} />
      <MenuAberto
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
      />
      <HeaderMenu />
      <HeaderRoute />
    </>
  );
}
