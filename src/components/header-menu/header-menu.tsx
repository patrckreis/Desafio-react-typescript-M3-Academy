import style from "./header-menu.module.css";
export function HeaderMenu() {
  return (
    <div className={style.headerMenu}>
      <a href="/cursos" className={style.headerMenuSpan1}>
        CURSOS
      </a>
      <a href="/saiba-mais" className={style.headerMenuSpan}>
        SAIBA MAIS
      </a>
      <a href="/institucionais" className={style.headerMenuSpan}>
        INSTITUCIONAIS
      </a>
    </div>
  );
}
