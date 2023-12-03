import { StyleSheet } from "react-native";
import colors from "../../styleconstants/colors";

const styles=StyleSheet.create({
    container:{
        backgroundColor: colors.primaryGreen,
        width:'80%',
        flexDirection:'row',
        borderRadius:10,
        padding:15,
        alignItems:'center',
        alignSelf:'center',
        justifyContent:'center',
    },
    text:{
        color: colors.primaryWhite,
        fontSize:16,
        fontWeight:'500'
    },
    icon:{
        width:24,
        height:24,
        marginLeft:16
    }
})

export default styles;