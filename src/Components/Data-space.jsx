import React, { useState } from "react";

const DataSpace = () => {
  const [gender, setGender] = useState();

  return (
    <div>
      <p>{gender}</p>
      <input
        type="radio"
        name="type"
        value="department"
        onChange={(e) => setGender(e.target.value)}
      />
      Department
      <input
        type="radio"
        name="type"
        value="House"
        onChange={(e) => setGender(e.target.value)}
      />
      House
    </div>
  );
};

export default DataSpace;
