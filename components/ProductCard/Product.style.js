import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderColor: '#bdbdbd',
        borderWidth: 1,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#eeeeff',
        flexDirection: 'row',
        
    },
    image: {
        minWidth: 80,
        minHeight: 80,
        borderRadius: 40,
        margin: 10,
    },
    body_container: {
        paddingLeft: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic',
    },



})