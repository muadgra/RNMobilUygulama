import React, {useState, useEffect} from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, View } from 'react-native'
import styles from './LoginScreen.styles.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { authentication } from '../../firebase.js';
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
const LoginScreen = ({navigation}) => {
    //const db = firestore(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(authentication, (user) => {
            if(user){

                navigation.navigate("Home");
            }
        })
        return unsubscribe;
    }, [])

    async function registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getDevicePushTokenAsync()).data;
          console.log(token);
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        if (Platform.OS === 'android') {
          Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
          });
        }
        const db = getFirestore()
    await setDoc(doc(db, "users", email), {
         token: token
        });
        return token;
      }  

    
    const handleSignUp = () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            setEmail("");
            setPassword("");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
    
    }
    const handleLogIn = () => {
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            registerForPushNotificationsAsync();
            setEmail("");
            setPassword("");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
        <KeyboardAvoidingView style = {styles.container} behavior="padding">
            <Image source={require('../../assets/tilsimasilogo.png')} style= {{width: 200, height: 200, marginBottom: 25,}}/>
            <View styles = {styles.inputContainer}>
                <Input placeholderName="E-Mail" value = {email} setValue={setEmail}/>
                <Input placeholderName="Password" show={false} value={password} setValue={setPassword}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text ="Login" style={styles.loginButton} onPress={handleLogIn}/>
                <Button text ="Register" onPress={handleSignUp} />
            </View>
        </KeyboardAvoidingView>
        </ImageBackground>
    )
}

export default LoginScreen;

