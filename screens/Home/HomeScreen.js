import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './HomeScreen.styles.js';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <ImageBackground source={require('../../assets/arkaplan.jpg')}>
                <View>
                    <Text >Home Screen</Text>
                    <Text>Logged User: {getAuth().currentUser?.email}</Text>
                    {/*<Button onPress = {logOut} text = "Log Out"/>*/}
                </View>
            </ImageBackground>
        </View>
    )
}

export default HomeScreen;


