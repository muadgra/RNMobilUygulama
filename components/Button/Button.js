import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles.js';
const Button = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style = {styles.button}>
            <Text>{text}</Text>
        </TouchableOpacity>

    )

}
export default Button;