import React, { useState } from "react";

const InputPrueba = ({ name, value }) => {
  const [imagenes, setImagenes] = useState([]);
  const convert64 = (archivos) => {
    console.log(archivos, "Estos son los archivos");
    Array.from(archivos).forEach((image) => {
      var reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = function () {
        var arrayAuxiliar = [];
        var base64 = reader.result;
        // console.log(base64);
        arrayAuxiliar = base64.split(",");
        // console.log(arrayAuxiliar);
        setImagenes((prevImagenes) => [...prevImagenes, arrayAuxiliar[1]]);
      };
    });
  };
  console.log(imagenes);
  return (
    <div>
      <input
        name={name}
        value={value}
        type="file"
        multiple
        onChange={(e) => convert64(e.target.files)}
      />
    </div>
  );
};

export default InputPrueba;
