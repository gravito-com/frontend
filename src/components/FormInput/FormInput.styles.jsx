/* Modules */
import styled from "styled-components";

export const FormInputStyles = styled.div`
  /* .formInput {
    display: flex;
    flex-direction: column;
    width: 280px;
  }

  input {
    padding: 15px;
    margin: 10px 0px;
    border-radius: 5px;
    border: 1px solid gray;
  }

  label {
    font-size: 12px;
    color: gray;
  } */

  .form-control {
    margin-bottom: 15px;
  }

  .form-control:last-child {
    margin-bottom: 0;
  }

  span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }

  input:invalid[focused="true"] {
    border: 1px solid red;
  }

  input:invalid[focused="true"] ~ span {
    display: block;
  }
`;
