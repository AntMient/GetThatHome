import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import Label from "./Label";
import { FiSearch } from "react-icons/fi";
import { LuCircleDollarSign } from "react-icons/lu";
// import React, { useState } from "react";
const Entrada = styled.input`
  border: 1px solid ${colors.pink["solid"]};
  border-radius: 8px;
  padding-bottom: 3px;
  padding-left: 8px;

  outline: none;
  height: 36px;
  ${typography.text.body1};
`;

const Input = ({
  icon = "",
  id,
  name,
  type,
  value,
  placeholder,
  label,
  style,
  min,
  onChange,
  onBlur,
}) => {
  const handlePadding = icon ? "36px" : "8px";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {label && <Label htmlFor={id || name} label={label} />}
      {icon == "search" && (
        <FiSearch
          style={{
            position: "absolute",
            marginTop: "1.70rem",
            marginLeft: "9.67px",
            color: `${colors.gray["lightGray"]}`,
            width: "20px",
            height: "20px",
          }}
        />
      )}
      {icon == "amount" && (
        <LuCircleDollarSign
          style={{
            position: "absolute",
            marginTop: "1.70rem",
            marginLeft: "9.67px",
            color: `${colors.gray["lightGray"]}`,
            width: "20px",
            height: "20px",
          }}
        />
      )}
      <Entrada
        min={min}
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        style={{ paddingLeft: handlePadding }}
      />
    </div>
  );
};

export default Input;
