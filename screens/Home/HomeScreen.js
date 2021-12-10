import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './HomeScreen.styles.js';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
    const logOut = () => {
        getAuth().signOut()
        .then(() => {
            navigation.navigate("Login");
        })
        .catch(error => alert(error.message));
    }
    
    return (
        <ImageBackground 
                 resizeMode='cover' 
                 source={require('../../assets/arkaplan.jpg')}>
            <View>
                <Text style = {styles.home_screen_title}>Home Screen</Text>
                <Text>Logged User: {getAuth().currentUser?.email}</Text>
                {/*<Button onPress = {logOut} text = "Log Out"/>*/}
            </View>
        </ImageBackground>
    )
}

export default HomeScreen;


