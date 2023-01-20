import style from "./header-menu.module.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export function HeaderMenu() {
  return (
    <Router>
      <div className={style.headerMenu}>
        <div className={style.headerMenuContainer}>
          <Link to="/cursos"> CURSOS</Link>
          <Link to="/saiba-mais"> SAIBA MAIS</Link>
          <Link to="/institucionais"> INSTITUCIONAIS</Link>
        </div>
      </div>
    </Router>
  );
}
