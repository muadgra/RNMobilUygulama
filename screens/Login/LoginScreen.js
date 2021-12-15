import React, {useState, useEffect} from 'react'
import { Image, ImageBackground, KeyboardAvoidingView, View } from 'react-native'
import styles from './LoginScreen.styles.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { authentication } from '../../firebase.js';

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

