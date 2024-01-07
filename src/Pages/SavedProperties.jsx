import styled from "@emotion/styled";
import PropertyCard from "../Components/PropertyCards";
import { FooterPrimary } from "../Components/Footer";
import { useEffect, useState } from "react";
import { getFavoritesProperty } from "../Services/ContactFavorite";
import { NavLink } from "react-router-dom";
import { Button2, Button4 } from "../Components/Buttom";

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

const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Favorites = styled.div`
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

const Contacted = styled.div`
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

const NumProperty = styled.p`
  color: var(--Gray, #616161);
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
  text-transform: uppercase;
`;

const ContainerMess = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55vh;
  width: 100%;
  gap: 3rem;
`;

const NoFavoritesMessage = styled.p`
  text-align: center;
  color: #cb4876;
  font-size: 35px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0.15px;
`;

function SavedProperties() {
  const [favoriteProperties, setFavoriteProperties] = useState([]);
  const [showFavorites, setShowFavorites] = useState(true);

  useEffect(() => {
    getFavoritesProperty()
      .then((response) => {
        setFavoriteProperties(response);
      })
      .catch((err) => console.error(err));
  }, []);
  // const filteredFavoriteProperties = favoriteProperties.filter(
  //   (property) => property.property
  // );
  // const filteredFavoriteProperties = favoriteProperties.filter(
  //   (property) => property.favorite === true
  // );
  // console.log(favoriteProperties);
  const filteredContactedProperties = favoriteProperties.filter(
    (property) => property.contacted
  );
  const filteredFavoriteProperties = favoriteProperties.filter(
    (property) => property.favorite === true
  );
  console.log(filteredContactedProperties);
  console.log(filteredFavoriteProperties);

  return (
    <>
      <ContainerPage>
        <Container>
          <RoleContainer>
            <Favorites
              active={showFavorites}
              onClick={() => setShowFavorites(true)}
            >
              favorites
            </Favorites>
            <Contacted
              active={!showFavorites}
              onClick={() => setShowFavorites(false)}
            >
              contacted
            </Contacted>
          </RoleContainer>
          <NumProperty>
            {showFavorites
              ? filteredFavoriteProperties.length
              : filteredContactedProperties.length}{" "}
            Properties found
          </NumProperty>
          {showFavorites ? (
            filteredFavoriteProperties.length > 0 ? (
              <PropertyCard
                data={filteredFavoriteProperties}
                favorites={true}
                cardsPerPage={4}
              />
            ) : (
              <ContainerMess>
                <NoFavoritesMessage>
                  You haven't added any properties to your favorites yet :(
                </NoFavoritesMessage>
                <NavLink
                  style={{ display: "flex", textDecoration: "none" }}
                  to="/find"
                >
                  <Button2 style={{ textTransform: "uppercase" }}>
                    Find a Home
                  </Button2>
                </NavLink>
              </ContainerMess>
            )
          ) : filteredContactedProperties.length > 0 ? (
            <PropertyCard
              data={filteredContactedProperties}
              favorites={true}
              cardsPerPage={4}
            />
          ) : (
            <ContainerMess>
              <NoFavoritesMessage>
                You haven't contacted any properties yet D:
              </NoFavoritesMessage>
              <NavLink
                style={{ display: "flex", textDecoration: "none" }}
                to="/find"
              >
                <Button2 style={{ textTransform: "uppercase" }}>
                  Find a Home
                </Button2>
              </NavLink>
            </ContainerMess>
          )}
        </Container>
      </ContainerPage>
      <FooterPrimary />
    </>
  );
}

export default SavedProperties;
