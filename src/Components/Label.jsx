import { colors, typography } from "../styles";
import styled from "@emotion/styled";
const Tittle = styled.label`
  ${colors.gray.solid};
  ${typography.overline.overline1};
  font-size: 12px;
`;
const Label = ({ label, style }) => {
  return <Tittle style={{ ...style }}>{label}</Tittle>;
};

export default Label;
