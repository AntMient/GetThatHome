import { useEffect, useState } from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import { RiArrowDownSLine, RiMoneyDollarCircleFill } from "react-icons/ri";
import { Button1 } from "../../Components/Buttom";
import Checksito from "../../Components/Check";
import ButtonOption from "../../Components/ButtonOption";

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 8px;
`;

const InputsPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;

const InputWithIcon = styled.div`
  display: flex;
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
  width: 102px;
  height: 36px;
  outline: none;
  background-color: transparent;
  text-transform: lowercase;
  margin-left: 5px;
`;

const Span = styled.span`
  font-size: 3rem;
  color: #8e8e8e;
  margin-bottom: 1rem;
`;

const SearchIcon = styled(RiMoneyDollarCircleFill)`
  margin-left: 5px;
  color: #8e8e8e;
  font-size: 20px;
`;

const ContenedorBotones = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ButtonConainet = styled.div`
  display: flex;
  flex-direction: column;
  right: 2rem;
`;

const Boton = styled(Button1)`
  cursor: pointer;
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const MoreIcon = styled(RiArrowDownSLine)`
  margin-top: 2px;
  font-size: 23px;
`;

const InputsProperty = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
`;

const MoreContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputsMore = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin: 8px 0;
`;

const FilterTitle = styled.p`
  color: var(--Gray, #616161);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Price = styled(Button1)`
  border-radius: 16px;
  width: 78px;
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Propertype = styled(Button1)`
  border-radius: 16px;
  width: 161px;
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Beds = styled(Button1)`
  border-radius: 16px;
  width: 146px;
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const More = styled(Button1)`
  border-radius: 16px;
  width: 109px;
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const RentOSale = styled.button`
  margin-left: 10rem;
  display: flex;
  width: 185px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--Pink, #f48fb1);
  background: var(--White, #fff);
  color: var(--DarkGray, #373737);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
  :hover {
    border: 1px solid var(--DarkPink, #bf5f82);
    background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
  }
`;

const InputContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
  color: #8e8e8e;
`;

const CheckContain = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--Gray, #616161);
  text-transform: capitalize;
  width: 187px;
  height: 118px;
  padding: 4px 0px;
  flex-shrink: 0;

  input[type="checkbox"],
  label {
    display: flex;
    padding: 8px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    :hover {
      background: var(--ShallowPink, rgba(244, 143, 177, 0.15));
    }
  }
`;

const InpBethBath = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const LabelBethBath = styled.label`
  color: var(--Gray, #616161);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Done = styled(Boton)`
  width: 60px;
  height: 32px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background: var(--Pink, #f48fb1);
  color: var(--White, #fff);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
`;

const Filters = ({ applyFilters }) => {
  const [filterState, setFilterState] = useState({
    estadoModal1: false,
    estadoModal2: false,
    estadoModal3: false,
    estadoModal4: false,
    estadoModal5: false,
    filters: {
      minPrice: "",
      maxPrice: "",
      propertyType: "",
      minArea: "",
      maxArea: "",
      petsAllowed: false,
      operation_type: "",
      beds: "Any",
      baths: "Any",
    },
  });

  const {
    estadoModal1,
    estadoModal2,
    estadoModal3,
    estadoModal4,
    estadoModal5,
    filters,
  } = filterState;

  const toggleModal = (modalName) => {
    setFilterState((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const handleFilterChange = (filterName, filterValue) => {
    setFilterState((prevState) => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        [filterName]: filterValue === "" ? null : filterValue,
      },
    }));
  };

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  return (
    <div>
      <ContenedorBotones>
        <Price onClick={() => toggleModal("estadoModal1")}>Price</Price>
        <Propertype onClick={() => toggleModal("estadoModal2")}>
          Property type
        </Propertype>
        <Beds onClick={() => toggleModal("estadoModal3")}>Beds & baths</Beds>
        <More onClick={() => toggleModal("estadoModal4")}>
          More <MoreIcon />
        </More>
        <RentOSale onClick={() => toggleModal("estadoModal5")}>
          Buying & Renting <MoreIcon />
        </RentOSale>
      </ContenedorBotones>

      {/* Modal Price Range */}
      <Modal
        estado={estadoModal1}
        cambiarEstado={() => toggleModal("estadoModal1")}
        titulo="Price Range"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"8px"}
      >
        <Contenido>
          <InputContain>
            <InputsPrice>
              <InputWithIcon>
                <SearchIcon />
                <StyledInput
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) =>
                    handleFilterChange("minPrice", e.target.value)
                  }
                />
              </InputWithIcon>
              <Span>-</Span>
              <InputWithIcon>
                <SearchIcon />
                <StyledInput
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) =>
                    handleFilterChange("maxPrice", e.target.value)
                  }
                />
              </InputWithIcon>
            </InputsPrice>
            <Done
              onClick={() => {
                toggleModal("estadoModal1");
                applyFilters(filters);
              }}
            >
              done
            </Done>
          </InputContain>
        </Contenido>
      </Modal>

      {/* Modal Houses */}
      <Modal
        estado={estadoModal2}
        cambiarEstado={() => toggleModal("estadoModal2")}
        titulo="Property type"
        mostrarHeader={true}
        mostrarOverlay={false}
        posicionModal={"center"}
        padding={"8px"}
      >
        <Contenido>
          <InputContain>
            <InputsProperty>
              <Checksito
                label="Casa"
                key="Casa"
                name="property_type_name"
                value="Casa"
                checked={filters.propertyType === "Casa"}
                onChange={() => handleFilterChange("propertyType", "Casa")}
              />
              <Checksito
                label="Departamento"
                key="Departamento"
                name="property_type_name"
                value="Departamento"
                checked={filters.propertyType === "Departamento"}
                onChange={() =>
                  handleFilterChange("propertyType", "Departamento")
                }
              />
            </InputsProperty>
            <ButtonConainet>
              <Done
                onClick={() => {
                  toggleModal("estadoModal2");
                  applyFilters(filters);
                }}
              >
                done
              </Done>
            </ButtonConainet>
          </InputContain>
        </Contenido>
      </Modal>

      {/* Modal Beds and Baths */}
      <Modal
        estado={estadoModal3}
        cambiarEstado={() => toggleModal("estadoModal3")}
        titulo="Beds & baths"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"8px"}
      >
        <Contenido>
          <InputContain>
            <InpBethBath>
              <LabelBethBath>Beds</LabelBethBath>
              <ButtonOption
                key={"Beds"}
                name={"Beds"}
                options={[
                  {
                    label: "Any",
                    value: "Any",
                    id: 1,
                    defaultChecked: true,
                  },
                  { label: "1+", value: "1", id: 2 },
                  { label: "2+", value: "2", id: 3 },
                  { label: "3+", value: "3", id: 4 },
                  { label: "4+", value: "4", id: 5 },
                ]}
                onChange={(selectedOption) =>
                  handleFilterChange("beds", selectedOption.value)
                }
              />
              <LabelBethBath>Baths</LabelBethBath>
              <ButtonOption
                key={"Baths"}
                name={"Baths"}
                options={[
                  {
                    label: "Any",
                    value: "Any",
                    id: 6,
                    defaultChecked: true,
                  },
                  { label: "1+", value: "1", id: 7 },
                  { label: "2+", value: "2", id: 8 },
                  { label: "3+", value: "3", id: 9 },
                  { label: "4+", value: "4", id: 10 },
                ]}
                onChange={(selectedOption) =>
                  handleFilterChange("baths", selectedOption.value)
                }
              />
            </InpBethBath>
            <ButtonConainet>
              <Done
                onClick={() => {
                  toggleModal("estadoModal3");
                  applyFilters(filters);
                }}
              >
                done
              </Done>
            </ButtonConainet>
          </InputContain>
        </Contenido>
      </Modal>

      {/* Modal More */}
      <Modal
        estado={estadoModal4}
        cambiarEstado={() => toggleModal("estadoModal4")}
        titulo="More"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"8px"}
      >
        <Contenido>
          <InputContain>
            <MoreContainer>
              <InputsMore>
                <Checksito
                  label="pets Allowed"
                  key="pets Allowed"
                  name="property_type_name"
                  value={true} // Usar un valor booleano
                  checked={filters.petsAllowed}
                  onChange={(e) =>
                    handleFilterChange("petsAllowed", e.target.checked)
                  }
                />
              </InputsMore>
              <FilterTitle>Area in m2</FilterTitle>
              <InputsMore>
                <InputWithIcon>
                  <StyledInput
                    type="number"
                    placeholder="Min"
                    value={filters.minArea}
                    onChange={(e) =>
                      handleFilterChange("minArea", e.target.value)
                    }
                  />
                </InputWithIcon>
                <Span>-</Span>
                <InputWithIcon>
                  <StyledInput
                    type="number"
                    placeholder="Max"
                    value={filters.maxArea}
                    onChange={(e) =>
                      handleFilterChange("maxArea", e.target.value)
                    }
                  />
                </InputWithIcon>
              </InputsMore>
            </MoreContainer>
            <Done
              onClick={() => {
                toggleModal("estadoModal4");
                applyFilters(filters);
              }}
            >
              done
            </Done>
          </InputContain>
        </Contenido>
      </Modal>

      {/* Modal Buying & Renting */}
      <Modal
        estado={estadoModal5}
        cambiarEstado={() => toggleModal("estadoModal5")}
        titulo="Buying & Renting"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"center"}
        padding={"5px 0"}
      >
        <Contenido>
          <InputContain>
            <CheckContain>
              <Checksito
                label="Both"
                key="Both"
                name="operation_type"
                value="Both"
                checked={filters.operation_type === "Both"}
                onChange={() => handleFilterChange("operation_type", "Both")}
              />
              <Checksito
                label="Buying"
                key="Buying"
                name="operation_type"
                value="Sale"
                checked={filters.operation_type === "Sale"}
                onChange={() => handleFilterChange("operation_type", "Sale")}
              />
              <Checksito
                label="Renting"
                key="Renting"
                name="operation_type"
                value="Rent"
                checked={filters.operation_type === "Rent"}
                onChange={() => handleFilterChange("operation_type", "Rent")}
              />
            </CheckContain>
          </InputContain>
        </Contenido>
      </Modal>
    </div>
  );
};

export default Filters;
