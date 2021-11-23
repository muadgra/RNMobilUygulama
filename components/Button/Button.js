import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles.js';
const Button = ({text, onPress, email, password}) => {
    return(
        <TouchableOpacity onPress={onPress} style = {styles.button}>
            <Text style ={styles.button}>{text}</Text>
        </TouchableOpacity>

    )

}
export default Button;