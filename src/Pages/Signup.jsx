import styled from "@emotion/styled";

import CardSelectRoles from "../Components/CardSelectRoles";
import { FooterPrimary } from "../Components/Footer";
import Header from "../Components/Header";

const Container = styled.div`
  padding-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  background: linear-gradient(to bottom, #f48fb126 50%, #ffffff 50%);
`;

const Signup = () => {
  return (
    <>
      <Container>
        <CardSelectRoles />
      </Container>
      <FooterPrimary />
    </>
  );
};

export default Signup;
