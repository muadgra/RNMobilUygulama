import React, { useEffect, useState, useRef } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from './HomeScreen.styles.js';
import {getAuth} from 'firebase/auth';
import { collection, query, where } from "firebase/firestore";
import { getFirestore, getDocs, doc, getDoc } from 'firebase/firestore';
import { app } from '../../firebase.js';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import storage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeScreen = ({navigation}) => {
    
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const [deneme, setDeneme] = useState("simdilik bos");
    const notificationListener = useRef();
    const responseListener = useRef();
    
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
      }),
    });
    
      

    return (
        
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <View>
                <View style = {styles.greet_text_container}>
                    <Text style= {styles.greet_text}>Hoşgeldiniz!</Text>
                    <Text style= {styles.greet_text}>Geniş yelpazeli ürünlerimize göz attınız mı?</Text>
                    
                </View>
                
            </View>
        
        </ImageBackground>
    )
}

export default HomeScreen;