import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styleconstants/colors";
const {width}=Dimensions.get('window');
const styles =StyleSheet.create({
    container:{
        borderRadius:12,
        backgroundColor:'rgba(217,217,217,0.5)',
        padding:10,
        width: width*0.4,
        marginVertical:32,
        marginRight:15,
    },
    title:{
        color:colors.gray,
        fontSize:14,
        fontWeight:"bold",
        textAlign:'center',
        marginVertical:16
    },
    label:{
        color:colors.secondaryLightGray,
        fontSize:11,
        marginTop:8,
        marginBottom:4
    },
    value:{
        color:colors.gray,
        fontSize:11,
        fontWeight:'bold'
    },
    timerIcon: {
        width: 17,
        height: 17,
        marginRight: 8
    },
    foodImage:{
        width:80,
        height:80,
        borderRadius:50,
        marginTop:-40,
        alignSelf:'center'
    },


})

export default styles;
