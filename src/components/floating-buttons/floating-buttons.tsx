import wpp from "./assets/whatsapp.png";
import arrowtop from "./assets/arrowtop.png";

import style from "./floating-buttons.module.scss";

export function FloatingButtons() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className={style.buttonsContainer}>
      <a className={style.wppLink} href="https://wa.me/5532998305110">
        {" "}
        <img src={wpp} alt=""></img>
      </a>
      <button className={style.topButton} onClick={scrollToTop}>
        {" "}
        <img src={arrowtop} alt="" />
      </button>
    </div>
  );
}
