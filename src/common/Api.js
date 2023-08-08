import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "./Utils/constant";



const AccessToken = async () => {
  let token = await AsyncStorage.getItem("AccessToken");
  return `Bearer ${token}`;
};

const ApiCall = async (endPoint, Method, headers, params) => {
    console.log("=====================API Call=======================");
    console.log(`APICALL ==>>>`, `${BASE_URL + endPoint}`, {
      method: Method,
      headers: headers,
      ...(params && { body: JSON.stringify(params) }),
    });
    console.log("======================================================");
  return fetch(`${BASE_URL + endPoint}`, {
    method: Method,
    headers: headers,
    ...(params && { body: params }),
  }).then(async (response) => {
    return [await response.json(), response.status];
  });
};

module.exports = {
  async Login(params) {
    let headers = {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    };

    return ApiCall("oauth/token", "POST", headers, params);
  },
};
