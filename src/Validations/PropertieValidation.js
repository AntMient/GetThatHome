

export const valores = {
  bedrooms: 4, //number
  bathrooms: 13, //number
  area: 200.0, //number
  description: "A ver si funca",
  images: [],
  active: true, //number
  address: "que miras sapo y la rctmare ",
  latitude: "123456", //changed
  longitude: "123456", //changed
  price: 3000, //number
  monthly_price: 800, //number
  maintenance: 200, //number
  pets_allowed: true,
  property_type_id: 1, //number
  operation_type_id: 1, //number //changed
  property_type_name: "casa",
  operation_type: "Rent",
};

export const initialProperty = {
  bedrooms: 0, //number
  bathrooms: 0, //number
  area: "", //number
  description: "",
  images: [],
  active: true, //added
  address: "",
  latitude: "",
  longitude: "",
  price: "", //number
  monthly_price: "", //number
  maintenance: "", //number
  pet_allowed: false,
  property_type_id: "", //number
  operation_type_id: 1, //number
  property_type_name: "",
  operation_type: "Rent",

};

export const bathrooms = [
  //crear un array de objetos
  { value: 0, label: "Any" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4+" },
];

export const bedrooms = [
  //crear un array de objetos
  { value: 0, label: "Any" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4+" },
];
