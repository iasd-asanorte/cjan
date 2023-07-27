import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',                        
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,        
    },
    radioCircle: {
        height: 30,
        width: 30,          
        alignItems: 'center',
        justifyContent: 'center',
    },
    radioText: {
        marginLeft: 10,
        fontSize: 14,        
    },
});

export default styles;