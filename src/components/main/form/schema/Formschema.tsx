import * as Yup from "yup";
import "yup-phone";

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
  CPF: Yup.number().required("*Campo Obrigatório"),
  Nascimento: Yup.date().required("*Campo Obrigatório"),
  /* .min(new Date(), "Não é possível incluir uma data que já passou.") */
  Telefone: Yup.string()
    .phone("Número de telefone inválido")
    .required("*Campo Obrigatório"),
});
