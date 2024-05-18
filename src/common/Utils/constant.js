export const BASE_URL = "baseURL";

import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

export const emailRegax = /\S+@\S+\.\S+/;

export const userName = "hiren";

export const scaleSize = (size) => {
  return RFValue(size, height);
};
