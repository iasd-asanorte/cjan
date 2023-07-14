import { StyleSheet } from "react-native";
import colors from "./colors";

const sytles = StyleSheet.create({
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,        
        borderColor: colors.secondaryBg,
        borderWidth: 10,
    },
    naipe: {
        backgroundColor: colors.white,
        color: colors.secondaryBg,
        borderRadius: 10,
        marginTop: -20,
    },
    textNaipe: {
        color: colors.neutro,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 3,
    },
});

export default sytles;