import React, { useEffect, useState } from "react";
import {View, Image} from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { getAuth} from "firebase/auth";
import Contact from "./screens/Contact/Contact";
import BottomTabNavigator from "./BottomTabNavigator";
import CreateProduct from "./screens/CreateProduct";
import {authentication} from './firebase.js';
const Drawer = createDrawerNavigator();

const DrawerItemWithImage = ({onClick, text, image}) => {
    return(
      <View style = {{flexDirection:'row'}, {width: 250}}>
        <Image style= {{width: 20, height: 20}} source={{uri: image}}/>
        
        <DrawerItem
            label= {text}
            onPress={onClick}
            
          />
      </View>
    )
}

function LogoutButton(props) {
  let is_signed, admin_email;
  is_signed = getAuth().currentUser;
  admin_email = getAuth().currentUser?.email;
  return (
    
    <DrawerContentScrollView {...props}>
      <View style ={{alignItems: 'baseline'}, {justifyContent: 'center'}}>
      <DrawerItemList {...props} />
      {is_signed && admin_email == "mertcangokmen@hotmail.com" &&
        
          <DrawerItemWithImage
          text="Create Product"
          onClick={props.createButton}
          image="https://w7.pngwing.com/pngs/119/701/png-transparent-computer-icons-editing-others-angle-logo-edit-icon.png"
        />
        
      }
      
      {is_signed &&
      <DrawerItemWithImage
        text="Logout"
        onClick={props.logOut}
        image="https://toppng.com//public/uploads/preview/logout-11551049168o9cg0mxxib.png"
      />}
      </View>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();
  
  
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
    <Drawer.Navigator drawerContent={(props) =>  <LogoutButton {...props}  logOut={logOut} createButton = {createButton}/>}>
      <Drawer.Screen name="ProductsScreen" component={BottomTabNavigator} options={{ headerShown: true}}/>
      <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: true}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;