import { HeaderMenu } from "./header-menu/header-menu";
import { HeaderRoute } from "./header-route/header-route";

import style from "./header.module.scss";
import logoM3 from "./assets/logo.png";
import cartBuy from "./assets/cart1.png";
import searchIcon from "./assets/lupa.png";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <div className={style.headerMainContainer}>
          <div className={style.headerContainer}>
            <div className={style.headerLogoContainer}>
              <img src={logoM3} alt="" />
            </div>
            <div className={style.headerSearch}>
              <input type="text" placeholder="Buscar..." />
              <a href="/">
                {" "}
                <img
                  className={style.socialIcons}
                  src={searchIcon}
                  alt=""
                ></img>
              </a>
            </div>
            <div className={style.headerSafebuy}>
              <span>ENTRAR</span>
              <img src={cartBuy} alt="" />
            </div>
          </div>
        </div>
      </header>
      <HeaderMenu />
      <HeaderRoute />
    </>
  );
}
