import styled from "@emotion/styled";
import React from "react";

const Input = styled.input``;

const Upload = ({ id, name, label, value, placeholder, onChange }) => {
  return (
    <Input
      id={id}
      name={name}
      label={label}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type="file"
    />
  );
};

export default Upload;
