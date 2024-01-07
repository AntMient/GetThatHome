import React from "react";
import Label from "./Label";
import styled from "@emotion/styled";
import { colors } from "../styles";

const Order = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0;
  padding: 0;
  cursor: pointer;

  input {
    display: none; // Ocultar el input nativo
  }

  .custom-radio {
    display: inline-block;
    position: relative;
    width: 50px; // Ancho del botón de radio personalizado
    height: 36px; // Alto del botón de radio personalizado
    border: 1px solid #ddd; // Borde del botón de radio
    border-radius: 8px 0px 0px 8px; // Forma circular del botón de radio
    /* margin-right: 8px; // Espacio entre el botón y el texto */
    background-color: #fff; // Fondo del botón de radio
    transition: background-color 0.3s;

    &::before {
      content: "";
      position: absolute;
      display: none;
      width: 100%; // Tamaño del punto central cuando está seleccionado
      height: 100%;
      background-color: ${colors.pink
        .solid}; // Color del punto central cuando está seleccionado
      border-radius: 8px, 0px, 0px, 8px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  input:checked + .custom-radio::before {
    display: block;
  }

  &:hover .custom-radio {
    background-color: #f3f3f3; // Cambio de color de fondo en el hover
  }
`;

const Radio = ({ label, name, value, onChange }) => {
  return (
    <Order>
      <input
        label={label}
        type="radio"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="custom-radio">{label}</span>
    </Order>
  );
};

export default Radio;
