import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import githubFot from "../assets/githubFot.svg";
import rubyFot from "../assets/rubyFot.svg";
import reactFot from "../assets/reactFot.svg";

const FooterPrima = styled.footer`
  font-family: "Inter", sans-serif;
  line-height: 20px;
  font-size: 14px;
  background-color: #f5f5f6;
  color: #616161;
  letter-spacing: 0.25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 16px 32px;
  bottom: 0;

  @media (max-width: 990px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem;
    font-size: 18px;
  }
`;

const InfoProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

const Image = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.3rem;
`;

const Members = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-right: 1rem;
`;

const Names = styled.div`
  column-count: 2;
`;

const Love = styled.span`
  color: #bf5f82;
`;

const SourceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const SourceItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const MemberLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  color: #616161;
  @media (max-width: 991px) {
    margin-top: 8px;
  }
`;

export const FooterPrimary = () => {
  const currentYear = new Date().getFullYear();

  const members = [
    { name: "Carlos Saavedra", link: "https://github.com/Carsaavedrapa" },
    { name: "Moisés Mendoza", link: "https://github.com/Moisesmp75" },
    { name: "Samuel Pérez", link: "https://github.com/SamuelPereZz" },
    { name: "Anthony Cordero", link: "https://github.com/AntMient" },
    { name: "Marlon Salazar", link: "https://github.com/marlonsalazarg" },
    { name: "Luis Ríos", link: "https://github.com/RiosLuis10245" },
  ];

  const sourceItems = [
    { image: rubyFot, text: "Ruby on Rails REST API" },
    { image: reactFot, text: "React Responsive SPA" },
  ];

  return (
    <FooterPrima>
      <InfoProject>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
        <p>© {currentYear} - Get That Job</p>
        <p>Codeable - Cohort - 11 Final Project</p>
      </InfoProject>
      <Members>
        <p>
          Build with <Love>❤</Love> by:
        </p>
        <Names>
          {members.map((member, index) => (
            <MemberLink key={index} to={member.link}>
              <Image src={githubFot} alt="Logo" /> {member.name}
            </MemberLink>
          ))}
        </Names>
      </Members>
      <SourceContainer>
        <p>Source code:</p>
        {sourceItems.map((item, index) => (
          <SourceItem key={index}>
            <Image src={item.image} alt="Logo" />
            <span>{item.text}</span>
          </SourceItem>
        ))}
      </SourceContainer>
    </FooterPrima>
  );
};

// -------------------------Footer Secondary--------------------------------

const FooterSecond = styled.footer`
border-top: 1px solid #37373732;
  font-family: "Inter", sans-serif;
  line-height: 20px;
  font-size: 14px;
  background-color: #f5f5f6;
  color: #373737;
  letter-spacing: 0.25px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 16px 31px;
  bottom: 0;
  @media (max-width: 990px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 3rem;
    font-size: 18px;
  }
`;

const SeconContain = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
`;

const SeconSource = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SeconSourceItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const ImageSecon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 0.3rem;
`;

export function FooterSecondary() {
  const currentYear = new Date().getFullYear();

  const sourceItems = [
    { image: rubyFot, text: "Ruby on Rails REST API" },
    { image: reactFot, text: "React Responsive SPA" },
  ];

  return (
    <FooterSecond>
      <InfoProject>
        <p>© {currentYear} - Find That Home</p>
      </InfoProject>
      <SeconContain>
        <p>Source Code</p>
        <SeconSource>
          {sourceItems.map((item, index) => (
            <SeconSourceItem key={index}>
              <ImageSecon src={item.image} alt="Logo" />
              <span>{item.text}</span>
            </SeconSourceItem>
          ))}
        </SeconSource>
      </SeconContain>
      <InfoProject>
        <p>Codeable - Cohort 11 - Final Project</p>
      </InfoProject>
    </FooterSecond>
  );
}
