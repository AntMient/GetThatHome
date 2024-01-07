const BASE_URI = "https://gethomebycodeaditos.onrender.com";

export async function getPropertyTypes() {
  try {
    const localData = localStorage.getItem("property_types");
    if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }
    const response = await fetch(`${BASE_URI}/property_types`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    localStorage.setItem("property_types", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getOperationTypes() {
  try {
    const localData = localStorage.getItem("operation_types");
    if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }
    const response = await fetch(`${BASE_URI}/operation_types`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    localStorage.setItem("operation_types", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getRoles() {
  try {
    const localData = localStorage.getItem("roles");
    if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }
    const response = await fetch(`${BASE_URI}/roles`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    localStorage.setItem("roles", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
