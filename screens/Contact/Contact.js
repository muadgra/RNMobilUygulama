import React from "react";
import {View, Text, ImageBackground} from 'react-native';
import styles from './Contact.styles';
const Contact = () => {
    return(
        
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <View style = {styles.text_container}>
                <Text style = {styles.big_text}>
                    Bir sorunla mı karşılaştınız?
                </Text>
                <Text style = {styles.medium_text}>Bize ulaşın.</Text>

                <Text style= {styles.medium_text}>
                    Tılsım Ası Atölyesi olarak siz müşterilerimizin fikirlerine ve düşüncelerine önem veriyoruz.
                </Text>
                <Text style= {styles.small_text}>İletişim için: tilsimasiatolyesi@gmail.com</Text>
            </View>
        </ImageBackground>
    );
}

export default Contact;