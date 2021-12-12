import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './HomeScreen.styles.js';
import {getAuth} from 'firebase/auth';

const HomeScreen = ({navigation}) => {
    return (
        
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <View>
                <View style = {styles.greet_text_container}>
                    <Text style= {styles.greet_text}>Hoşgeldiniz!</Text>
                    <Text style= {styles.greet_text}>Geniş yelpazeli ürünlerimize göz attınız mı?</Text>
                    {/*<Button onPress = {logOut} text = "Log Out"/>*/}
                </View>
            </View>
        
        </ImageBackground>
    )
}

export default HomeScreen;


