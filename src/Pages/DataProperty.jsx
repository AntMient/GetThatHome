import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMoneyDollarCircleLine,
  RiUserReceived2Line,
} from "react-icons/ri";
import { typography } from "../styles/typography";
import { colors } from "../styles/colors";
import { BiArea, BiBath, BiBed, BiEdit } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import CardPropiety from "../Components/Contact-FavoriteCard";
import { showCardPropertiesId } from "../Services/ApiPropertyCards";
import { NavLink, useParams } from "react-router-dom";
import Map from "../Components/Map";
import { FooterPrimary } from "../Components/Footer";
import Login from "../Components/Login";
import { useUserContext } from "../context/UserContext";
import { Button1 } from "../Components/Buttom";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  padding: 2rem 10rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const PropertyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
  flex: 1;
`;

const CardContactFavoriteContainer = styled.div`
  flex: 0;
  max-width: 50%;
  margin-left: 4rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 512px;
  max-height: 384px;
  background-color: #c6c4c4;
`;

const ImgButton = styled.button`
  background: none;
  border: none;
`;

const ContainerData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddresCountry = styled.div`
  display: flex;
  align-items: center;
`;

const Data1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PriceMaintan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Data2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Addres = styled.p`
  ${typography.head.head4}
  ${colors.gray.darkGray}
`;

const Price = styled.p`
  font-size: 36px;
  ${colors.gray.solid}
  text-align: center;
  display: flex;
  line-height: 40px;
  text-align: center;
`;

const Maintanance = styled.p`
  ${typography.head.head6}
  ${colors.gray.solid}
`;

const Country = styled.p`
  ${typography.text.body1}
  ${colors.gray.solid}
`;

const Characteristics = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.pink.darkPink};
  border-bottom: 1px solid ${colors.pink.darkPink};
  padding: 0.5rem 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const Span = styled.span`
  ${typography.head.head5}
  ${colors.gray.lightGray}
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const About = styled.p`
  ${typography.head.head6}
  font-weight: 500;
  color: #bf5f82;
`;

const Descriptions = styled.p`
  ${typography.text.body1}
  ${colors.gray.solid}
  white-space: pre-wrap;
`;

const EditContainer = styled.div`
  display: flex;
  padding: 32px 16px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function InfoProperty() {
  let { id } = useParams();
  const [data, setData] = useState({ images: [] });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    showCardPropertiesId(id)
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
  };

  const currentImage = data.images[currentImageIndex];
  const { userRole, isAuthenticated } = useUserContext();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <>
      <Container>
        <PropertyContainer>
          {isLoginModalOpen && <Login onClose={closeLoginModal} />}
          <ImageContainer>
            <ImgButton onClick={handlePrev}>
              <RiArrowLeftSLine style={{ fontSize: "24px" }} />
            </ImgButton>
            <Image
              src={data.images[0]?.data || currentImage}
              alt={`Image ${currentImageIndex + 1}`}
            />
            <ImgButton onClick={handleNext}>
              <RiArrowRightSLine style={{ fontSize: "24px" }} />
            </ImgButton>
          </ImageContainer>

          <ContainerData>
            <AddresCountry>
              <Data1>
                <Addres>{data.address}</Addres>
                <Country>{data.country}</Country>
              </Data1>
            </AddresCountry>
            <PriceMaintan>
              <Data2>
                <Price>
                  <RiMoneyDollarCircleLine size={40} />
                  {data.price}
                </Price>
                <Maintanance>+ {data.maintenance}</Maintanance>
              </Data2>
            </PriceMaintan>
          </ContainerData>
          <Characteristics>
            <Icon>
              <BiBed size={24} />
              <Span>{data.bedrooms} bedrooms</Span>
            </Icon>
            <Icon>
              <BiBath size={24} />
              <Span>{data.bathrooms} bathrooms</Span>
            </Icon>
            <Icon>
              <BiArea size={24} />
              <Span>{data.area} m2</Span>
            </Icon>
            {data.operation_type_name === "Rent" && data.pets_allowed && (
              <Icon>
                <FaPaw size={24} />
                <Span>Pets allowed</Span>
              </Icon>
            )}
          </Characteristics>
          <About>About this property</About>
          <Descriptions>{data.description}</Descriptions>
          <About>Location</About>
          <Descriptions>{data.address}</Descriptions>
          {data.latitude && data.longitude && (
            <Map
              lat={data.latitude}
              lng={data.longitude}
              address={data.address}
              style={{
                zIndex: 1,
              }}
            />
          )}
        </PropertyContainer>
        <CardContactFavoriteContainer>
          {isAuthenticated && userRole === "Landlord" ? (
            <EditContainer>
              <NavLink
                to={`/edit-property/:${id}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button1>
                  <BiEdit />
                  Edit property
                </Button1>
              </NavLink>
            </EditContainer>
          ) : (
            <CardPropiety />
          )}
        </CardContactFavoriteContainer>
      </Container>
      <FooterPrimary />
    </>
  );
}

export default InfoProperty;
