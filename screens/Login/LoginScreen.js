import React, {useState, useEffect} from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import styles from './LoginScreen.styles.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAGwOaQw0-oedaYbhnfTiv7QVa5fYEJRkA",
    authDomain: "dukkanproje.firebaseapp.com",
    projectId: "dukkanproje",
    storageBucket: "dukkanproje.appspot.com",
    messagingSenderId: "909717008381",
    appId: "1:909717008381:web:06cd55b2009a565fcfb394",
    measurementId: "G-RZZN3DXS6J"
  };


const LoginScreen = ({navigation}) => {
    const app = initializeApp(firebaseConfig);
    //const db = firestore(app);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        let auth;
        auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){

                console.log(user.email);
                navigation.replace("Home");
            }
        })
        return unsubscribe;
    }, [])

    const handleSignUp = () => {
        let auth;
        auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
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
        let auth;
        auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
    return (
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
    )
}

export default LoginScreen;

