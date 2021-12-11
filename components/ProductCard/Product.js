import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './Product.style';
const ProductCard = ({product, onClick}) => {
    return(
        <TouchableWithoutFeedback onPress = {onClick}>
            <View style = {styles.container}>
                
                <Image 
                    style = {styles.image} 
                     source = {{uri: product.product_img}}/>
                <View style = {styles.body_container}>
                    <Text style = {styles.title}>{product.product_title}</Text>
                    <Text style = {styles.price}>{product.product_price} TL</Text>
                </View>
        </View> 
       </TouchableWithoutFeedback>
    )

}
export default ProductCard;