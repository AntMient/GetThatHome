import { BASE_URI, token_key } from "../config";

export async function getFavoritesProperty() {
  try {
    const localData = localStorage.getItem("favorite_properties");
    if (localData) {
      const parsedData = JSON.parse(localData);
      return parsedData;
    }

    const userToken = sessionStorage.getItem(token_key);

    const requestOptions = userToken
      ? {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      : {};

    const response = await fetch(`${BASE_URI}/favorite_properties`, requestOptions);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    localStorage.setItem("favorite_properties", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
