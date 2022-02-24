import React, { useState } from "react";
import {
  View,
  FlatList,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Headline,
  Subheading,
  TextInput,
  Button,
} from "react-native-paper";

import * as Animatable from "react-native-animatable";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const ChooseScreen = ({ navigation }) => {
  const some = () => {
    setIsFieldFocuous(true);
  };

  return (
    <View style={styles.MainContainer}>
      <View style={styles.HeaderContainer}>
        <Animatable.Image
          style={styles.HeaderImage}
          animation="bounceIn"
          duration={1500}
          source={require("../Assets/main2.png")}
          resizeMode="stretch"
        />
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.FooterContainer}>
        <Title>Welcome To StylingBaks</Title>
        <Title style={{ marginTop: -10 }}>Bringing All Origionals</Title>
        <Text style={{ marginTop: 10, color: "gray" }}>Get Into App</Text>
        <View style={{ alignItems: "flex-end" }}>
          <Button
            style={styles.MiniButton}
            icon="chevron-right"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Get-In
          </Button>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: "#FFB22A",
    flex: 1,
  },

  HeaderContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  HeaderImage: {
    width: deviceHeight * 0.25,
    height: deviceHeight * 0.25,
  },

  FooterContainer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  MiniButton: {
    backgroundColor: "#F2AE1B",
    marginTop: 10,
    width: deviceWidth / 2,
    borderRadius: 50,
  },
});

export default ChooseScreen;
