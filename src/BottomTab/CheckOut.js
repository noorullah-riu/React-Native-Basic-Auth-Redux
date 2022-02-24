import React from "react";
import { View, FlatList, Image, Dimensions, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import {
  Title,
  Divider,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  Subheading,
  Button,
  Appbar,
} from "react-native-paper";

import * as Animatable from "react-native-animatable";
var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;
const CheckOut = ({ navigation }) => {
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
    <View style={{ paddingTop: 20 }}>
      <Appbar.Header style={{ backgroundColor: "#eee" }} statusBarHeight={1}>
        {/*    <Appbar.BackAction onPress={_goBack} /> */}
        <Appbar.Content title="CheckOut" subtitle="9 Items" color="#ffb514" />
        {/*  <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
      </Appbar.Header>
      <ScrollView>
        <View style={{ paddingLeft: 10, marginBottom: 0, marginTop: 20 }}>
          <FlatList
            horizontal={true}
            data={datadummy}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(datadummy) => datadummy.imgId}
            renderItem={({ item }) => {
              return (
                <Animatable.View
                  animation="fadeInUpBig"
                  duration={1000}
                  style={{
                    height: 250,
                    width: deviceWidth / 2,
                    backgroundColor: "#F9F9F9",
                    marginBottom: 20,
                    marginRight: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 2, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 6,
                    elevation: 6,
                  }}
                >
                  <View style={{}}>
                    <View style={{}}>
                      <Image
                        style={{
                          height: 100,
                          width: deviceWidth / 2,
                        }}
                        resizeMode="cover"
                        source={{ uri: item.imgURL }}
                      />
                    </View>
                    <View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 10,
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View style={{ flex: 3 }}>
                          <Paragraph
                            style={{
                              color: "#ffb514",
                              marginLeft: 5,
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
                          marginLeft: 5,
                          marginTop: 0,
                        }}
                      >
                        {item.imgTitle}
                      </Subheading>

                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: 20,
                          alignItems: "center",
                          backgroundColor: "#ffb514",
                        }}
                      >
                        <View style={{ flex: 0.5 }}></View>
                        <View style={{ flex: 1 }}>
                          <Icon
                            name="minus-square"
                            type="feather"
                            color="#fff"
                            size={20}
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
        <Divider orientation="horizontal" style={{ marginTop: 20 }} />

        <Animatable.View animation="fadeInLeft" duration={1000}>
          <View style={{ marginRight: 10, marginLeft: 10 }}>
            <Title style={{ color: "gray" }}>Adress</Title>
            <Subheading>House No Street City Country</Subheading>
          </View>

          <View style={{ marginRight: 10, marginLeft: 10 }}>
            <Title style={{ color: "gray" }}>Contact Info</Title>
            <Subheading>0900--xxxxx</Subheading>
          </View>
          <Divider orientation="horizontal" style={{ marginTop: 20 }} />
          <View
            style={{
              marginRight: 10,
              marginLeft: 10,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 3 }}>
              <Title style={{ color: "gray" }}>Sub-Total</Title>
            </View>
            <View style={{ flex: 1 }}>
              <Subheading>Rs. 190</Subheading>
            </View>
          </View>
          <View
            style={{
              //  marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 3 }}>
              <Title style={{ color: "gray" }}>Discount</Title>
            </View>
            <View style={{ flex: 1 }}>
              <Subheading>0%</Subheading>
            </View>
          </View>

          <View
            style={{
              //  marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 3 }}>
              <Title style={{ color: "gray" }}>Shipping Fee</Title>
            </View>
            <View style={{ flex: 1 }}>
              <Subheading>Rs. 190</Subheading>
            </View>
          </View>
          <Divider
            orientation="horizontal"
            style={{ marginTop: 20, marginBottom: 20, color: "#000" }}
          />
          <View
            style={{
              //  marginTop: 10,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              marginLeft: 10,
              marginBottom: 20,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 3 }}>
              <Title>Total</Title>
            </View>
            <View style={{ flex: 1 }}>
              <Subheading>Rs. 900</Subheading>
            </View>
          </View>
          <View
            style={{
              paddingBottom: 100,
              marginRight: 20,
              marginLeft: 20,
            }}
          >
            <Button
              style={{ backgroundColor: "#F2AE1B", padding: 5 }}
              icon="chevron-right"
              mode="contained"
              onPress={() => navigation.navigate("Login")}
            >
              Place An Order
            </Button>
          </View>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};
export default CheckOut;
