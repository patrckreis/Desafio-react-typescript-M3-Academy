import style from "./header.module.css";
import logoM3 from "./assets/logo.png";
import cartBuy from "./assets/cart1.png";
import searchIcon from "./assets/lupa.png";

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <img src={logoM3} alt="" />
        </div>
        <div className={style.headerSearch}>
          <input
            type="text"
            placeholder="Buscar..."
            className={style.headerSearchPlaceholder}
          />
          <img className={style.searchIcon} src={searchIcon} alt="" />
        </div>
        <div className={style.headerSafebuy}>
          <span className={style.safeBuySpan}>ENTRAR</span>
          <img src={cartBuy} alt="" />
        </div>
      </div>
    </header>
  );
}
