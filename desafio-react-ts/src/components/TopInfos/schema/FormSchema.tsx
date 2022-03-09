import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .required("Campo Obrigatório"),
  email: Yup.string().required("Campo Obrigatório").email("E-mail inválido"),
  cpf: Yup.string().required("Campo obrigatório"),
  date: Yup.string().required("Campo obrigatório"),
  tel: Yup.string().required("Campo obrigatório"),
  instagram: Yup.string().required("Campo obrigatório"),
});
