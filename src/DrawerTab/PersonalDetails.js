import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { color } from "react-native-elements/dist/helpers";
import {
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  TextInput,
  Button,
  Avatar,
  Subheading,
} from "react-native-paper";

import * as Animatable from "react-native-animatable";

var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;

const PersonalDetails = () => {
  const [User_Adress, setUser_Adress] = useState();
  const [User_City, setUser_City] = useState();
  const [User_State, setUser_State] = useState();
  const [User_Country, setUser_Country] = useState();

  return (
    <View
      style={{
        backgroundColor: "#FFB22A",
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Avatar.Image
          size={100}
          source={{
            uri: "https://picsum.photos/200",
          }}
        />
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={{
          flex: 3,
          backgroundColor: "#fff",
          borderTopRightRadius: 30,
          marginTop: 0,
          borderTopLeftRadius: 30,
          paddingVertical: 10,
          paddingHorizontal: 30,
        }}
      >
        <TextInput
          mode="outlined"
          //   theme={{ colors.label.pink600 }}
          selectionColor="#F2AE1B"
          underlineColor="#F2AE1B"
          outlineColor="#F2AE1B"
          dense={true}
          placeholder="First Name ..."
          label="First Name"
          value={User_Adress}
          onChangeText={(User_Adress) => setUser_Adress(User_Adress)}
        />
        <TextInput
          mode="outlined"
          //   theme={{ colors.label.pink600 }}
          selectionColor="#F2AE1B"
          underlineColor="#F2AE1B"
          outlineColor="#F2AE1B"
          dense={true}
          placeholder="Last Name..."
          label="Last Name"
          value={User_City}
          onChangeText={(User_City) => setUser_City(User_City)}
        />
        <TextInput
          mode="outlined"
          //   theme={{ colors.label.pink600 }}
          selectionColor="#F2AE1B"
          underlineColor="#F2AE1B"
          outlineColor="#F2AE1B"
          dense={true}
          placeholder="Phone Number..."
          label="Phone Number"
          value={User_State}
          onChangeText={(User_State) => setUser_State(User_State)}
        />
        <TextInput
          mode="outlined"
          //   theme={{ colors.label.pink600 }}
          selectionColor="#F2AE1B"
          underlineColor="#F2AE1B"
          outlineColor="#F2AE1B"
          dense={true}
          placeholder="Email..."
          label="Email"
          value={User_Country}
          onChangeText={(User_Country) => setUser_Country(User_Country)}
        />
        <TextInput
          mode="outlined"
          //   theme={{ colors.label.pink600 }}
          selectionColor="#F2AE1B"
          underlineColor="#F2AE1B"
          outlineColor="#F2AE1B"
          dense={true}
          placeholder="Password..."
          label="Password"
          value={User_Country}
          onChangeText={(User_Country) => setUser_Country(User_Country)}
        />
        <View style={{ marginTop: 20 }}>
          <Button
            style={{ backgroundColor: "#F2AE1B", padding: 5 }}
            icon="chevron-right"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            Update
          </Button>
        </View>
      </Animatable.View>
    </View>
  );
};
export default PersonalDetails;
