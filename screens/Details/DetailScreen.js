import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, Image, View, ImageBackground } from 'react-native';
import styles from './DetailScreen.style';
import { collection, query, where, getDocs } from "firebase/firestore";
import { getFirestore} from 'firebase/firestore';
import { db } from "../../firebase";
import { app } from '../../firebase';
const DetailScreen = ({route}) => {
    const item = route.params?.item;
    const [urunAd, setUrunAd] = useState(route.params.product_title);
    const [urunFiyat, setUrunFiyat] = useState(route.params.product_price);
    const [urunDescription, setUrunDescription] = useState(route.params.product_description);
    const [urunURL, setUrunURL] = useState(route.params.product_img);

    useEffect(async ()=> {
        console.log(route.params.product_title);
        const db = getFirestore(app);
        const productsCollection = collection(db, 'products');
        const q = query(productsCollection, where("product_title", "==", route.params.product_title));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUrunAd(doc.data().route.params.product_title)
            setUrunFiyat(doc.data().product_price)
            setUrunDescription(doc.data().product_description);
            setUrunURL(doc.data().product_img);
        });

    })
    
    return(
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <SafeAreaView>
                <View style= {{alignItems: 'center'}}>
                        <Image 
                            style = {styles.image} 
                            source = {{uri: item.product_img}}/>
                        <View style = {styles.body_container}>
                            <Text style = {styles.title}>{item.product_title}</Text>
                            <Text style = {styles.price}>{item.product_price} TL</Text>
                            <Text style = {styles.description}>{item.product_description}</Text>
                        </View>
                </View>            
            </SafeAreaView>
        </ImageBackground>
    )
}
export default DetailScreen;