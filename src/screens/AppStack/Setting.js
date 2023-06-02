//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { FONTS } from '../../common/Utils/fonts';
import { COLORS } from '../../common/Utils/Colors';

// create a component
const Setting = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Setting</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.White,
  },
  text: {
    fontFamily: FONTS.Bold,
    color: COLORS.Black,
  },
});

//make this component available to the app
export default Setting;
