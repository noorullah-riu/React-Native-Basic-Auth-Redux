import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  LogBox,
} from "react-native";
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  Headline,
  Subheading,
  Button,
} from "react-native-paper";
import { Icon, Rating } from "react-native-elements";
import Toast from "react-native-toast-message";

import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../Redux/actions/index";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const ProductDetail = ({ route }) => {
  //const { id } = route.params;
  const [userData, setUserData] = useState({});

  const fetchSlider = async () => {
    const firestore = firebase.firestore();
    try {
      // const list = [];

      await firestore
        .collection("Products")
        .doc(route.params ? route.params.id : Products.uid)
        //  .orderBy("postTime", "desc")
        .get()
        .then((documentSnapshot) => {
          if (documentSnapshot.exists) {
            //     console.log("User Data", documentSnapshot.data());
            setUserData(documentSnapshot.data());
          }
        });

      //  setSliderImages(list);

      /*   if (loading) {
        setLoading(false);
      } */

      //  console.log(userData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(["Setting a timer"]);
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAcHD_NDperRlbrOwlL6_fEDW5otLkiMp0",
        authDomain: "ecomerceapp-8d0d2.firebaseapp.com",
        projectId: "ecomerceapp-8d0d2",
        storageBucket: "ecomerceapp-8d0d2.appspot.com",
        messagingSenderId: "138753126316",
        appId: "1:138753126316:web:629dc90fccbb9345fb1409",
      });
      fetchSlider();
    } else {
      firebase.app(); // if already initialized, use that one
      fetchSlider();
    }
  }, []);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ flex: 1 }}>
        <Image
          style={{
            height: deviceHeight / 2,
            width: deviceWidth,
          }}
          resizeMode="cover"
          //   source={{ uri: item.CategoryImage }}
          source={{ uri: userData.ProductImage }}
        />
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Title style={{ color: "gray" }}>{userData.ProductName}</Title>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <Subheading>{userData.Price}</Subheading>
        </View>

        <View style={{ flex: 1 }}>
          <View
            style={{
              flexDirection: "row",
              //  marginTop: 25,
              alignItems: "center",
              borderColor: "#ffb514",
              borderWidth: 1,
              marginRight: 0,
            }}
          >
            <View style={{ flex: 0.5 }}></View>
            <View style={{ flex: 1 }}>
              <Icon
                name="minus-square"
                type="feather"
                color="#ffb514"
                size={20}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Subheading style={{ alignSelf: "center", color: "#ffb514" }}>
                20
              </Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="plus-square"
                type="feather"
                color="#ffb514"
                size={20}
              />
            </View>
            <View style={{ flex: 0.5 }}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View style={{ flex: 1, alignItems: "flex-start" }}>
          <Rating
            imageSize={15}
            readonly
            startingValue={userData.Rating}
            style={{}}
          />
        </View>
        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 10 }}>
          <Icon
            name="heart"
            type="feather"
            color="#555"
            size={20}
            //  onPress={() => show()}
          />
        </View>
      </View>

      <Button
        style={{ backgroundColor: "#F2AE1B", padding: 5 }}
        icon="chevron-right"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Add-To-Cart
      </Button>

      <View style={{ marginTop: 10, marginBottom: 10 }}>
        <Subheading>Description</Subheading>
        <Text>{userData.Description}</Text>
      </View>
    </ScrollView>
  );
};
export default ProductDetail;
