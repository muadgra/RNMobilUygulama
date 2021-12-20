import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, View } from 'react-native';
import styles from './DetailScreen.style';
import { collection, query, where } from "firebase/firestore";
import { getFirestore, getDocs } from 'firebase/firestore';
import { app } from '../../firebase';
const DetailScreen = ({route}) => {
    const urunAd = route.params.product_title;
    const [urun, setUrun] = useState();
    useEffect(async ()=> {
        console.log(route.params.product_title);
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where("product_title", "==", route.params.product_title));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setUrun(doc.data().product_description)
        });

    },[])
    
    return(
        <SafeAreaView>
            <View style= {{alignItems: 'center'}}>
                <Text>{urunAd}</Text>
                <Text>{urun}</Text>
            </View>
        </SafeAreaView>
    )
}
export default DetailScreen;