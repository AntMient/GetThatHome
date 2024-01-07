import Input from "../Components/Input";
import styled from "@emotion/styled";
import { typography } from "../styles";
import Subtittle from "../Components/Subtittle";
import SelectOption from "../Components/Select-Option";
import TextArea from "../Components/Text-Area";
import { useState } from "react";
import Checksito from "../Components/Check";
import {
  bathrooms,
  bedrooms,
  initialProperty,
} from "../Validations/PropertieValidation";
import AddressInput from "../Components/AddressInput";
import CustomFileInput from "../Components/CustomFileInput";
import ButtonOption from "../Components/ButtonOption";
import { createCardProperties } from "../Services/ApiPropertyCards";

const TituloForm = styled.div`
  ${typography.head.head4}
`;
const SubtittleForm = styled.div`
  ${typography.head.head6};
  font-weight: 500;
`;
const Parraphs = styled.div`
  ${typography.caption.caption1}
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin: 2rem; */
  /* margin-left: 9.5rem; */
  gap: 16px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding-top: 2rem;
  padding-left: 7.5rem;
  gap: 16px;
`;
const ButtonSubmit = styled.button`
  width: "274px";
  height: "56px";
  padding: "16px, 24px, 16px, 24px";
  border-radius: "16px";
  gap: "8px";
  background-color: #f48fb1;
  border-radius: 16px;
  color: white;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #bf5f82;
  }
`;

