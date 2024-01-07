// CardSelectRoles.js
import styled from "@emotion/styled";
import { typography } from "../styles";
import flow_icon1 from "../assets/signup_flow_icon1.svg";
import flow_icon2 from "../assets/signup_flow_icon2.svg";
import CreateAccountModal from "./CreateAccountModal";
import { useState } from "react";

const TitleH5 = styled.p`
  ${typography.head.head5}
`;

const ContentContainer = styled.div`
  opacity: ${(props) => (props.isModalVisible ? 0 : 1)};
  pointer-events: ${(props) => (props.isModalVisible ? "none" : "auto")};
  transition: opacity 0.3s ease;
`;

const CardsDiv = styled.div`
  margin-top: 57px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 54px;
`;

const TitleH2 = styled.p`
  ${typography.head.head2}
`;

const TitleH6 = styled.p`
  ${typography.head.head6}
`;

const Card = styled.div`
  width: 280px;
  height: 274px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 16px 20px 16px 20px;
  box-shadow: 0px 5px 10px 0px #00000033;
  gap: 8px;
  cursor: pointer;
`;

const CardSelectRoles = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (role) => {
    setSelectedRole(role);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div>
        <TitleH5 style={{ textAlign: "center" }}>
          Selecciona el perfil con el que te identificas
        </TitleH5>
        <TitleH2 style={{ fontWeight: "300" }}>Que estas buscando?</TitleH2>
      </div>
      <CardsDiv>
        <Card onClick={() => showModal(1)}>
          <img src={flow_icon1} alt="lanlord" />
          <TitleH6>Landlord</TitleH6>
          <p>You want to rent or sell a home</p>
        </Card>
        <Card onClick={() => showModal(2)}>
          <img src={flow_icon2} alt="Home Seeker" />
          <TitleH6>Home seeker</TitleH6>
          <p>You want to find a home</p>
        </Card>
      </CardsDiv>

      {isModalVisible && (
        <CreateAccountModal onClose={hideModal} selectedRole={selectedRole} />
      )}
    </>
  );
};

export default CardSelectRoles;
