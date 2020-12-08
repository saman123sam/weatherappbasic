import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "./components/Header";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const handleTextPress = () => navigation.navigate("Detail");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text onPress={handleTextPress} style={{ fontSize: 16 }}>
            View Detail
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const DetailScreen = ({ navigation }) => {
  const handleGoBack = () => navigation.goBack();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Detail Screen</Text>

      <Text onPress={handleGoBack}>Go Back</Text>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