const Createproperty = () => {
  // const [coordinates, setCoordinates] = useState({
  //   lat: "",
  //   lng: "",
  // });
  // const [address, setAddress] = useState("");
  const [property, setProperty] = useState({
    ...initialProperty,
    // ...coordinates,
    // address,
  });
  const handleImagenesChange = (newImagenes) => {
    console.log(newImagenes, "Imagenes");
    // setImagenes(newImagenes);
    setProperty((prevProperty) => ({
      ...prevProperty,
      images: newImagenes,
    }));
    console.log(newImagenes.keys())
  };
  // Función para manejar las coordenadas
  const handleCoordinates = (coordinates) => {
    // setCoordinates({ coordinates });
    setProperty((prevProperty) => ({
      ...prevProperty,
      ...coordinates,
    }));
  };
  const handleAddressChange = (newAddress) => {
    // setAddress(newAddress);
    setProperty((prevProperty) => ({
      ...prevProperty,
      address: newAddress,
    }));
  };

  const handleSubmit = async (event) => {
    property.area = parseInt(property.area);
    property.price = parseInt(property.price);
    property.monthly_price = parseInt(property.monthly_price);
    property.maintenance = parseInt(property.maintenance);
    property.property_type_id = parseInt(property.property_type_id);
    property.operation_type_id = parseInt(property.operation_type_id);
    property.latitude = property.latitude.toString();
    property.longitude = property.longitude.toString();
    try {
      event.preventDefault();
      if (property.operation_type === "Sale") {
        const sale = { ...property };
        delete sale.monthly_price;
        delete sale.maintenance;
        delete sale.pet_allowed;
        console.log(sale);
        await createCardProperties(sale);
      } else {
        delete property.price;
        console.log(property);
        await createCardProperties(property);
      }
    } catch (error) {
      console.error("Error creating property:", error);
    }
    // try {
    //   event.preventDefault();
    //   if (property.operation_type === "Sale") {
    //     const sale = { ...property };
    //     delete sale.monthly_price;
    //     delete sale.maintenance;
    //     delete sale.pet_allowed;
    //     console.log(sale);
    //   } else {
    //     delete property.price;
    //     await createCardProperties(property);
    //   }
    // } catch (error) {
    //   console.error("Error creating property:", error);
    // }
  };

  const handleInputChange = (event) => {
    // console.log(event.target);
    const { name, value, type, checked, id } = event.target;
    // console.log(label);
    if (name === "operation_type") {
      console.log(event.target);
      setProperty((prevRent) => ({
        ...prevRent,
        operation_type_id: id,
      }));
    } else if (type === "number") {
      // Convierte el valor a un número usando parseInt o parseFloat
      const numericValue = parseFloat(value);
      console.log(numericValue);
      setProperty((prevRent) => ({
        ...prevRent,
        [name]: numericValue,
      }));

      // const numericValue = value.replace(/[^0-9]/g, "");
      // const intValue = parseInt(numericValue, 10);
      // if (!isNaN(intValue) && intValue >= 0) {
      //   setProperty((prevRent) => ({
      //     ...prevRent,
      //     [name]: intValue,
      //   }));
      // }
    } else if (type == "file") {
      property.images.push(value);
      setProperty((prevRent) => ({
        ...prevRent,
        [name]: property.images,
      }));
    } else if (name == "property_type_id") {
      console.log(event.target);
      const ptype_name = event.target.getAttribute("label");
      setProperty((prevRent) => ({
        ...prevRent,
        property_type_id: value,
        property_type_name: ptype_name,
      }));
    }
    const newValue = type === "checkbox" ? checked : value;
    setProperty((prevRent) => ({
      ...prevRent,
      [name]: newValue,
    }));
  };
  const handleSelectBe = (event) => {
    const value = event.value;
    setProperty((prevRent) => ({
      ...prevRent,
      bedrooms: value,
    }));
  };
  const handleSelectBa = (event) => {
    const value = event.value;
    setProperty((prevRent) => ({
      ...prevRent,
      bathrooms: value,
    }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <TituloForm>Create a property listing</TituloForm>
        <div>
          <Subtittle subtittle={"OPERATION TYPE"} />
          <ButtonOption
            key={"operation_type"}
            name={"operation_type"}
            options={[
              {
                label: "Rent",
                value: "Rent",
                id: 1,
                defaultChecked: true,
              },
              { label: "Sale", value: "Sale", id: 2 },
            ]}
            onChange={handleInputChange}
          />
        </div>
        <AddressInput
          onCoordinates={handleCoordinates}
          onAddressChange={handleAddressChange}
          label={"ADDRESS"}
          id={"address"}
          name={"address"}
          // value={operation.address}
          // value={operation.address}
          placeholder="start typing to autocomplete"
        />

        {/* CAMBIA >>>>>>>>>*/}
        {property.operation_type === "Rent" ? (
          <>
            <Input
              placeholder={2000}
              name={"monthly_price"}
              type="number"
              value={property.monthly_price}
              icon="amount"
              min="1"
              label={"MONTLY RENT"}
              style={{ width: "356px" }}
              onChange={handleInputChange}
            />
            <Input
              placeholder={100}
              name={"maintenance"}
              type="number"
              min="1"
              value={property.maintenance}
              icon="amount"
              label={"MAINTENANCE"}
              style={{ width: "356px" }}
              onChange={handleInputChange}
            />
          </>
        ) : (
          <Input
            type="number"
            icon="amount"
            label={"PRICE"}
            name={"price"}
            value={property.price}
            placeholder={"2000"}
            style={{ width: "356px" }}
            onChange={handleInputChange}
          />
        )}
        {/*<<<<<<<<< CAMBIA*/}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div>
            <Subtittle subtittle={"PROPERTY TYPE"} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              {/* {propertyTypes.map((propertyType) => {
                return (
                  <Checksito
                    label={propertyType.property_name}
                    type="radio"
                    id={propertyType.id}
                    key={propertyType.id}
                    name="property_type_id"
                    value={propertyType.id}
                    onChange={handleInputChange}
                  >
                    {propertyType.property_name}
                  </Checksito>
                );
              })} */}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "16px",
          }}
        >
          <SelectOption
            label={"BEDROOMS"}
            style={{ width: "120px" }}
            content={bedrooms}
            name="bedrooms"
            onChange={handleSelectBe}
          />
          <SelectOption
            label={"BATROOMS"}
            style={{ width: "120px" }}
            content={bathrooms}
            name="bathrooms"
            onChange={handleSelectBa}
          />
          <Input
            type="number"
            name={"area"}
            value={property.area}
            onChange={handleInputChange}
            placeholder={"##"}
            label={"AREA IN M2"}
            style={{ width: "120px" }}
          />
        </div>
        {/* CAMBIA >>>>>>>>>*/}
        {property.operation_type === "Rent" ? (
          <div>
            {/* <Radio
              type="checkbox"
              // checked={operationType === "Rent"}
              name="pet_allowed"
              value={operation.pet_allowed}
              label={"Pets Allowed"}
              onChange={handleInputChange}
            /> */}
            <Checksito
              checked={property.pet_allowed}
              name="pet_allowed"
              value={property.pet_allowed}
              label={"Pets Allowed"}
              onChange={handleInputChange}
            >
              Pets Allowed
            </Checksito>
            <Parraphs
              style={{
                width: "468px",
              }}
            >
              Allowing pets increases the likehood of renters liking the
              property by 9001%. It also makes you a better person.
            </Parraphs>
          </div>
        ) : (
          <></>
        )}
        {/*<<<<<<<<< CAMBIA*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextArea
            placeholder={"My apartment is great because..."}
            label={"ABOUT THIS PROPERTY"}
            name={"description"}
            value={property.description}
            onChange={handleInputChange}
          />
          <Parraphs style={{ color: "#8E8E8E" }}>
            Renters will read this first, so highlight any features or important
            information the apartment has.
          </Parraphs>
          <div>
            <SubtittleForm placeholder="HOLA">Photos</SubtittleForm>
          </div>
          {/* <Upload
            name={"images"}
            value={operation.images}
            onChange={handleInputChange}
          /> */}
          <CustomFileInput
            onImagenesChange={handleImagenesChange}
            // onImagenesChange={handleImagenesChange}
          />
        </div>
        <ButtonSubmit
          style={{
            width: "274px",
            height: "56px",
            padding: "16px, 24px, 16px, 24px",
            borderRadius: "16px",
            gap: "8px",
          }}
          type="submit"
        >
          PUBLISH PROPERTY LISTING
          {/* <Link to="/"> PUBLISH PROPERTY LISTING</Link> */}
        </ButtonSubmit>
      </Form>
    </Container>
  );
};

export default Createproperty;
