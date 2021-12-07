import React, {useEffect} from 'react'
import { Text, View } from 'react-native'
import styles from './HomeScreen.styles.js';
import Button from '../../components/Button';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
    const logOut = () => {
        getAuth().signOut()
        .then(() => {
            navigation.replace("Login");
        })
        .catch(error => alert(error.message));
    }
    
    return (
        <View>
            <Text style = {styles.home_screen_title}>Home Screen</Text>
            <Text>Logged User: {getAuth().currentUser?.email}</Text>
            <Button onPress = {logOut} text = "Log Out"/>
        </View>
    )
}

export default HomeScreen;


