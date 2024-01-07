import styled from "@emotion/styled";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import PropertyCard from "../Components/PropertyCards";
import { FooterPrimary } from "../Components/Footer";
import { Button1 } from "../Components/Buttom";
import { useEffect, useState } from "react";
import { getUserProperties } from "../Services/ApiPropertyCards";

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 120px;
  gap: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  gap: 16px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: contents;
`;

const Button = styled(Button1)`
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Active = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding: 0 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? "#f48fb1" : "#bdbdbd")};
  color: ${(props) => (props.active ? "#f48fb1" : "#373737")};
  &:hover {
    border-bottom: 2px solid #f48fb1;
  }
`;

const Closed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding: 0 4px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  cursor: pointer;
  border-bottom: 2px solid ${(props) => (props.active ? "#f48fb1" : "#bdbdbd")};
  color: ${(props) => (props.active ? "#f48fb1" : "#373737")};
  &:hover {
    border-bottom: 2px solid #f48fb1;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 0px 32px;
  row-gap: 3rem;
`;

const NumProperty = styled.p`
  color: var(--Gray, #616161);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
`;

function MyPropertiesPage() {
  const [myProperties, setMyProperties] = useState([]);
  const [showActives, setShowActives] = useState(true);

  useEffect(() => {
    getUserProperties()
      .then((response) => {
        setMyProperties(response);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(myProperties);
  const filteredActives = myProperties.filter(
    (property) => property.active === true
  );
  const filteredClosed = myProperties.filter(
    (property) => property.active === false
  );
  return (
    <>
      <ContainerPage>
        <Container>
          <StyledLink to="/create-property">
            <Button>
              <AiOutlinePlusCircle /> new property
            </Button>
          </StyledLink>
          <RoleContainer>
            <Active active={showActives} onClick={() => setShowActives(true)}>
              Active
            </Active>
            <Closed active={!showActives} onClick={() => setShowActives(false)}>
              Closed
            </Closed>
          </RoleContainer>
          <NumProperty>
            {showActives ? filteredActives.length : filteredClosed.length}{" "}
            Properties found
          </NumProperty>
          <CardContainer>
            {showActives ? (
              <PropertyCard
                data={filteredActives}
                cardsPerPage={4}
                propertiesUs={true}
              />
            ) : (
              <PropertyCard
                data={filteredClosed}
                cardsPerPage={4}
                propertiesUs={true}
              />
            )}
          </CardContainer>
        </Container>
      </ContainerPage>
      <FooterPrimary />
    </>
  );
}

export default MyPropertiesPage;
