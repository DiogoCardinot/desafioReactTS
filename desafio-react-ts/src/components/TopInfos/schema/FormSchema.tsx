import * as Yup from "yup";
import { cpf, instagram, phoneNumber } from "../TopInfosContents/Parametros";

export default Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .required("Campo Obrigatório"),
  email: Yup.string().required("Campo Obrigatório").email("E-mail inválido"),
  cpf: Yup.string()
    .required("Campo obrigatório")
    .matches(cpf, "Formato de CPF inválido"),
  date: Yup.string().required("Campo obrigatório"),
  tel: Yup.string()
    .required("Campo Obrigatório")
    .matches(phoneNumber, "Formato de número Inválido"),
  instagram: Yup.string()
    .required("Campo obrigatório")
    .matches(instagram, "Formato de instagram Inválido"),
});
