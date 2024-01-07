import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { colors, typography } from '../styles';
import { RiLinkedinBoxLine } from 'react-icons/ri';
import { BsGithub } from 'react-icons/bs';
import { kenburnsTop } from '../Pages/Home';

const teamMembers = [
  {
    name: 'Carlos Saavedra',
    imgSrc:
      'https://media.licdn.com/dms/image/D4E03AQHj-AuzrJ2z0Q/profile-displayphoto-shrink_800_800/0/1693509353617?e=1702512000&v=beta&t=llwMCF6JslJcfGs9snYZB7_mlscjZrTijlZgG_r1EOA',
    github: 'https://github.com/Carsaavedrapa',
    linkedin: 'https://www.linkedin.com/in/carsaavedrapa/',
  },
  {
    name: 'Moises More',
    imgSrc:
      'https://www.girardot-cundinamarca.gov.co/NuestraAlcaldia/Dependencias/Funcionarios/sin%20foto1.jpg',
    github: 'https://github.com/Moisesmp75',
    linkedin: 'https://www.linkedin.com/in/moises-more-perez-8a8aa7294/',
  },
  {
    name: 'Anthony Cordero',
    imgSrc:
      'https://media.licdn.com/dms/image/D4E03AQHEaiBB-i2xiA/profile-displayphoto-shrink_800_800/0/1680116578617?e=1702512000&v=beta&t=1nm_nmcOOSmp040HQR5WX6LvG5s9JCqwPZGM7XZJsxc',
    github: 'https://github.com/AntMient',
    linkedin: 'https://www.linkedin.com/in/anthonycorderoh/',
  },
  {
    name: 'Marlon Salazar',
    imgSrc:
      'https://media.licdn.com/dms/image/D4D03AQEmGituzyNq-g/profile-displayphoto-shrink_800_800/0/1692120527903?e=1702512000&v=beta&t=HLgxk-nIk_zXaSDMWLKyqhCM-lBn97NSoYVE-Cf1vgU',
    github: 'https://github.com/marlonsalazarg',
    linkedin: 'https://www.linkedin.com/in/marlonsalazarg/',
  },
  {
    name: 'Samuel Pérez',
    imgSrc:
      'https://media.licdn.com/dms/image/D4D03AQFHDcJ7b0vJWA/profile-displayphoto-shrink_800_800/0/1692111768989?e=1702512000&v=beta&t=sMIudseoaj5Q2zAaVF4R8NPbiiBoW4cpSjseF5J9X3Y',
    github: 'https://github.com/SamuelPereZz',
    linkedin: 'https://www.linkedin.com/in/fernando-samuel-perez-r/',
  },
  {
    name: 'Luis Ríos',
    imgSrc:
      'https://media.licdn.com/dms/image/D4E03AQG5p2vZnVdTWg/profile-displayphoto-shrink_800_800/0/1693313491508?e=1703116800&v=beta&t=lNbbzS03qn1fcNFXuDsiTawF7ry_oPb0PTnjVQTabXE',
    github: 'https://github.com/RiosLuis10245',
    linkedin: 'https://www.linkedin.com/in/luis-ri0s/',
  },
];


const MembersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 1rem;
  gap: 26px;
`;

const MemberTitle = styled.p`
  color: ${colors.pink.darkPink};
  ${typography.head.head3}
  font-weight: 400;
`;

const MembersPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
`;

const MembersNames = styled.p`
  color: #000;
  ${typography.head.head5}
  font-weight: 400;
  text-transform: capitalize;
`;

const StyledLink = styled(Link, NavLink)`
  text-decoration: none;
  color: black;
  display: contents;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 30;
  column-gap: 2rem;
`;

const StyledProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 16px;
  padding: 1rem;
  img {
    width: 180px;
    height: 180px;
    border-radius: 100%;
    transition: all 0.4s;
    &:hover {
      transform: scale(1.05);
      opacity: 0.8;
    }
  }
`;

function TeamSection() {
  return (
    <MembersContainer>
      <MemberTitle>Meet the Team</MemberTitle>
      <MembersPhoto>
        {teamMembers.map((member, index) => (
          <StyledProfileCard key={index}>
            <img src={member.imgSrc} alt={member.name} className={kenburnsTop} />
            <MembersNames>{member.name}</MembersNames>
            <IconsContainer>
              <StyledLink to={member.github}>
                <BsGithub size={26} style={{ color: '#171515' }} />
              </StyledLink>
              <StyledLink to={member.linkedin}>
                <RiLinkedinBoxLine size={30} style={{ color: '#0e76a8' }} />
              </StyledLink>
            </IconsContainer>
          </StyledProfileCard>
        ))}
      </MembersPhoto>
    </MembersContainer>
  );
}

export default TeamSection;
