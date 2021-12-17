import React, { useEffect } from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import styles from './DetailScreen.style';
import { db } from '../../firebase';
import { collection, query, where } from "firebase/firestore";
const DetailScreen = ({route}) => {
    const urunAd = route.params.product_title;
    useEffect(()=> {
        console.log(route.params.product_title);



    },[])
    
    return(
        <SafeAreaView>
            <View style= {{alignItems: 'center'}}>
                <Text>{urunAd}</Text>
            </View>
        </SafeAreaView>
    )
}
export default DetailScreen;