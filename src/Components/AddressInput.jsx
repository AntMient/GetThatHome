import React, { useEffect, useRef } from "react";
import Input from "./Input";
import styled from "@emotion/styled";
import { colors } from "../styles";
import Label from "./Label";
import { FiSearch } from "react-icons/fi";

const Entrada = styled.input`
  border: 1px solid ${colors.pink["solid"]};
  border-radius: 8px;
  padding-bottom: 3px;
  padding-left: 36px;
  outline: none;
  height: 36px;
`;

const AddressInput = ({
  id,
  label,

  placeholder,
  name,
  onCoordinates,
  onAddressChange,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Inicializa el componente Autocomplete
    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    // Escucha el evento cuando se selecciona una dirección
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        // Obtiene las coordenadas de la dirección
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        const selectedAddress = inputRef.current.value;
        console.log("Latitud:", latitude);
        console.log("Longitud:", longitude);
        onCoordinates({ latitude, longitude });
        onAddressChange(selectedAddress);
      }
    });
  }, []);
  const handleInputChange = (event) => {
    const address = event.target.value;
    onAddressChange(address);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        width: "100%",
        height: "100%",
      }}
    >
      {label && <Label htmlFor={id || name} label={label} />}
      <FiSearch
        style={{
          position: "absolute",
          marginTop: "1.70rem",
          marginLeft: "9.67px",
          color: `${colors.gray["lightGray"]}`,
          width: "20px",
          height: "20px",
        }}
      />
      <Entrada
        ref={inputRef}
        type="text"
        id={id} // Asocia el elemento al componente Autocomplete
        placeholder={placeholder}
        onChange={(e) => onAddressChange(e.target.value)}
      />
    </div>
  );
};

export default AddressInput;
