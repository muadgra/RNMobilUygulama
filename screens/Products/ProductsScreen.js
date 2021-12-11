import React, { useEffect, useState } from "react";
import {Text, View, FlatList, SafeAreaView} from 'react-native';
import {collection, getDocs} from 'firebase/firestore/lite'
import { db } from "../../firebase";
import ProductCard from "../../components/ProductCard/Product";
const ProductsScreen = () => {
    const [products, setProducts] = useState([]);
    const handleProductSelect = () => {
        {/*navigation.navigate("DetailsScreen", {id}); */}
        console.log("Navigating to Details");
    }
    useEffect(async () => {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);
        setProducts(productsSnapshot.docs.map(doc => doc.data()));
    }, []);

    const renderProducts = ({item}) => <ProductCard product={item} onClick={() => handleProductSelect()}/>; 
    return(
        <FlatList numColumns={2}
            data={products}
            renderItem={renderProducts}/>
        )
    }
export default ProductsScreen;