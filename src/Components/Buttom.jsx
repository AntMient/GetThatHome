// import { AiOutlineUser } from "react-icons/ai";
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled from "@emotion/styled";
import { colors } from "../styles";

export const Button1 = styled.button`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: #f48fb1;
  border-radius: 16px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bf5f82;
  }
`;

export const Button2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: white;
  border-radius: 16px;
  border: 1px solid #f48fb1;
  color: ${colors.gray["solid"]};
  cursor: pointer;
  &:hover {
    background-color: #f48fb126;
  }
`;

export const Button3 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: #61616126;
  border-radius: 16px;
  color: black;
  border: none;
`;

export const Button4 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 161px;
  height: 40px;
  background-color: white;
  border-radius: 16px;
  color: ${colors.gray["solid"]};
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #f48fb126;
  }
`;

const Buttom = () => {
  return <Button1>SEARCH</Button1>;
};

export default Buttom;
