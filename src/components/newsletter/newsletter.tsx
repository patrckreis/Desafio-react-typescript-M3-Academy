import style from "./newsletter.module.scss";
export function Newsletter() {
  return (
    <div className={style.newsLetter}>
      <div className={style.newsLetterContainer}>
        <h2>ASSINE NOSSA NEWSLETTER</h2>
        <input type="text" placeholder="E-mail" />
        <button>ENVIAR</button>
      </div>
    </div>
  );
}
