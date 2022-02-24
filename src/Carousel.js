//import React, { Component } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Text, View, Dimensions, StyleSheet, Image } from "react-native";

import Carousel from "react-native-snap-carousel"; // Version can be specified in package.json
//import { scrollInterpolator, animatedStyles } from "./animation";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

//export default class ImagTest extends Component {
const Carsol = ({ navigation }) => {
  const [index, setindex] = useState(0);

  const DATA = [];
  for (let i = 0; i < 4; i++) {
    DATA.push(i);
  }

  /* constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  } */

  // _renderItem({ item }) {
  let _renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <Image
          style={styles.itemContainer}
          resizeMode="contain"
          source={{
            uri: "https://cdn1.decoin.io/home/slider/fb_71589353604free.jpg",
          }}
        />
        <Text style={styles.itemLabel}>{index}</Text>
      </View>
    );
  };

  useEffect(() => {
    // action on update of movies
    _renderItem();
  }, []);
  return (
    <View>
      <Carousel
        //    ref={(c) => {    _carousel = c;}}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />

      {/*       <Carousel
        // ref={(c) => (Carousel = c)}
        data={DATA}
        renderItem={_renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        onSnapToItem={(index) => setindex(index)}
        // scrollInterpolator={scrollInterpolator}
        //slideInterpolatedStyle={animatedStyles}
        //  useScrollView={true}
        layout={"tinder"}
        layoutCardOffset={9}
      /> */}
      <Text style={styles.counter}>{index}</Text>
    </View>
  );
};

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

export default Carsol;
