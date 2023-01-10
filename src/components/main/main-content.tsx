import style from "./main-content.module.scss";
import { CustomForm } from "./form/custom-form";

import { useState } from "react";
import { Text } from "./text/text";

export function MainContent() {
  const arr = [
    {
      name: "Sobre",
      content: (
        <Text
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          content2="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          content3="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          title="Sobre"
        />
      ),
    },
    {
      name: "Forma de pagamento",
      content: (
        <Text
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          content2=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error."
          content3=""
          title="Forma de pagamento"
        />
      ),
    },
    {
      name: "Entrega",
      content: (
        <Text
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          content2=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error."
          content3=""
          title="Entrega"
        />
      ),
    },
    {
      name: "Troca e Devolução",
      content: (
        <Text
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          content2=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error."
          content3=""
          title="Troca e devolução"
        />
      ),
    },
    {
      name: "Segurança e Privacidade",
      content: (
        <Text
          content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          content2=" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Sed ut perspiciatis unde omnis iste natus error."
          content3=""
          title="Segurança e Privacidade"
        />
      ),
    },
    { name: "Contato", content: <CustomForm /> },
  ];
  const [content, setContent] = useState<string | JSX.Element>(arr[0].content);
  const [selectedItem, setSelectedItem] = useState<string>(arr[0].name);
  return (
    <div className={style.institutional}>
      <h1 className={style.institutionalTitle}>INSTITUCIONAL</h1>
      <div className={style.institutionalContainer}>
        <div className={style.institutionalMainContainer}>
          <div>
            <nav className={style.InstitutionalNavContainer}>
              {arr.map((item) => {
                return (
                  <span
                    className={style.NavSpan}
                    style={{
                      /* position: "fixed",
                      bottom: "20px", */
                      color: selectedItem === item.name ? "white" : "#7D7D7D",
                      backgroundColor:
                        selectedItem === item.name ? "black" : "white",
                    }}
                    key={item.name}
                    onClick={() => {
                      setSelectedItem(item.name);
                      setContent(item.content);
                    }}
                  >
                    {item.name}
                  </span>
                );
              })}
            </nav>
          </div>
          {content}
        </div>
      </div>
    </div>
  );
}
