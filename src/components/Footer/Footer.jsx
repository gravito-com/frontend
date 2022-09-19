/* Modules */
import axios from "axios";
import React, { useState } from "react";
/* import { environment } from "../../environment/env"; */
import FormInput from "../FormInput/FormInput";

/* Styles */
import { FooterStyles } from "./Footer.styles";

export const Footer = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const inputs = [
    {
      id: 1,
      name: "fullname",
      type: "text",
      placeholder: "Nombre",
      errorMessage: "Tienes que escribir un nombre para identificarte",
      label: "Nombre",
      /* pattern: "^[A-Za-z0-9]{3,16}$", */
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Tiene que ser un email valido",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "message",
      type: "textarea",
      placeholder: "Mensaje",
      errorMessage: "Tienes que escribir un nombre para identificarte",
      label: "Mensaje",
    },
    /* {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    }, */
    /* {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    }, */
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onClickSend = async (e) => {
    e.preventDefault();

    console.log("values:", values);
    const axios_res = await axios.post(
      "https://ahh4cvlyhe.execute-api.us-east-1.amazonaws.com/dev/send-email",
      {
        to_email: "6eexx9@gmail.com",
        subject: "Hey, Gravito.me da soluciones para saltar al futuro!",
        message: "Contactanos para adaptarte a la nueva era",
      }
    );

    console.log("axios_res:", axios_res);
  };

  return (
    <FooterStyles>
      <footer className="contact" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form>
                <h3>Contactame</h3>
                <p>
                  Cuentanos mas sobre ti y seguramente podamos aportar mucho mas
                  valor personalizado:
                </p>
                {inputs.map((input) => (
                  <div className="form-group">
                    <FormInput
                      key={input.id}
                      {...input}
                      value={values[input.name]}
                      onChange={onChange}
                      className="form-control"
                    />
                  </div>
                ))}
                <div className="form-group">
                  <button className="btn send-btn" onClick={onClickSend}>
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <div className="copyright">
            &copy; All Right Reserved By
            <a href="http://extibax.com/" target="_blank" rel="noreferrer">
              Extibax inc
            </a>{" "}
            & Licenced by
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noreferrer"
            >
              MIT
            </a>
            Web maked by Juan Bedoya (Extibax)
          </div>
          <div className="up" id="up">
            <i className="fas fa-caret-up"></i>
          </div>
          <ul className="social-media">
            <li className="linkedin-l ink">
              <a
                href="https://www.linkedin.com/in/extibax/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="github-link">
              <a
                href="https://github.com/Extibax"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </FooterStyles>
  );
};
