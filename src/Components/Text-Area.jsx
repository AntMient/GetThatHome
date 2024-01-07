import styled from "@emotion/styled";
import React from "react";
import { colors, typography } from "../styles";
import Label from "./Label";

const TextLarge = styled.textarea`
  border: 1px solid ${colors.pink["solid"]};
  border-radius: 8px;
  padding-bottom: 3px;
  padding-left: 8px;
  outline: none;
  height: 60px;
  max-height: 200px;

  resize: none;
  ${typography.text.body1};
`;

const TextArea = ({ id, name, value, placeholder, label, style, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        height: "auto",
        ...style,
      }}
    >
      {label && <Label htmlFor={id || name} label={label} />}

      <TextLarge
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
