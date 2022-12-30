import style from "./newsletter.module.css";
export function Newsletter() {
  return (
    <div className={style.newsLetterContainer}>
      <div>
        <h2 className={style.newsLetterTitle}>ASSINE NOSSA NEWSLETTER</h2>
        <input
          className={style.newsLetterPlaceholder}
          type="text"
          placeholder="E-mail"
        />
        <button className={style.newsLetterButton}>ENVIAR</button>
      </div>
    </div>
  );
}
