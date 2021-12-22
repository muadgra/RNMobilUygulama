import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    description: {
        fontSize: 16,
    },
    price: {
        textAlign: 'left',
        fontSize: 16,
        fontStyle: 'italic',
    },
    image: {
        minWidth: 80,
        minHeight: 80,
        borderRadius: 40,
        margin: 10,
    },


})