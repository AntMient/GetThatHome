import styled from "@emotion/styled";
import React from "react";
import { colors, typography } from "../styles";

const Sub = styled.div`
  ${colors.gray.solid};
  ${typography.overline.overline1};
  font-size: 12px;
  margin-bottom: 4px;
`;
const Subtittle = ({ subtittle }) => {
  return <Sub>{subtittle}</Sub>;
};

export default Subtittle;
