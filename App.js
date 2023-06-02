//import liraries
import React, { createContext, useState } from "react";
import { View, StyleSheet, LogBox, StatusBar } from "react-native";
import Router from "./src/screens/Router";
import { COLORS } from "./src/common/Utils/Colors";
import Loader from "./src/common/Components/Loader";
import Network from "./src/common/Components/Network";

// create a component
export const LoaderContext = createContext();

const App = () => {
  const [showLoader, setShowLoader] = useState(false);
  LogBox.ignoreAllLogs();
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.White} barStyle={"dark-content"} />
      <LoaderContext.Provider value={[showLoader, setShowLoader]}>
        <Network />
        <Router />
        {showLoader && <Loader />}
      </LoaderContext.Provider>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default App;
