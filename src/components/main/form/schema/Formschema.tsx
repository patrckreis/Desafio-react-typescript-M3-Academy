import * as Yup from "yup";
import "yup-phone";
import { validateCPF, validatePhone } from "validations-br";
import { parse, isDate } from "date-fns";

export default Yup.object().shape({
  Nome: Yup.string()
    .matches(/^[a-zA-Z ]*$/, "*O nome só deve conter letras.")
    .required("*Campo Obrigatório")
    .min(3, "*O nome deve ter pelo menos 3 caracteres")
    .max(50, "Limite de cacateres excedido."),
  Email: Yup.string()
    .required("*Campo Obrigatório")
    .matches(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email inválido."
    ),
  CPF: Yup.string()
    .required("* Campo obrigatório.")
    .test("test-cpf", "* CPF inválido.", (cpf) => {
      if (cpf) {
        return validateCPF(cpf);
      } else {
        return false;
      }
    }),
  Nascimento: Yup.date()
    .required("*Campo Obrigatório")
    .typeError("Data de nascimento inválida"),
  Telefone: Yup.string()
    .required("*Campo Obrigatório")
    .phone(undefined, false, "Número de telefone inválido"),
  Accept: Yup.boolean().oneOf([true], "*"),
});
