import React from "react";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import "./CustomForm.css";
import FormSchema from "../schema/FormSchema";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  date: Date;
  tel: string;
  instagram: string;
}
let data = new Date();

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  date: data,
  tel: "",
  instagram: "",
};

const CustomForm = () => {
  const handleFormikSubmit = (values: IFormikValues) => {
    console.log(values);
  };
  return (
    <div className="form-wrapper">
      <Formik
        onSubmit={handleFormikSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form className="form-items-wrapper">
            <h2 className="form-items-title">PREENCHA O FORMULÁRIO</h2>
            <div className="form-inputs-wrapper">
              <label htmlFor="name" className="form-inputs-label">
                Nome
              </label>
              <Field
                name="name"
                id="name"
                placeholder="Seu nome completo"
                className={errors.name && touched.name && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="name"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-inputs-wrapper">
              <label htmlFor="email" className="form-inputs-label">
                E-mail
              </label>
              <Field
                name="email"
                id="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-inputs-wrapper">
              <label htmlFor="cpf" className="form-inputs-label">
                CPF
              </label>
              <Field
                name="cpf"
                id="cpf"
                placeholder="000 000 000 00"
                className={errors.cpf && touched.cpf && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-inputs-wrapper">
              <label htmlFor="date" className="form-inputs-label">
                Data de Nascimento:
              </label>
              <Field
                name="date"
                id="date"
                placeholder="00 . 00 . 0000"
                className={errors.date && touched.date && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="date"
                className="form-invalid-feedback"
              />
            </div>

            <div className="form-inputs-wrapper">
              <label htmlFor="tel" className="form-inputs-label">
                Telefone:
              </label>
              <Field
                name="tel"
                id="tel"
                placeholder="(+00) 00000 0000"
                className={errors.tel && touched.tel && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="tel"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-inputs-wrapper">
              <label htmlFor="instagram" className="form-inputs-label">
                Instagram
              </label>
              <Field
                name="instagram"
                id="instagram"
                placeholder="@seuuser"
                className={errors.instagram && touched.instagram && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className="form-invalid-feedback"
              />
            </div>
            <div className="form-checkbox">
              <u className="form-checkbox-icon">*</u>
              <u className="form-checkbox-text">Declaro que li e aceito</u>
              <input type="checkbox" className="form-checkbox-checkbox" />
            </div>
            <button type="submit" className="form-button-submit">
              CADASTRE-SE
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { CustomForm };
