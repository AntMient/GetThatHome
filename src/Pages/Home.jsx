import { colors, typography } from "../styles";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProperties } from "../Services/ApiPropertyCards";
import PropertyCard from "../Components/PropertyCards";
import TeamSection from "../Components/TeamSection";
import { FooterSecondary } from "../Components/Footer";
import { Button1 } from "../Components/Buttom";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import AnimatedPaperPlane from "../Components/Bird";

export const kenburnsTop = css`
  @-webkit-keyframes kenburns-top {
    0% {
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    100% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  @keyframes kenburns-top {
    0% {
      color: #f48fb1;
      -webkit-transform: scale(1) translateY(0);
      transform: scale(1) translateY(0);
      -webkit-transform-origin: 50% 16%;
      transform-origin: 50% 16%;
    }
    100% {
      -webkit-transform: scale(1.25) translateY(-15px);
      transform: scale(1.25) translateY(-15px);
      -webkit-transform-origin: top;
      transform-origin: top;
    }
  }

  -webkit-animation: kenburns-top 5s ease-out both;
  animation: kenburns-top 3s ease-out both;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainView = styled.div`
  background-image: url("src/assets/GroupLadingPage.svg");
  min-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -5rem;
`;

const CustomDiv = styled.div`
  margin-top: 1rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

const TitleHome = styled.p`
  color: var(--DarkGray, #373737);
  font-size: ${typography.head.head2};
  font-weight: 300;
  transition: all 0.4s;
  ${kenburnsTop};
`;

const SubtitleHome = styled.p`
  color: var(--Gray, #616161);
  font-size: ${typography.head.head5};
  transition: all 0.4s;
  ${kenburnsTop};
`;

const CustomContainerOption = styled.form`
  margin-top: 3rem;
  border-radius: 10px;
  height: 80px;
  width: 800px;
  display: flex;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  top: 50%;
  left: 50%;
  background-color: white;
  z-index: 3;
`;

const CustomWidthElement = styled.div`
  flex: auto;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 20px;
  p {
    font-size: 10px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
`;

const CustomSelect = styled.select`
  border: none;
  background-color: transparent;
  color: var(--LightGray, #8e8e8e);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const CustomSelectWhere = styled.input`
  border: none;
  background-color: transparent;
  color: var(--LightGray, #8e8e8e);
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.5px;
`;

const DoubleWidthElement = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  padding: 20px;
  p {
    font-size: 10px;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 1.5px;
  }
`;

const StyledBoxSectionCenter = styled.div`
  height: 100hv;
  gap: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 64px 1rem;
`;

const DataApartment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const Data = styled.p`
  ${typography.subtitle.subtitle2}
  color: var(--DarkGray, #373737);
  font-weight: 500;
`;

const TitleApartment = styled.p`
  ${typography.head.head4}
  color: var(--DarkPink, #BF5F82);
  font-weight: 00;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.02);
  }
`;

const Propieties = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

const PinkContainer = styled.div`
  background-color: ${colors.pink.shallowPink};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 64px 10px;
  gap: 32px;
`;

const PinkData = styled.p`
  ${typography.head.head4}
  color: var(--DarkGray, #373737);
  font-weight: 350;
`;

const PinkBUtton = styled(Button1)`
  width: 264px;
  height: 56px;
  color: var(--White, #fff);
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  text-decoration: none;
`;

const StyledLink = styled(Link, NavLink)`
  text-decoration: none;
  color: black;
  display: contents;
`;

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function Home() {
  const navigateTo = useNavigate();
  const [query, setQuery] = useState("");
  const [property, setProperty] = useState("Departamento");
  const [operation, setOperation] = useState("Rent");
  const [data, setData] = useState([]);
  localStorage.removeItem("filteredData");
  const shuffledProperties = shuffleArray(data);
  const propertiesToDisplay = shuffledProperties.slice(0, 3);

  useEffect(() => {
    getProperties()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const filteredData = data.filter(
      (item) => item.property_type_name === property
    );
    const filteredData2 = filteredData.filter(
      (item) => item.operation_type_name === operation
    );
    const filteredData3 = filteredData2.filter((item) =>
      item.address.includes(query)
    );
    console.log(filteredData3);
    console.log(property, operation, query);
    localStorage.setItem("filteredData", JSON.stringify(filteredData3));
    navigateTo("/find");
  }

  const { isAuthenticated, userName } = useUserContext();

  return (
    <>
      <Container>
        <MainView>
          <CustomDiv>
            {isAuthenticated && (
              <SubtitleHome style={{ margin: 0, color: "#d17798" }}>
                Welcome {userName}
              </SubtitleHome>
            )}
            <TitleHome>Meet your new Home</TitleHome>
            <SubtitleHome>
              The easiest way to find where you belong
            </SubtitleHome>
            <AnimatedPaperPlane />
            <CustomContainerOption onSubmit={handleSubmit}>
              {/* Formulario de búsqueda */}
              <CustomWidthElement>
                <p>IM LOOKING FOR</p>
                <CustomSelect
                  name="select"
                  defaultValue="Departamento"
                  onChange={(e) => setProperty(e.target.value)}
                >
                  <option value="Departamento">An Apartment</option>
                  <option value="Casa">House</option>
                </CustomSelect>
              </CustomWidthElement>
              <hr />
              <CustomWidthElement>
                <p>I WANT TO</p>
                <CustomSelect
                  name="select"
                  defaultValue="Rent"
                  onChange={(e) => setOperation(e.target.value)}
                >
                  <option value="Rent">Rent</option>
                  <option value="Sale">Sale</option>
                </CustomSelect>
              </CustomWidthElement>
              <hr />
              <DoubleWidthElement>
                <p>WHERE</p>
                <CustomSelectWhere
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ color: colors.gray.lightGray }}
                  type="text"
                  placeholder="Favorite district"
                />
              </DoubleWidthElement>
              <hr />
              <CustomWidthElement>
                <Button1>Search</Button1>
              </CustomWidthElement>
            </CustomContainerOption>
          </CustomDiv>
        </MainView>
        <StyledBoxSectionCenter>
          <DataApartment>
            <Data>Find an Apartment you Love</Data>
            <TitleApartment>Homes for rent at the best Prices </TitleApartment>
          </DataApartment>
          <Propieties>
            <PropertyCard data={propertiesToDisplay} cardsPerPage={3} />
          </Propieties>
        </StyledBoxSectionCenter>
        <PinkContainer>
          <PinkData>
            Getting someone to rent your apartment has <br />
            never been this easy
          </PinkData>
          <StyledLink to="/signup">
            <PinkBUtton> Create an account now </PinkBUtton>
          </StyledLink>
        </PinkContainer>
        <TeamSection />
        <FooterSecondary />
      </Container>
    </>
  );
}

export default Home;
