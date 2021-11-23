import React, {useState} from "react";
import { TextInput } from "react-native";
import styles from "./Input.styles.js";

const Input = ({placeholderName, show=true, value, setValue}) => {
     
    return(
        <TextInput style= {styles.input} 
            placeholder={placeholderName}
            value={value}
            onChangeText={setValue}
            styles={styles.input}
            secureTextEntry={!show}
        />
    )
}
export default Input;