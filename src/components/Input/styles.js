import { StyleSheet } from "react-native";
import colors from "../../styleconstants/colors";

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        borderRadius:10,
        padding:15,
        borderWidth:1,
        borderColor:colors.lightGray,
        padding: 10,
        marginVertical: 16,



    },
    input:{
        color: colors.black,
        fontSize:12,
    },
    icon:{
        width:24,
        height:24,
        marginRight:16
    }
})

export default styles;