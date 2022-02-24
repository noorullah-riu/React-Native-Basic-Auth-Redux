import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Provider as PaperProvider,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

//#region  Drawer Tab
import { DrawerContent } from "./src/DrawerTab/DrawerContent";
import Drawer1 from "./src/DrawerTab/Drawer1";
import Drawer2 from "./src/DrawerTab/Drawer2";
import Favourite from "./src/DrawerTab/Favourite";
import ShippingDetail from "./src/DrawerTab/ShippingDetail";
import PersonalDetails from "./src/DrawerTab/PersonalDetails";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Toast from "react-native-toast-message";

//#endregion

import ChooseScreen from "./src/LoginStack/ChooseScreen";
import Login from "./src/LoginStack/Login";
import SignUp from "./src/LoginStack/SignUp";

//#region  Bottom Tab
import Home from "./src/BottomTab/Home";
import ProductsofCategory from "./src/BottomTab/ProductsofCategory";
import Cart from "./src/BottomTab/Cart";
import Shop from "./src/BottomTab/Shop";
import Home4 from "../my-app-demo/src/Home5";
import Carousel from "../my-app-demo/src/Carousel";
import ProductDetail from "./src/BottomTab/ProductDetail";

import CheckOut from "./src/BottomTab/CheckOut";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//#endregion

const LoginStack = createStackNavigator();

export default function LoginStackFunction() {
  return (
    /*     <PaperProvider theme={PaperDarkTheme}> 
 <NavigationContainer theme={DarkTheme}> */
    <NavigationContainer>
      <LoginStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <LoginStack.Screen name="ChooseScreen" component={ChooseScreen} />
        <LoginStack.Screen name="SignUp" component={SignUp} />
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="MainAPp" component={Apolo} />
      </LoginStack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
    /*   </PaperProvider> */
  );
}

const CartStack = createStackNavigator();

function CartStackFunction() {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="Cart" component={Cart} />
      <CartStack.Screen
        options={{
          headerShown: true,
          title: "Product Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </CartStack.Navigator>
  );
}

const HomeStack = createStackNavigator();

function HomeStackFunction() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="Home1" component={Home} />
      <HomeStack.Screen
        options={{
          headerShown: true,
          title: "Product Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ProductDetail"
        component={ProductDetail}
      />

      <HomeStack.Screen
        options={{
          headerShown: true,
          title: "Product Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ProductsofCategory"
        component={ProductsofCategory}
      />
    </HomeStack.Navigator>
  );
}

const ShopStack = createStackNavigator();

function ShopStackFunction() {
  return (
    <ShopStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ShopStack.Screen name="Shop" component={Shop} />
      <ShopStack.Screen
        options={{
          headerShown: true,
          title: "Product Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </ShopStack.Navigator>
  );
}

const CheckOutStack = createStackNavigator();

function CheckOutStackFunction() {
  return (
    <CheckOutStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CheckOutStack.Screen name="CheckOut" component={CheckOut} />
      <CheckOutStack.Screen
        options={{
          headerShown: true,
          title: "Product Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </CheckOutStack.Navigator>
  );
}

const Tab3 = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab3.Navigator
      screenOptions={{
        headerShown: false,
      }}
      activeColor="#FFB22A"
      inactiveColor="#FFB01A" //"#8689af"
      barStyle={{ backgroundColor: "white" }}
      // shifting={false}
      // labeled={true}
    >
      <Tab3.Screen
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={22} />
          ),
        }}
        name="HomeStackFunction"
        component={HomeStackFunction}
      />
      <Tab3.Screen
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="opencart" color={color} size={22} />
          ),
        }}
        name="Cart2"
        component={CartStackFunction}
      />
      <Tab3.Screen
        options={{
          tabBarLabel: "Shop",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shopping-search"
              color={color}
              size={22}
            />
          ),
        }}
        name="ShopStackFunction"
        component={ShopStackFunction}
      />
      <Tab3.Screen
        options={{
          tabBarLabel: "CheckOut",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" color={color} size={22} />
          ),
        }}
        name="CheckOutStackFunction"
        component={CheckOutStackFunction}
      />
    </Tab3.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Apolo(props) {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: "#12142b",
        //  width: 240,
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={MyTabs}
      />
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
      <Drawer.Screen
        options={{
          headerShown: true,
          title: "Shipping Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="ShippingDetail"
        component={ShippingDetail}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          title: "My Favourite",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="Favourite"
        component={Favourite}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
          title: "Personal Details",
          headerTintColor: "#FFB22A",
          headerTitleStyle: {
            fontSize: 16,
          },
        }}
        name="PersonalDetails"
        component={PersonalDetails}
      />
    </Drawer.Navigator>
  );
}
