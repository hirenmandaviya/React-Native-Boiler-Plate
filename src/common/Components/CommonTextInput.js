import React, { useRef, useImperativeHandle, forwardRef } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "./../Colors";
import { FONTS } from "./../fonts";

const { height } = Dimensions.get("window");

const CommonTextInput = forwardRef(
  (
    {
      placeholder,
      value,
      onChangeText,
      textInputStyle,
      icon,
      componentStyle,
      isPassword = false,
      onSubmitEditing,
      returnKeyType,
      keyboardType,
      autoCapitalize
    },
    ref
  ) => {
    const textInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (textInputRef.current) {
          textInputRef.current.focus();
        }
      },
    }));

    return (
      <View style={componentStyle}>
        <View style={styles.textInputContainer}>
          <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
          <TextInput
            ref={textInputRef}
            style={[styles.textInput, textInputStyle]}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={COLORS.Placeholder}
            secureTextEntry={isPassword}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    borderRadius: RFValue(6),
    paddingHorizontal: RFValue(8),
    paddingVertical: RFValue(17, height),
    fontFamily: FONTS.Medium,
    color: COLORS.Black,
    fontSize: RFValue(18, height),
    marginHorizontal: RFValue(4, height),
  },
  textInputContainer: {
    borderRadius: RFValue(6),
    paddingHorizontal: RFValue(8),
    backgroundColor: COLORS.GreyBackground,
    flexDirection: "row",
    alignItems: "center",
  },
  textInputHeading: {
    color: COLORS.Black,
    fontFamily: FONTS.Medium,
    fontSize: RFValue(16),
    marginBottom: RFValue(4),
  },
  iconStyle: {
    height: RFValue(16),
    width: RFValue(16),
  },
});

export default CommonTextInput;
