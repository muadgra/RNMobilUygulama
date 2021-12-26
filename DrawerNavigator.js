import React, { useEffect, useState } from "react";
import {View, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { getAuth} from "firebase/auth";
import BottomTabNavigator from "./BottomTabNavigator";
const Drawer = createDrawerNavigator();
const DrawerItemWithImage = ({onClick, text, image}) => {
    return(
      <View style = {{flexDirection:'row'}, {width: 250}}>
        <Image style= {{width: 20, height: 20}} source={{uri: image}} />
        
        <DrawerItem
            label= {text}
            onPress={onClick}  
          />
      </View>
    )
}
function Buttons(props) {
  let is_signed, admin_email;
  is_signed = getAuth().currentUser;
  admin_email = getAuth().currentUser?.email;
  return (
    
    <DrawerContentScrollView {...props} contentContainerStyle={{alignItems: 'flex-end'}}>
      <View style ={{alignItems: 'baseline'}, {justifyContent: 'center', alignItems:'baseline'}}>
      
      <DrawerItemWithImage 
        text="Home"
        onClick = {props.goHome}
        image="https://cdn4.iconfinder.com/data/icons/mobile-app-navigation-line-style/32/Home-512.png"
      />
      <DrawerItemWithImage
        text="Contact"
        onClick = {props.goContact}
        image="https://cdn2.iconfinder.com/data/icons/250-perfect-vector-pictograms/48/8.1-512.png"
      />

      {is_signed && admin_email == "mertcangokmen@hotmail.com" &&
        
          <DrawerItemWithImage
          text="Create Product"
          onClick={props.createButton}
          image="https://cdn2.iconfinder.com/data/icons/250-perfect-vector-pictograms/47/8.12-512.png"
        />
        
      }
      {is_signed &&
      <DrawerItemWithImage
        text="Logout"
        onClick={props.logOut}
        image="https://cdn4.iconfinder.com/data/icons/navigation-40/24/exit-512.png"
      />}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();
  
  const goContact = () => {
    navigation.navigate("Contact");
  }
  const goHome = () => {
    navigation.navigate("Home");
  }
  const logOut = () => {
    getAuth().signOut()
    .then(() => {
        navigation.navigate("Login");
    })
    .catch(error => alert(error.message));
  }
  const createButton = () => {
    navigation.navigate("CreateProduct");
  }

  return (
    <Drawer.Navigator drawerContent={(props) =>  <Buttons {...props}  logOut={logOut} 
    goHome={goHome} goContact={goContact} createButton = {createButton}/>}>
      
      <Drawer.Screen name="ProductsScreen" component={BottomTabNavigator} options={{ headerShown: true, title: "Tılsım Ası Atölyesi"}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;