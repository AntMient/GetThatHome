import React, { useState } from "react";
import styled from "@emotion/styled";
import { colors, typography } from "../styles";
import { Button1 } from "./Buttom";
import { RiHeartLine, RiUserReceived2Line } from "react-icons/ri";
import Login from "./Login";
import { useUserContext } from "../context/UserContext";

const Container = styled.div`
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 226px;
  height: 184px;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
  background: var(--White, #fff);
  box-shadow: ${colors.shadow.large};
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CenteredModal = styled.div`
  position: fixed;
  top: 10%;
  left: 0%;
  z-index: 1001;
`;

const Content = styled.p`
  ${typography.text.body1}
  padding: 5px;
  margin: 0;
`;

const Button = styled(Button1)`
  width: 96px;
  height: 32px;
  @media (max-width: 991px) {
    margin-top: 8px;
  }
`;

const ContactInfo = styled.p`
  color: var(--DarkGray, #373737);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  margin-bottom: 16px;
`;

const TitleInfo = styled.p`
  color: var(--DarkPink, #bf5f82);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
`;

const Info = styled.p`
  color: var(--DarkGray, #373737);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  margin-bottom: 10px;
`;

function CardProperty() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [displayContactInfo, setDisplayContactInfo] = useState(false); // Nuevo estado
  const { userRole, isAuthenticated } = useUserContext();
  const { favorite, setFavorite } = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleContact = () => {
    setDisplayContactInfo(true);
  };
  const handleFavorite = () => {
    setFavorite(true);
  };

  return (
    <Container>
      <Card>
        {displayContactInfo ? (
          <div>
            <ContactInfo>Contact information</ContactInfo>
            <TitleInfo>Email</TitleInfo>
            <Info>dude@greathouse.com</Info>
            <TitleInfo>Phone</TitleInfo>
            <Info>99999999</Info>
          </div>
        ) : isAuthenticated && userRole === "Home seeker" ? (
          <>
            <Button1 onClick={handleContact}>Contact Advertiser</Button1>
            <RiHeartLine onClick={handleFavorite} />
            <Content>Add to favorites</Content>
          </>
        ) : (
          <>
            <Content>Log in or Join to contact the advertiser</Content>
            <Button onClick={openLoginModal}>
              <RiUserReceived2Line />
              Login
            </Button>
            {isLoginModalOpen && (
              <CenteredModal>
                <Login closeLoginModal={closeLoginModal} />
              </CenteredModal>
            )}
          </>
        )}
      </Card>
    </Container>
  );
}

export default CardProperty;
