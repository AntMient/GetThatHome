import { BASE_URI, token_key } from "../config";



export async function getUserProperties() {
  try {
    const userToken = sessionStorage.getItem(token_key);

    const requestOptions = userToken
      ? {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
      : {};

    const response = await fetch(`${BASE_URI}/Uproperties`, requestOptions);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getOperationsType() {
  try {
    const userToken = sessionStorage.getItem(token_key);

    const requestOptions = userToken
      ? {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
      : {};

    const response = await fetch(`${BASE_URI}/operation_types`, requestOptions);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getPropetiesType() {
  try {
    const userToken = sessionStorage.getItem(token_key);

    const requestOptions = userToken
      ? {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
      : {};

    const response = await fetch(`${BASE_URI}/property_types`, requestOptions);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProperties() {
  try {
    const localData = localStorage.getItem("properties");
    if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }
    const response = await fetch(`${BASE_URI}/properties`, {
      headers: {
        "Authorization": `Token token=${sessionStorage.getItem(token_key)}`,
      },
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data, "Data received from the API");
    localStorage.setItem("properties", JSON.stringify(data));
    console.log(data, "Data stored in local storage");
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createCardProperties(productData) {
  try {
    const response = await fetch(`${BASE_URI}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token token=${sessionStorage.getItem(token_key)}`,
      },
      body: JSON.stringify(productData),

    });

    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    updateLocalStorage();
    console.log("Se logró crear la propiedad");

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}



export async function showCardPropertiesId(id) {
  try {
    const response = await fetch(`${BASE_URI}/properties/${id}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updatePropertiesId(id, updatedProductData) {
  try {
    const response = await fetch(`${BASE_URI}/properties/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProductData),
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    updateLocalStorage();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteProperties(id) {
  try {
    const response = await fetch(`${BASE_URI}/properties/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(response.status);
    }
    updateLocalStorage();
    return true;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

function updateLocalStorage() {
  localStorage.removeItem("products");
}
