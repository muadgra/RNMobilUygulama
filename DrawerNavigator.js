import React from "react";

import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { getAuth} from "firebase/auth";
import Contact from "./screens/Contact/Contact";
import BottomTabNavigator from "./BottomTabNavigator";
const Drawer = createDrawerNavigator();



function LogoutButton(props) {
  let is_signed;
  is_signed = getAuth().currentUser;

  return (
    
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      {is_signed &&
      <DrawerItem
        label="Logout"
        onPress={props.logOut}
      />}
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {
  const navigation = useNavigation();
  let a;
  a = false;
  const logOut = () => {
    getAuth().signOut()
    .then(() => {
        navigation.navigate("Login");
    })
    .catch(error => alert(error.message));
  }
  return (
    <Drawer.Navigator drawerContent={(props) =>  <LogoutButton {...props}  logOut={logOut} />}>
      <Drawer.Screen name="ProductsScreen" component={BottomTabNavigator} options={{ headerShown: true}}/>
      <Drawer.Screen name="Contact" component={Contact} options={{ headerShown: true}} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;