import style from "./header-route.module.scss";

import home from "./assets/home.png";
import arrow from "./assets/arrow.png";

export function HeaderRoute() {
  return (
    <div className={style.headerRoute}>
      <div className={style.headerRouteContainer}>
        <img className={style.home} src={home} alt="" />
        <img src={arrow} alt="" />
        <span>INSTITUCIONAL</span>
      </div>
    </div>
  );
}
