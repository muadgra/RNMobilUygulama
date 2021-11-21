import React, {useState} from "react";
import { TextInput } from "react-native";
import styles from "./Input.styles.js";

const Input = ({placeholderName, show=true}) => {
    const [userName, setText] = useState("");
    return(
        <TextInput style= {styles.input}
            placeholder={placeholderName}
            value={userName}
            onChangeText={text => {
                setText(text);
                console.log(text);
            }}
            styles={styles.input}
            secureTextEntry={!show}
        />
    )
}
export default Input;