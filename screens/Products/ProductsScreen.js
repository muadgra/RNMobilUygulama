import React, { useEffect, useState } from "react";
import {ImageBackground, View, FlatList, SafeAreaView, TextInput} from 'react-native';
import {collection, getDocs, deleteDoc, query, where, getDoc} from 'firebase/firestore/lite'
import { db } from "../../firebase";
import ProductCard from "../../components/ProductCard/Product";
import styles from './ProductsScreen.styles';
const ProductsScreen = ({navigation}) => {
    const [products, setProducts] = useState([]);
    const [searched, setSearched] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    const handleProductSelect = async (item) => {
        
        navigation.navigate("DetailScreen", {item});
    }

    useEffect(async () => {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        setProducts(productsSnapshot.docs.map(doc => doc.data()));
        setFilteredList(productsSnapshot.docs.map(doc => doc.data()));
        
    }, []);

   const handleSearch = text => {
       setSearched(text);
       const filtered = products.filter(urun => {
            const searchedText = text.toLowerCase();
            const currentTitle = urun.product_title.toLowerCase();

            return currentTitle.indexOf(searchedText) > -1
       })
       setFilteredList(filtered);
   }

    const renderProducts = ({item}) => <ProductCard product={item} onClick={() => handleProductSelect(item)}/>; 
    return(
        <ImageBackground source={require('../../assets/arkaplan.jpg')} style = {styles.container}>
            <View style= {styles.container}>
                <View style = {styles.transparent_search_bar}>
                <TextInput style = {styles.search_bar} 
                placeholder="Aramak istediginiz urunu giriniz."
                value = {searched}
                onChangeText = {handleSearch}
                />
                </View>
                <FlatList numColumns={1}
                    data={filteredList}
                    renderItem={renderProducts} />
            </View>
        </ImageBackground>
        )
    }
export default ProductsScreen;