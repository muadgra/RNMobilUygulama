import React, { useEffect, useState } from "react";
import { ImageBackground, KeyboardAvoidingView, View, TextInput } from "react-native";
import styles from './CreateProduct.style';
import Button from '../../components/Button/Button';
import { doc, setDoc, getDocs, collection } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
const CreateProduct = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const UrunOlustur = async () => {
        const db = getFirestore()
        await setDoc(doc(db, "products", makeid(12)), {
            product_title: title,
            product_price: price,
            product_img: img,
            product_description: description,
          });    
          const querySnapshot = await getDocs(collection(db, "users"));
      
          var expoPushToken = [];
          await querySnapshot.forEach(async (doc) => {
            expoPushToken.push(doc.data().token);
          });
          
          const message = {
            to: expoPushToken,
            sound: 'default',
            title: 'Yeni Bir Urun Var!',
            body: 'Urunlere göz atmak icin uygulamamiza girin.',
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
          setTitle("");
          setPrice(0);
          setDescription("");
          setImg("");
    }
    return(
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <KeyboardAvoidingView>
                    <TextInput placeholder="Ürün Adı" value={title} onChangeText={(text) => setTitle(text)} style={styles.urun_input} placeholderTextColor="#1F1515"/>
                
                    <TextInput placeholder="Ürün Fiyatı" value={price} onChangeText={(text) => setPrice(parseInt(text))} style={styles.urun_input} placeholderTextColor="#1F1515"/>
                
                    <TextInput placeholder="Ürün Açıklaması" value={description} onChangeText={(text) => setDescription(text)} style={styles.urun_input} placeholderTextColor="#1F1515"/>
                
                    <TextInput placeholder="Ürün Resmi (URL)" value={img} onChangeText={(text) => setImg(text)} style={styles.urun_input} placeholderTextColor="#1F1515"/>
               
                
            </KeyboardAvoidingView>
            <Button text="Oluştur" onPress = {UrunOlustur} />
        </ImageBackground>

    )
}
export default CreateProduct;