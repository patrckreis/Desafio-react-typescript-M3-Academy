import style from "./text.module.scss";

interface TextProps {
  content1: string;
  content2: string;
  content3: string;
  title: string;
}

export function Text({ content1, content2, content3, title }: TextProps) {
  return (
    <div className={style.textContainer}>
      <h2>{title}</h2>
      <p>{content1}</p>
      <p>{content2}</p>
      <p>{content3}</p>
    </div>
  );
}
