import React, {useState} from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import styles from './LoginScreen.styles.js';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
//import {auth} from '../../firebase';
const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        auth
        .createUserWithEmailAndPassword(username, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error.message))

    }

    return (
        <KeyboardAvoidingView style = {styles.container} behavior="padding">
            <Image source={require('../../assets/beyazlogo.png')} style= {{width: 200, height: 200,}}/>
            <View styles = {styles.inputContainer}>
                <Input placeholderName="UserName" on/>
                <Input placeholderName="Password" show={false}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button text ="Login" email = {email} password = {password} style={styles.loginButton}/>
                <Button text ="Register" /*onPress={handleSignUp}*/ />
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;

