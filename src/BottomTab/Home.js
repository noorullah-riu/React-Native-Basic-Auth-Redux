import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
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
} from "react-native-paper";

import Carousel from "react-native-snap-carousel";
import { Icon, SearchBar, Divider } from "react-native-elements";

import { useDispatch, useSelector } from "react-redux";
import { getcategories } from "../Redux/actions/index";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

import "firebase/auth";
import "firebase/firestore";
import firebase from "firebase/app";

const Home4 = ({ navigation }) => {
  const [index, setindex] = useState(0);
  const [SliderImages, setSliderImages] = useState([]);
  const [Categories, setCategories] = useState([]);
  const [Products1, setProducts1] = useState([]);
  const [Products2, setProducts2] = useState([]);

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category);
  const getCategory = () => dispatch(getcategories());

  function _renderItem({ item, index }) {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemContainer}
          resizeMode="contain"
          source={{
            uri: item.SliderImage,
          }}
        />
      </View>
    );
  }

  //#region Fetching Firebase

  const fetchSlider = async () => {
    const firestore = firebase.firestore();
    try {
      const list = [];

      await firestore
        .collection("Slider")
        //  .orderBy("postTime", "desc")
        .get()
        .then((querySnapshot) => {
          console.log("Total Slider: ", querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const { Id, SliderImage } = doc.data();
            list.push({
              Id: doc.id,
              SliderImage: SliderImage,
              //  userName: "Test Name",
              // userImg: "",
              // postTime: postTime,
              // post,
              // postImg,
              // liked: false,
              // likes,
              // comments,
            });
          });
        });

      setSliderImages(list);

      /*   if (loading) {
        setLoading(false);
      } */

      console.log("Slider: ", SliderImages);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchCategories = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      const list = [];

      await firestore
        .collection("Categorie")
        //  .orderBy("postTime", "desc")
        .get()
        .then((querySnapshot) => {
          console.log("Total Posts: ", querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const { Index, Id, CategoryImage, CategoryName } = doc.data();
            list.push({
              Index: Index,
              Id: doc.id,
              CategoryImage: CategoryImage,
              CategoryName: CategoryName,
              //  userName: "Test Name",
              // userImg: "",
              // postTime: postTime,
              // post,
              // postImg,
              // liked: false,
              // likes,
              // comments,
            });
          });
        });

      setCategories(list);

      /*   if (loading) {
        setLoading(false);
      } */

      console.log("Categories: ", Categories);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProducts = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      const list = [];

      await firestore
        .collection("Products")
        //  .orderBy("postTime", "desc")
        .get()
        .then((querySnapshot) => {
          console.log("Total Products1: ", querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const { Index, Id, CategoryId, ProductImage, ProductName, Price } =
              doc.data();
            list.push({
              Index: Index,
              Id: doc.id,
              CategoryId: CategoryId,
              ProductImage: ProductImage,
              ProductName: ProductName,
              Price: Price,
              //  userName: "Test Name",
              // userImg: "",
              // postTime: postTime,
              // post,
              // postImg,
              // liked: false,
              // likes,
              // comments,
            });
          });
        });

      setProducts1(list);

      /*   if (loading) {
        setLoading(false);
      } */

      console.log("Products1: ", Products1);
    } catch (e) {
      console.log(e);
    }
  };

  const fetchProductsDesc = async () => {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    try {
      const list = [];

      await firestore
        .collection("Products")
        .orderBy("Index", "desc")
        .get()
        .then((querySnapshot) => {
          console.log("Total Products1: ", querySnapshot.size);

          querySnapshot.forEach((doc) => {
            const { Index, Id, CategoryId, ProductImage, ProductName, Price } =
              doc.data();
            list.push({
              Index: Index,
              Id: doc.id,
              CategoryId: CategoryId,
              ProductImage: ProductImage,
              ProductName: ProductName,
              Price: Price,
              //  userName: "Test Name",
              // userImg: "",
              // postTime: postTime,
              // post,
              // postImg,
              // liked: false,
              // likes,
              // comments,
            });
          });
        });

      setProducts2(list);

      /*   if (loading) {
        setLoading(false);
      } */

      console.log("Products2: ", Products2);
    } catch (e) {
      console.log(e);
    }
  };

  //#endregion

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
      fetchCategories();
      fetchProducts();
      fetchProductsDesc();
    } else {
      firebase.app(); // if already initialized, use that one
      fetchSlider();
      fetchCategories();
      fetchProducts();
      fetchProductsDesc();
    }
  }, []);

  return (
    <ScrollView style={{ marginTop: 20, backgroundColor: "#fff" }}>
      {/*  <Text>{Categories.length}</Text> */}
      <View
        style={{
          paddingTop: 20,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 0 }}>
          <View style={{ flex: 4, alignItems: "flex-start" }}>
            <Icon
              name="menu"
              type="Feather"
              color="#555"
              size={20}
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon
              name="smartphone"
              type="feather"
              color="#555"
              size={20}
              onPress={() => show()}
              //    onPress={() => myCustomeShare()}
            />
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Icon
              name="filter"
              type="feather"
              color="#555"
              size={20}
              onPress={() => dispatch(getcategories())}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: -20,
            marginRight: -20,
          }}
        >
          <Carousel
            layout={"default"}
            //  ref={(ref) => (carousel = ref)}
            data={SliderImages}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            renderItem={_renderItem}
            onSnapToItem={(index) => setindex(index)}
          />
        </View>

        {/*     <SearchBar
          placeholder="Search Your Product..."
          inputContainerStyle={{
            backgroundColor: "#FFF",
            //  padding: 10,
            //  fontWeight: "bold",
            borderBottomColor: "#008080",
            borderBottomWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: -2, height: 5 },
            shadowOpacity: 0.1,
            shadowRadius: 0,
            elevation: 2,
          }}
          containerStyle={{
            backgroundColor: "#F2F2F2",
          }}
          platform="ios"
        /> */}

        <TouchableOpacity onPress={() => show()}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 0,
              marginBottom: 20,
              marginRight: -20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 3 }}>
              <Title style={{ color: "#ffb514" }}>
                Categories{/* {categories.cateogires.length} */}
              </Title>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, alignItems: "flex-end" }}>
                <Caption style={{ color: "#434343" }}>See All</Caption>
              </View>
              <View style={{ flex: 1, marginLeft: -15 }}>
                <Icon
                  name="chevron-right"
                  type="feather"
                  color="#434343"
                  size={20}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <FlatList
          horizontal={true}
          data={Categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Categories) => Categories.Id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductsofCategory", { id: item.Id })
                }
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 80,
                      width: deviceWidth / 2.4,
                      borderRadius: 5,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.CategoryImage }}
                  />
                  <Paragraph
                    style={{
                      textAlign: "center",
                      color: "#434343",
                      marginTop: 5,
                    }}
                  >
                    {item.CategoryName}
                  </Paragraph>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Divider orientation="horizontal" style={{ marginTop: 20 }} />

      <TouchableOpacity onPress={() => show()}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 3 }}>
            <Title style={{ color: "#ffb514" }}>Featured</Title>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Caption style={{ color: "#434343" }}>See All</Caption>
            </View>
            <View style={{ flex: 1, marginLeft: -15 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#434343"
                size={20}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ paddingLeft: 10 }}>
        <FlatList
          horizontal={true}
          data={Products1}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Products1) => Products1.Id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetail", { id: item.Id })
                }
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 180,
                      width: deviceWidth / 3,

                      //overflow: "visible",
                    }}
                    resizeMode="cover"
                    source={{ uri: item.ProductImage }}
                  />
                  <Paragraph
                    style={{
                      color: "#434343",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.ProductName}
                  </Paragraph>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 5,
                      //  marginTop: 10,
                    }}
                  >
                    Rs {item.Price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Divider orientation="horizontal" style={{ marginTop: 20 }} />

      <TouchableOpacity onPress={() => show()}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 3 }}>
            <Title style={{ color: "#ffb514" }}>Latest</Title>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Caption style={{ color: "#434343" }}>See All</Caption>
            </View>
            <View style={{ flex: 1, marginLeft: -15 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#434343"
                size={20}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
        <FlatList
          horizontal={true}
          data={Products2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Products2) => Products2.Id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetail", { id: item.Id })
                }
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 150,
                      width: deviceWidth / 2.2,
                      borderRadius: 5,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.ProductImage }}
                  />
                  <Paragraph
                    style={{
                      color: "#434343",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.ProductName}
                  </Paragraph>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 5,
                      //  marginTop: 10,
                    }}
                  >
                    Rs {item.Price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Divider orientation="horizontal" style={{ marginTop: 20 }} />

      <TouchableOpacity onPress={() => show()}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 20,
            marginLeft: 20,
            marginRight: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 3 }}>
            <Title style={{ color: "#ffb514" }}>Comming Soon</Title>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Caption style={{ color: "#434343" }}>See All</Caption>
            </View>
            <View style={{ flex: 1, marginLeft: -15 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#434343"
                size={20}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{ paddingLeft: 10, paddingBottom: 10 }}>
        <FlatList
          horizontal={true}
          data={Products1}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(Products1) => Products1.Id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ProductDetail", { id: item.Id })
                }
                style={{
                  marginRight: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      height: 150,
                      width: deviceWidth / 2.2,
                    }}
                    resizeMode="cover"
                    source={{ uri: item.ProductImage }}
                  />
                  <Paragraph
                    style={{
                      color: "#434343",
                      marginTop: 5,
                      marginLeft: 5,
                    }}
                  >
                    {item.ProductName}
                  </Paragraph>
                  <Text
                    style={{
                      color: "gray",
                      marginLeft: 5,
                      //  marginTop: 10,
                    }}
                  >
                    Rs {item.Price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <Divider orientation="horizontal" style={{ marginTop: 20 }} />
    </ScrollView>
  );
};

/* const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  // console.log();
  return {
    getCategory: () => dispatch(getproductsofcategories),
  };
}; */

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    //  borderColor: "gray",
    // borderWidth: 1,
    //  backgroundColor: "dodgerblue",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageSlider: {
    borderRadius: 10,
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
});

export default Home4;
