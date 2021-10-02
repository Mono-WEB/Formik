import React from "react";
// import styles from "./FormikForm.module.css";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";

const formClass = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: "250px",
  margin: "100px auto",
};

const inp = {
  marginBottom: "5px",
};

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Мининум 2 символа")
    .typeError("Должно быть строкой")
    .required("Обязательно"),
  password: yup
    .string()
    .min(8, "Мининум 8 символов")
    .typeError("Должно быть строкой")
    .required("Обязательно"),
  confirmPassword: yup
    .string()
    .min(8, "Мининум 8 символов")
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Обязательно"),
  email: yup.string().email("Введите верный email").required("Обязательно"),
  confirmEmail: yup
    .string()
    .email("Введите верный email")
    .oneOf([yup.ref("email")], "email не совпадают")
    .required("Обязательно"),
});

function FormikForm({reg}) {


  const formFunc = () => {
    reg(false)
  }

  return (
    <div style={formClass}>
      <Formik
        initialValues={{
          name: "",
          password: "",
          confirmPassword: "",
          email: "",
          confirmEmail: "",
        }}
        validationOnBlur
        onSubmit={(values) => formFunc()}
        validationSchema={validationSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div>
            {}
            <Input
              size="large"
              placeholder="Ваше имя:"
              prefix={<UserOutlined />}
              id="outlined-basic"
              label="Имя"
              variant="outlined"
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              style={inp}
            />
            {touched.name && errors.name && <div>{errors.name}</div>}
            <Input
              size="large"
              placeholder="Введите пароль"
              prefix={<LockOutlined />}
              variant="outlined"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              style={inp}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}
            <Input
              size="large"
              placeholder="Подтвердите пароль"
              prefix={<LockOutlined />}
              variant="outlined"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
              style={inp}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <div>{errors.confirmPassword}</div>
            )}
            <Input
              size="large"
              placeholder="Введите Email"
              prefix={<MailOutlined />}
              variant="medium"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              style={inp}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
            <Input
              size="large"
              placeholder="Подтвердите Email"
              prefix={<MailOutlined />}
              variant="medium"
              type="email"
              name="confirmEmail"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmEmail}
              style={inp}
            />
            {touched.confirmEmail && errors.confirmEmail && (
              <div>{errors.confirmEmail}</div>
            )}
            <Button
              type="primary"
              disabled={!dirty}
              onClick={handleSubmit}
            >
              Регистрация
            </Button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
