import style from "./header-menu.module.scss";
export function HeaderMenu() {
  return (
    <div className={style.headerMenu}>
      <div className={style.headerMenuContainer}>
        <a href="/cursos">CURSOS</a>
        <a href="/saiba-mais">SAIBA MAIS</a>
        <a href="/institucionais">INSTITUCIONAIS</a>
      </div>
    </div>
  );
}
