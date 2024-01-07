import PropertyCard from "../Components/PropertyCards";
import styled from "@emotion/styled";
import { getProperties } from "../Services/ApiPropertyCards";
import { useEffect, useState } from "react";
import { FooterPrimary } from "../Components/Footer";
import { RiSearchLine } from "react-icons/ri";
import { typography } from "../styles";
import Filters from "./Filters/Filters";

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

const FilterContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputWithIcon = styled.div`
  display: flex;
  width: 240px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Pink, #f48fb1);
  background: var(--White, #fff);
  :hover {
    border: 1px solid var(--DarkPink, #bf5f82);
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 240px;
  outline: none;
  background-color: transparent;
`;

const SearchIcon = styled(RiSearchLine)`
  margin: 0 5px;
  color: #555;
  font-size: 23px;
`;

const ContainerModals = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PropertiesNum = styled.p`
  color: var(--Gray, #616161);
  ${typography.head.head6}
  font-weight: 450;
  letter-spacing: 0.15px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PossibleResponsesList = styled.ul`
  position: absolute;
  top: 30px; 
  left: 0; 
  width: 240px;
  max-height: auto; 
  overflow-y: auto; 
  padding: 4px 0;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid var(--DarkPink, #bf5f82);
  background: var(--White, #fff);
  z-index: 1;
`;

const PossibleResponseItem = styled.li`
  display: flex;
  padding: 8px;
  gap: 8px;
  align-self: stretch;
  color: var(--Gray, #616161);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-transform: capitalize;
  margin: 0;

  :hover {
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
`;

const FindTest = () => {
  const  [searchQuery, setSearchQuery] = useState("");
  const [AllProperties, setAllProperties] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [isInputFocused, setInputFocused] = useState(false);
  
  

  useEffect(() => {
    getProperties()
      .then((response) => {
        setAllProperties(response);
        setFilteredProperties(response);
      })
      .catch((err) => console.error(err));
  }, []);

  const applyFilters = (filters = {}) => {
    const {
      minPrice,
      maxPrice,
      propertyType,
      minArea,
      maxArea,
      petsAllowed,
      operation_type,
    } = filters;

    const filteredResults = AllProperties.filter((property) => {
      return (
        property.address.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!minPrice || property.price >= minPrice) &&
        (!maxPrice || property.price <= maxPrice) &&
        (!propertyType || property.property_type_name === propertyType) &&
        (!minArea || property.area >= minArea) &&
        (!maxArea || property.area <= maxArea) &&
        (!petsAllowed || property.pets_allowed === true) &&
        (!operation_type ||
          operation_type === "Both" ||
          (operation_type === "Sale" &&
            property.operation_type_name === "Sale") ||
          (operation_type === "Rent" &&
            property.operation_type_name === "Rent"))
      );
    });

    setFilteredData(filteredResults);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
    const filteredResults = AllProperties.filter((property) =>
      property.address.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredProperties(filteredResults);
    applyFilters();
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <>
      <ContainerPage>
        <Container>
          <FilterContainer>
            <SearchContainer>
              <InputWithIcon>
                <SearchIcon />
                <StyledInput
                  type="search"
                  placeholder="Search by address"
                  value={searchQuery}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </InputWithIcon>
              {isInputFocused && (
                <PossibleResponsesList>
                  {filteredProperties.slice(0, 3).map((property, index) => (
                    <PossibleResponseItem key={index}>
                      {property.address}
                    </PossibleResponseItem>
                  ))}
                </PossibleResponsesList>
              )}
            </SearchContainer>
            <ContainerModals>
              <Filters applyFilters={applyFilters} />
            </ContainerModals>
          </FilterContainer>
          <PropertiesNum>{filteredData.length} Properties found</PropertiesNum>
          <PropertyCard
            data={filteredData.length > 0 ? filteredData : AllProperties}
            cardsPerPage={9}
          />
        </Container>
      </ContainerPage>
      <FooterPrimary />
    </>
  );
};

export default FindTest;
