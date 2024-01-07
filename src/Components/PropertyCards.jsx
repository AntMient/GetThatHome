import {
  RiMoneyDollarCircleLine,
  RiBuildingLine,
  RiCoinsLine,
  RiArrowRightSLine,
  RiCloseCircleLine,
  RiDeleteBin6Line,
  RiUploadLine,
} from "react-icons/ri";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";
import { TbEdit, TbHeartFilled } from "react-icons/tb";
import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  deleteProperties,
  getPropetiesType,
} from "../Services/ApiPropertyCards";
import DefaultPhoto from "../assets/Photo.png";
import { css } from "@emotion/react";
import { useUserContext } from "../context/UserContext";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: contents;
`;

const Card = styled.div`
  font-family: "Montserrat", sans-serif;
  color: #373737;
  width: 300px;
  height: 360px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.03);
  }
  &::after {
    content: "";
    width: 100%;
    height: 7px;
    background: var(--DarkPink, #bf5f82);
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const InRent = styled.div`
  color: white;
  display: flex;
  border-top-right-radius: 8px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: var(--Pink, #f48fb1);
  position: absolute;
  top: 0;
  right: 0;
`;

const InSale = styled.div`
  color: white;
  display: flex;
  border-top-right-radius: 8px;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  background: #bf5f82;
  position: absolute;
  top: 0;
  right: 0;
`;

const ImageCard = styled.img`
  object-fit: cover;
  height: 200px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Address = styled.span`
  color: var(--DarkGray, #373737);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; 
  letter-spacing: 0.15px;
  text-transform: uppercase;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  flex: 1 0 0;
`;

const DataRow = styled.div`
  color: var(--Gray, #616161);
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span`
  color: var(--DarkGray, #373737);
`;
const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  padding: 0px 32px;
  align-self: stretch;
  gap: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  min-height: 55vh;
`;

const Paginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ButtonPaginator = styled.button`
  display: flex;
  width: 31px;
  height: 31px;
  padding: 5px 10px 6px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--ShallowGray, rgba(97, 97, 97, 0.15));
  background: var(--White, #fff);

  ${(props) =>
    props.active &&
    css`
      border: 1px solid var(--DarkPink, #bf5f82);
      background: rgba(244, 143, 177, 0.15);
    `}
`;

const NextButton = styled.button`
  display: flex;
  width: 31px;
  height: 31px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid var(--ShallowGray, rgba(97, 97, 97, 0.15));
  background: var(--White, #fff);
`;

const OptionLandLord = styled.div`
  display: flex;
  height: 47px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  background: #bf5f82;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`;

const ButtonsLandLo = styled.button`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  color: var(--White, #fff);
  text-align: center;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  background: transparent;
  border: none;
  :hover {
    color: black;
  }
  :active {
    color: #4d323c;
  }
`;

const PropertyCard = ({ data, favorites, cardsPerPage, propertiesUs }) => {
  const [typeProperties, setTypeProperties] = useState([]);

  // const [active, setActive] = useState(true); // Cambia el estado de la propiedad a activo o inactivo [true, false
  const [currentPage, setCurrentPage] = useState(1);
  const { userRole, isAuthenticated } = useUserContext(); // Asegúrate de obtener userRole e isAuthenticated del contexto

  // Agrega un estado local para el hover
  const [isHovered, setIsHovered] = useState(false);

  async function deleteData(id) {
    try {
      deleteProperties(id);
      console.log("Property deleted");
    } catch (error) {
      console.error("Error deleting property", error);
    }
  }


  const totalPages = Math.ceil(data.length / cardsPerPage);

  const handlePageChange = (page) => {
    if (page < 1) {
      setCurrentPage(1);
    } else if (page > totalPages) {
      setCurrentPage(totalPages);
    } else {
      setCurrentPage(page);
    }
  };

  const startCardIndex = (currentPage - 1) * cardsPerPage;
  const endCardIndex = startCardIndex + cardsPerPage;
  const paginatedData = data.slice(startCardIndex, endCardIndex);

  const shouldShowPagination = data.length > cardsPerPage;

  return (
    <>
      <Container>
        <CardContainer>
          {paginatedData &&
            paginatedData.map((property) => (
              <Card
                key={property.id}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {property && (
                  <StyledLink
                    to={`/property/${
                      favorites ? property.property.id : property.id
                    }`}
                  >
                    {property.operation_type_name === "Rent" ? (
                      <InRent>
                        <RiCoinsLine /> <span>For Rental</span>
                      </InRent>
                    ) : (
                      <InSale>
                        <RiCoinsLine /> <span>For Sale</span>
                      </InSale>
                    )}
                    {favorites ? (
                      property.property.images.length > 0 ? (
                        <ImageCard
                          src={property.property.images[0].data}
                          alt={`Property Image 0`}
                        />
                      ) : (
                        <ImageCard
                          src={DefaultPhoto}
                          alt={`Default Property Image`}
                        />
                      )
                    ) : property.images.length > 0 ? (
                      <ImageCard
                        src={property.images[0].data}
                        alt={`Property Image 0`}
                      />
                    ) : (
                      <ImageCard
                        src={DefaultPhoto}
                        alt={`Default Property Image`}
                      />
                    )}
                    <DataContainer>
                      <DataRow>
                        <Icon>
                          <RiMoneyDollarCircleLine
                            style={{ fontSize: "32px", color: "#373737" }}
                          />
                          <Price style={{ fontSize: "24px" }}>
                            {favorites
                              ? property.property.price
                              : property.price}
                          </Price>
                        </Icon>
                        <Icon>
                          <RiBuildingLine style={{ fontSize: "24px" }} />
                          <span>
                            {favorites
                              ? typeProperties.find(
                                  (type) =>
                                    type.id ===
                                    property.property.property_type_id
                                )?.name || "Tipo no disponible"
                              : property.property_type_name ||
                                "Tipo no disponible"}
                          </span>
                        </Icon>
                      </DataRow>
                      <Address>
                        {favorites
                          ? property.property.address
                          : property.address}
                      </Address>
                      <DataRow>
                        <Icon>
                          <BiBed style={{ fontSize: "24px" }} />
                          <span>
                            {favorites
                              ? property.property.bedrooms
                              : property.bedrooms}
                          </span>
                        </Icon>
                        <Icon>
                          <BiBath style={{ fontSize: "24px" }} />
                          <span>
                            {favorites
                              ? property.property.bathrooms
                              : property.bathrooms}
                          </span>
                        </Icon>
                        <Icon>
                          <BiArea style={{ fontSize: "24px" }} />
                          <span>
                            {favorites ? property.property.area : property.area}{" "}
                            m2
                          </span>
                        </Icon>
                        {favorites
                          ? property.property.pets_allowed && (
                              <Icon>
                                <FaPaw style={{ fontSize: "24px" }} />
                              </Icon>
                            )
                          : property.operation_type_name === "Rent" &&
                            property.pets_allowed && (
                              <Icon>
                                <FaPaw style={{ fontSize: "24px" }} />
                              </Icon>
                            )}
                        {favorites && property.favorite === true && (
                          <Icon>
                            <TbHeartFilled
                              style={{ fontSize: "24px", color: "#F48FB1" }}
                            />
                          </Icon>
                        )}
                      </DataRow>
                    </DataContainer>
                  </StyledLink>
                )}
                {/* // property.createdBy === userId.id &&  */}
                {isAuthenticated &&
                  userRole === "Landlord" &&
                  isHovered &&
                  propertiesUs && (
                    //Botones de opciones para Landlord

                    <OptionLandLord>
                      {property.active ? (
                        <NavLink
                          to={`/edit-property/:${property.id}`}
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          <ButtonsLandLo>
                            <TbEdit style={{ width: "24px", height: "24px" }} />
                            {"Edit"}
                          </ButtonsLandLo>
                        </NavLink>
                      ) : (
                        <ButtonsLandLo
                          onClick={() => {
                            property.active = !property.active;
                            console.log(property.active);
                          }}
                        >
                          <RiUploadLine
                            style={{ width: "24px", height: "24px" }}
                          />
                          {"Restore"}
                        </ButtonsLandLo>
                      )}
                      {property.active ? (
                        <ButtonsLandLo
                          onClick={() => {
                            property.active = !property.active;
                            console.log(property.active);
                          }}
                        >
                          <RiCloseCircleLine
                            style={{ width: "24px", height: "24px" }}
                          />
                          {"Close"}
                        </ButtonsLandLo>
                      ) : (
                        <ButtonsLandLo
                          onClick={() => {
                            deleteData(property.id);
                            console.log(property.active);
                          }}
                        >
                          <RiDeleteBin6Line
                            style={{ width: "24px", height: "24px" }}
                          />

                          {"Delete"}
                        </ButtonsLandLo>
                      )}
                    </OptionLandLord>
                  )}
              </Card>
            ))}
        </CardContainer>
        {shouldShowPagination && (
          <Paginator>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <ButtonPaginator
                active={page === currentPage}
                key={page}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </ButtonPaginator>
            ))}
            {currentPage < totalPages && (
              <NextButton onClick={() => handlePageChange(currentPage + 1)}>
                <RiArrowRightSLine style={{ size: 24 }} />
              </NextButton>
            )}
          </Paginator>
        )}
      </Container>
    </>
  );
};

export default PropertyCard;
