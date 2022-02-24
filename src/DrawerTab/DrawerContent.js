import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  Title,
  Caption,
  Avatar,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Headline,
  Subheading,
  Divider,
} from "react-native-paper";
import { Icon } from "react-native-elements";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Toast from "react-native-toast-message";

export function DrawerContent(props) {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  function show() {
    Toast.show({
      type: "info",
      autoHide: false,
      position: "top",
      text1: "Hello",
      text2: "This is some something ",
    });
  }

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: 10,
            paddingTop: 0,
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Avatar.Image
              size={70}
              source={{
                uri: "https://picsum.photos/200",
              }}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Title>Jhon Doe</Title>
            <Caption>JhonDoe@Gmail.com</Caption>
          </View>
        </View>
        <Divider orientation="horizontal" style={{ marginTop: 20 }} />

        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              paddingBottom: 10,
              alignItems: "center",
              // marginVertical: 20,
              //    borderColor: "white",
              //   borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon
                name="home"
                type="feather"
                color="#FFB22A"
                size={20}
                onPress={() => alert("Profile Function ")}
              />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Home</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity onPress={() => show()}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              // marginVertical: 20,
              //    borderColor: "white",
              //   borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon
                name="shopping-bag"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>My Orders</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity
          onPress={() => props.navigation.navigate("ShippingDetail")}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              // marginVertical: 20,
              //    borderColor: "white",
              //   borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="phone" type="feather" color="#FFB22A" size={20} />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Shipping Details</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity
          onPress={() => props.navigation.navigate("PersonalDetails")}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
              // marginVertical: 20,
              //    borderColor: "white",
              //   borderWidth: 1,
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="settings" type="feather" color="#FFB22A" size={20} />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Personal Details</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity
          onPress={() => props.navigation.navigate("Favourite")}
        >
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="heart" type="feather" color="#FFB22A" size={20} />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Favourites</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity onPress={() => show()}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon name="star" type="feather" color="#FFB22A" size={20} />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Rate us</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />

        <TouchableOpacity onPress={() => show()}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon
                name="share-2"
                type="feather"
                color="#FFB22A"
                size={20}
                onPress={() => alert("Profile Function ")}
              />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Refer A Friend</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
                onPress={() => alert("Profile Function ")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />
        <TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon
                name="paint-brush"
                type="font-awesome"
                color="#FFB22A"
                size={20}
                onPress={() => alert("Profile Function ")}
              />
            </View>
            <View style={{ flex: 4, alignItems: "flex-start" }}>
              <Subheading>Theme</Subheading>
            </View>
            <View style={{ flex: 2, marginRight: 10 }}>
              <Switch
                color={"#FFB22A"}
                value={isSwitchOn}
                onValueChange={onToggleSwitch}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />
        <TouchableOpacity onPress={() => show()}>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 10,
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <View style={{ flex: 1 }}>
              <Icon
                name="help-circle"
                type="feather"
                color="#FFB22A"
                size={25}
                onPress={() => alert("Profile Function ")}
              />
            </View>
            <View style={{ flex: 5, alignItems: "flex-start" }}>
              <Subheading>Help</Subheading>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                name="chevron-right"
                type="feather"
                color="#FFB22A"
                size={20}
                onPress={() => alert("Profile Function ")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider orientation="horizontal" style={{ marginLeft: 40 }} />
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          style={{ backgroundColor: "#eee" }}
          icon={({}) => (
            <Icon
              name="log-out"
              type="feather"
              color="#FFB22A"
              size={20}
              onPress={() => props.navigation.navigate("ChooseScreen")}
            />
          )}
          label="LogOut"
          //  labelStyle={{ color: "#7a7ea3" }}
        />
      </Drawer.Section>
    </View>
  );
}
