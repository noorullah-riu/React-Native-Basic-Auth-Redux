import React from "react";
import { View, FlatList, Image, Dimensions } from "react-native";
import { Header, Icon } from "react-native-elements";
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
const Home2 = ({ navigation }) => {
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
    <View style={{ paddingTop: 20, paddingBottom: 40 }}>
      <Appbar.Header style={{ backgroundColor: "#eee" }} statusBarHeight={1}>
        {/*    <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="Cart" subtitle="9 Items" color="#ffb514" />
        {/*  <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      <View style={{ paddingLeft: 10, marginBottom: 70 }}>
        <FlatList
          data={datadummy}
          showsVerticalScrollIndicator={false}
          keyExtractor={(datadummy) => datadummy.imgId}
          renderItem={({ item }) => {
            return (
              <Animatable.View
                animation="zoomIn"
                duration={1000}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 140,
                  width: deviceWidth - 20,
                  backgroundColor: "#F9F9F9",
                  marginBottom: 20,
                  shadowColor: "#000",
                  shadowOffset: { width: -2, height: 5 },
                  shadowOpacity: 0.3,
                  shadowRadius: 2,
                  elevation: 2,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 1, alignItems: "center" }}>
                    <Image
                      style={{
                        height: 100,
                        width: deviceWidth / 2.5,
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
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flex: 2 }}>
                        <Paragraph
                          style={{
                            color: "#ffb514",
                          }}
                        >
                          Rs. {item.price}
                        </Paragraph>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Icon
                          name="trash-2"
                          type="feather"
                          color="#555"
                          size={15}
                        />
                      </View>
                    </View>

                    <Subheading
                      style={{
                        color: "#434343",
                        //   marginLeft: 5,
                        marginTop: 0,
                      }}
                    >
                      {item.imgTitle}
                    </Subheading>

                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 25,
                        alignItems: "center",
                        backgroundColor: "#ffb514",
                        marginRight: 0,
                      }}
                    >
                      <View style={{ flex: 0.5 }}></View>
                      <View style={{ flex: 1 }}>
                        <Icon
                          name="minus-square"
                          type="feather"
                          color="#fff"
                          size={20}
                          onPress={() => navigation.navigate("ProductDetail")}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <Subheading
                          style={{ alignSelf: "center", color: "#fff" }}
                        >
                          20
                        </Subheading>
                      </View>
                      <View style={{ flex: 1 }}>
                        <Icon
                          name="plus-square"
                          type="feather"
                          color="#fff"
                          size={20}
                        />
                      </View>
                      <View style={{ flex: 0.5 }}></View>
                    </View>
                  </View>
                </View>
              </Animatable.View>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Home2;
