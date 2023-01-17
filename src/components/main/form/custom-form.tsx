import style from "./custom-form.module.scss";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import Formschema from "./schema/Formschema";
import { useState } from "react";

const initialValues = {
  Nome: "",
  Email: "",
  CPF: "",
  Nascimento: "",
  Telefone: "",
  Instagram: "",
  Accept: false,
};

interface IformikValues {
  Nome: string;
  Email: string;
  CPF: string;
  Nascimento: string;
  Telefone: string;
  Instagram: string;
  Accept: boolean;
}

export function CustomForm() {
  const [success, setSuccess] = useState(false);
  const HandleFormikSubmit = (values: IformikValues) => {
    setSuccess(true);
    console.log(values);
  };
  return (
    <div className={style.CustomForm}>
      <div className={style.CustomFormContainer}>
        <h2>Preencha o formulário</h2>
        <Formik
          validationSchema={Formschema}
          onSubmit={(values, { resetForm }) => {
            HandleFormikSubmit(values);
            resetForm();
          }}
          initialValues={initialValues}
        >
          <Form>
            <div className={style.FormCol}>
              <div className={style.FormColLabel}>
                <label className={style.FormLabel} htmlFor="Nome">
                  Nome
                </label>
                <ErrorMessage
                  component="span"
                  name="Nome"
                  className={style.formInvalidFeedback}
                />
              </div>
              <Field
                placeholder="Seu nome completo"
                className={style.FormField}
                id="Nome"
                name="Nome"
              />
            </div>
            <div className={style.FormCol}>
              <div className={style.FormColLabel}>
                <label className={style.FormLabel} htmlFor="Email">
                  E-mail
                </label>
                <ErrorMessage
                  component="span"
                  name="Email"
                  className={style.formInvalidFeedback}
                />
              </div>
              <Field
                placeholder="Seu e-mail"
                className={style.FormField}
                id="Email"
                name="Email"
                type="Email"
              />
            </div>
            <div className={style.FormCol}>
              <div className={style.FormColLabel}>
                <label className={style.FormLabel} htmlFor="CPF">
                  CPF
                </label>
                <ErrorMessage
                  component="span"
                  name="CPF"
                  className={style.formInvalidFeedback}
                />
              </div>
              <Field
                placeholder="000.000.000-00"
                className={style.FormField}
                id="CPF"
                name="CPF"
              />
            </div>
            <div className={style.FormCol}>
              <div className={style.FormColLabel}>
                <label className={style.FormLabel} htmlFor="Nascimento">
                  Data de Nascimento
                </label>
                <ErrorMessage
                  component="span"
                  name="Nascimento"
                  className={style.formInvalidFeedback}
                />
              </div>

              <Field
                placeholder="00.00.0000"
                className={style.FormField}
                id="Nascimento"
                name="Nascimento"
              />
            </div>
            <div className={style.FormCol}>
              <div className={style.FormColLabel}>
                <label className={style.FormLabel} htmlFor="Telefone">
                  Telefone
                </label>
                <ErrorMessage
                  component="span"
                  name="Telefone"
                  className={style.formInvalidFeedback}
                />
              </div>
              <Field
                placeholder="(00) 00000-0000"
                className={style.FormField}
                id="Telefone"
                name="Telefone"
              />
            </div>
            <div className={style.FormCol}>
              <label className={style.FormLabelInsta} htmlFor="Instagram">
                Instagram
              </label>
              <Field
                placeholder="@seuuser"
                className={style.FormField}
                id="Instagram"
                name="Instagram"
              />
            </div>
            <div className={style.formInvalidFeedback}>
              <ErrorMessage
                component="span"
                name="Accept"
                className={style.formInvalidSpan}
              />
              <label>Declaro que li e aceito</label>
              <Field id="Accept" name="Accept" type="checkbox" />
            </div>
            <button className={style.FormSubmitButton} type="submit">
              CADASTRE-SE
            </button>
            {success && (
              <span className={style.successSubmit}>
                * Formulário enviado com sucesso.
              </span>
            )}
          </Form>
        </Formik>
      </div>
    </div>
  );
}
