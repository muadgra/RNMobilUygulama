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
    
    async function sendPushNotification(expoPushToken) {
        const message = {
          to: expoPushToken,
          sound: 'default',
          title: 'Giris yapildi.',
          body: 'Uygulamamiza hosgeldiniz!',
          data: { someData: 'goes here' },
        };
      
        await fetch('https://exp.host/--/api/v2/push/send', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(message),
        });
      }
      
    useEffect(async ()=> {
      let token;
        
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            await storage.setItem('expopushtoken', "");
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;

          console.log(token);
          await storage.setItem('expopushtoken', token);
          setDeneme(token);
          
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }

        const db = getFirestore(app);
        const tokenCollection = collection(db, 'users');
        const docRef = doc(db, "users", getAuth().currentUser.email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data().token);
        } else {
            console.log("No such document!");
        }
        setExpoPushToken(docSnap.data().token);
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
          });
          responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
          });
          
      
    }, [])

    return (
        
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <View>
                <View style = {styles.greet_text_container}>
                    <Text style= {styles.greet_text}>Hoşgeldiniz!</Text>
                    <Text style= {styles.greet_text}>Geniş yelpazeli ürünlerimize göz attınız mı?</Text>
                    <Text>Deneme : {deneme}</Text>
                </View>
                
            </View>
        
        </ImageBackground>
    )
}

export default HomeScreen;


