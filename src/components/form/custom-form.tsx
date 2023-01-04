import style from "./custom-form.module.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { string } from "yup";

const initialValues = {
  Nome: "",
  Email: "",
  CPF: "",
  Nascimento: "",
  Telefone: "",
  Instagram: "",
};

interface IformikValues {
  Nome: string;
  Email: string;
  CPF: string;
  Nascimento: string;
  Telefone: string;
  Instagram: string;
}

export function CustomForm() {
  const handleFormikSubmit = (values: IformikValues) => {
    console.log(values);
  };
  return (
    <div className={style.CustomForm}>
      <div className={style.CustomFormContainer}>
        <h1>Preencha o formulário</h1>
        <Formik onSubmit={handleFormikSubmit} initialValues={initialValues}>
          <Form>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="Nome">
                Nome
              </label>
              <Field
                placeholder="Seu nome completo"
                className={style.FormField}
                id="Nome"
                name="Nome"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="Email">
                E-mail
              </label>
              <Field
                placeholder="Seu e-mail"
                className={style.FormField}
                id="Email"
                name="Email"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="CPF">
                CPF
              </label>
              <Field
                placeholder="000.000.000-00"
                className={style.FormField}
                id="CPF"
                name="CPF"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="Nascimento">
                Data de Nascimento
              </label>
              <Field
                placeholder="00.00.0000"
                className={style.FormField}
                id="Nascimento"
                name="Nascimento"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="Telefone">
                Telefone
              </label>
              <Field
                placeholder="(00) 00000-0000"
                className={style.FormField}
                id="Telefone"
                name="Telefone"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabel} htmlFor="Instagram">
                Instagram
              </label>
              <Field
                placeholder="@seuuser"
                className={style.FormField}
                id="Instagram"
                name="Instagram"
              />
            </div>
            {/* <button>Declaro que li e aceito</button> */}
            <button className={style.FormSubmitButton} type="submit">
              CADASTRE-SE
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
