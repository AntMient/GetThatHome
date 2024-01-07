import PropertyCard from "../Components/PropertyCards";
import styled from "@emotion/styled";
import { getProperties } from "../Services/ApiPropertyCards";
import { useEffect, useState } from "react";
import Checksito from "../Components/Check";
import { FooterPrimary } from "../Components/Footer";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const ContainerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
  flex-direction: column;
`;

const Find = () => {
  let results = JSON.parse(localStorage.getItem("filteredData"));
  const [AllProperties, setAllProperties] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [FILTERS, setFILTERS] = useState({
    property_type_name: "",
    bathrooms: "1",
    bedrooms: "1",
  });

  useEffect(() => {
    getProperties()
      .then((response) => {
        setAllProperties(response);
      })
      .catch((err) => console.error(err));
  }, []);

  function handleChange(e) {
    setFILTERS({
      ...FILTERS,
      [e.target.name]: e.target.value,
    });
  }

  console.log(FILTERS);

  function filterData() {
    const filteredData = AllProperties.filter((property) => {
      const isTypeMatch =
        property.property_type_name === FILTERS.property_type_name;
      const isBathMatch = property.bathrooms >= FILTERS.bathrooms;
      const isBedMatch = property.bedrooms >= FILTERS.bedrooms;

      // Nuevo filtro para el rango de precios
      const isPriceInRange =
        (!FILTERS.minPrice || property.price >= FILTERS.minPrice) &&
        (!FILTERS.maxPrice || property.price <= FILTERS.maxPrice);

      return isTypeMatch && isBathMatch && isBedMatch && isPriceInRange;
    });

    setFilteredData(filteredData);
  }

  return (
    <>
      <ContainerBox>
        <Checksito
          label="Casa"
          type="radio"
          key="Casa"
          name="property_type_name"
          value="Casa"
          onChange={handleChange}
        >
          Casa
        </Checksito>
        <Checksito
          label="Departamento"
          type="radio"
          key="Departamento"
          name="property_type_name"
          value="Departamento"
          onChange={handleChange}
        >
          Departamento
        </Checksito>
        <button onClick={filterData}>Filtrar</button>

        <p>bath</p>
        <button onClick={filterData}>Filtrar</button>
        <select
          name="bath"
          defaultValue="any"
          onChange={(e) =>
            setFILTERS({ ...FILTERS, bathrooms: e.target.value })
          }
        >
          <option value="1">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
        <p>----</p>

        <p>bed</p>
        <button onClick={filterData}>Filtrar</button>

        <select
          name="bed"
          defaultValue="any"
          onChange={(e) => setFILTERS({ ...FILTERS, bedrooms: e.target.value })}
        >
          <option value="1">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>

        <p>----</p>
        <p>----</p>

        <p>Precio mínimo:</p>
        <input
          type="number"
          name="minPrice"
          value={FILTERS.minPrice}
          onChange={(e) => setFILTERS({ ...FILTERS, minPrice: e.target.value })}
        />

        <p>Precio máximo:</p>
        <input
          type="number"
          name="maxPrice"
          value={FILTERS.maxPrice}
          onChange={(e) => setFILTERS({ ...FILTERS, maxPrice: e.target.value })}
        />
        <button onClick={filterData}>Filtrar</button>

        <Container>
          <PropertyCard
            data={filteredData.length > 0 ? filteredData : AllProperties}
            cardsPerPage={5}
          />
        </Container>
      </ContainerBox>
      <FooterPrimary />
    </>
  );
};

export default Find;
