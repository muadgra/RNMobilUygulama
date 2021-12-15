import React from "react";
import { ImageBackground, KeyboardAvoidingView, Text } from "react-native";
import styles from './CreateProduct.style';

const CreateProduct = () => {
    return(
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <KeyboardAvoidingView>
                <Text>This is create screen.</Text>
            </KeyboardAvoidingView>
        </ImageBackground>

    )
}
export default CreateProduct;