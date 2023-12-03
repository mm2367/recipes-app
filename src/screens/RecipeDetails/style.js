import { StyleSheet } from "react-native";
import colors from "../../styleconstants/colors";

const styles=StyleSheet.create({
    container:{
        paddingHorizontal:24,
        flex:1
    },
    image:{
        width:'100',
        height:180,
        borderRadius:10
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgba(217,217,217,0.5)',
        borderRadius:8,
        paddingHorizontal:12,
        paddingVertical:10,
        marginVertical:4,
    },
    key:{
        fontSize:12,
        color:colors.black,
        textTransform:"capitalize",
    },
    value:{
        fontSize:12,
        color:colors.secondaryLightGray,
    },
    instructionRow:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:12,
        paddingHorizontal:8,
    },
    index:{
        fontSize:20,
        color:colors.secondaryGray,
        marginRight:16
    },
    instructionText:{
        fontSize:14,
        color:colors.black,
    },

})

export default styles