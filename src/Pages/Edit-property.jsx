import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Input from "../Components/Input";
import styled from "@emotion/styled";
import { typography } from "../styles";
import Subtittle from "../Components/Subtittle";
import SelectOption from "../Components/Select-Option";
import TextArea from "../Components/Text-Area";
import Checksito from "../Components/Check";
import AddressInput from "../Components/AddressInput";
import CustomFileInput from "../Components/CustomFileInput";
import ButtonOption from "../Components/ButtonOption";
import {
  updatePropertiesId,
  showCardPropertiesId,
} from "../Services/ApiPropertyCards";
import {
  bathrooms,
  bedrooms,
  initialProperty,
} from "../Validations/PropertieValidation";

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

const EditProperty = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(initialProperty);

  useEffect(() => {
    // Carga la propiedad con el ID proporcionado desde tu API o fuente de datos
    showCardPropertiesId(id)
      .then((data) => {
        setProperty(data); // Actualiza el estado con la propiedad cargada
      })
      .catch((error) => {
        console.error("Error loading property:", error);
      });
  }, [id]);

  const handleImagenesChange = (newImagenes) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      images: newImagenes,
    }));
  };

  const handleCoordinates = (coordinates) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      ...coordinates,
    }));
  };

  const handleAddressChange = (newAddress) => {
    setProperty((prevProperty) => ({
      ...prevProperty,
      address: newAddress,
    }));
  };

  const handleSubmit = async (event) => {
    // Realiza el proceso de actualización de la propiedad en tu API o fuente de datos
    try {
      event.preventDefault();
      if (property.operation_type === "Sale") {
        const sale = { ...property };
        delete sale.monthly_price;
        delete sale.maintenance;
        delete sale.pet_allowed;
        console.log(sale);
        await updatePropertiesId(sale);
      } else {
        delete property.price;
        console.log(property);
        await updatePropertiesId(property);
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked, id } = event.target;
    if (name === "operation_type") {
      setProperty((prevRent) => ({
        ...prevRent,
        operation_type_id: id,
      }));
    } else if (type === "number") {
      const numericValue = parseFloat(value);
      setProperty((prevRent) => ({
        ...prevRent,
        [name]: numericValue,
      }));
    } else if (type === "file") {
      // Procesar archivos aquí, si es necesario
    } else if (name === "property_type_id") {
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
        <TituloForm>Edit Property Listing</TituloForm>
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
          placeholder="Start typing to autocomplete"
        />

        {property.operation_type === "Rent" ? (
          <>
            <Input
              placeholder="2000"
              name={"monthly_price"}
              type="number"
              value={property.monthly_price}
              icon="amount"
              min="1"
              label={"MONTHLY RENT"}
              style={{ width: "356px" }}
              onChange={handleInputChange}
            />
            <Input
              placeholder="100"
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
            placeholder="2000"
            style={{ width: "356px" }}
            onChange={handleInputChange}
          />
        )}

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
            label={"BATHROOMS"}
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
            placeholder="##"
            label={"AREA IN M2"}
            style={{ width: "120px" }}
          />
        </div>

        {property.operation_type === "Rent" ? (
          <div>
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
              Allowing pets increases the likelihood of renters liking the
              property by 9001%. It also makes you a better person.
            </Parraphs>
          </div>
        ) : (
          <></>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextArea
            placeholder="My apartment is great because..."
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
            <SubtittleForm>Photos</SubtittleForm>
          </div>
          <CustomFileInput onImagenesChange={handleImagenesChange} />
        </div>
        <ButtonSubmit type="submit">PUBLISH PROPERTY LISTING</ButtonSubmit>
      </Form>
    </Container>
  );
};

export default EditProperty;
