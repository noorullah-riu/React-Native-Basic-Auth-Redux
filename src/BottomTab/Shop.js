import React from "react";
import { View, FlatList, Image, Dimensions } from "react-native";

import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  Appbar,
  Subheading,
} from "react-native-paper";

import * as Animatable from "react-native-animatable";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const Home3 = () => {
  const datadummy = [
    {
      id: "0",
      imgId: "xyz897",
      price: "200",
      imgTitle: "Women T-Shirt",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "1",
      imgId: "xyz898",
      price: "300",
      imgTitle: "Men T-Shirt",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "2",
      imgId: "xyz899",
      price: "400",
      imgTitle: "Men T-Shirt 2",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
    {
      id: "3",
      imgId: "xyz900",
      price: "500",
      imgTitle: "Men T-Shirt 3",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_61589353557market1.jpg",
    },
    {
      id: "4",
      imgId: "xyz901",
      price: "600",
      imgTitle: "Men T-Shirt 4",
      imgURL: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
    },
  ];

  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <View style={{ paddingTop: 20, paddingBottom: 100 }}>
      {/*     <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //  borderColor: "#ffb514",
          //  borderWidth: 1,

          shadowColor: "#000",
          shadowOffset: { width: -2, height: 5 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Title style={{ color: "gray" }}>Shop</Title>
        </View>
        <View style={{ flex: 3 }}>
          <SearchBar
            placeholder="Search Product..."
            inputContainerStyle={{
              backgroundColor: "#FFF",
              //  padding: 10,
              //  fontWeight: "bold",
              //   borderBottomColor: "#008080",
              // borderBottomWidth: 0,
              shadowColor: "#000",
              shadowOffset: { width: -2, height: 5 },
              shadowOpacity: 0.1,
              shadowRadius: 0,
              elevation: 2,
            }}
            containerStyle={{
              height: 40,
              backgroundColor: "#F2F2F2",
            }}
            platform="ios"
          />
        </View>
      </View> */}

      <Appbar.Header style={{ backgroundColor: "#eee" }} statusBarHeight={1}>
        {/*    <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Shop" color="#ffb514" />
        <Appbar.Action icon="magnify" color="#ffb514" onPress={_handleSearch} />
        {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>

      <View style={{ marginLeft: 10, marginBottom: 0, marginRight: 10 }}>
        <FlatList
          //   horizontal={false}
          numColumns={2}
          data={datadummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(datadummy) => datadummy.imgId}
          renderItem={({ item }) => {
            return (
              <Animatable.View
                animation="lightSpeedIn"
                duration={1000}
                style={{
                  // height: 250,
                  width: deviceWidth / 2,
                  //   backgroundColor: "#F9F9F9",
                  marginBottom: 10,
                  //      marginRight: 10,
                  // shadowColor: "#000",
                  //  shadowOffset: { width: -2, height: 5 },
                  //  shadowOpacity: 0.3,
                  //  shadowRadius: 5,
                  //  elevation: 5,
                }}
              >
                <View style={{ marginTop: 5 }}>
                  <Image
                    style={{
                      height: deviceHeight / 3.5,
                      width: deviceWidth / 2.1,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.imgURL }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                  }}
                >
                  <Subheading
                    style={{
                      color: "#434343",
                      //   marginLeft: 5,
                      marginTop: 0,
                    }}
                  >
                    {item.imgTitle}
                  </Subheading>
                  <Paragraph
                    style={{
                      color: "#ffb514",
                      marginTop: -5,
                    }}
                  >
                    Rs. {item.price}
                  </Paragraph>
                </View>
              </Animatable.View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Home3;
