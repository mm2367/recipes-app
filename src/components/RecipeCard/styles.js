import { StyleSheet,Dimensions } from "react-native";
import colors from "../../styleconstants/colors";
const {width}=Dimensions.get('window');
const styles =StyleSheet.create({
    container:{
        borderRadius:10,
        backgroundColor:colors.primaryWhite,
        padding:10,
        width: width*0.7,
        marginBottom:32,
        marginTop:36,
        marinRight:16,
        //iOS
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:4
        },
        shadowOpacity: 0.32,
        shadowRadius:5.46,
        // Android
        elevation:9,
    },
    title:{
        color:colors.gray,
        fontSize:14,
        fontWeight:"bold",
        flex:1
    },
    row:{
        flexDirection:'row',
        alignItems:'center'
    },
    footerText:{
        color:colors.secondaryLightGray,
        fontSize:11
    },
    authorImage:{
        width:25,
        height:25,
        marginRight:8,
        borderRadius:20,
        backgroundColor:colors.lightGray
    },
    timerIcon: {
        width: 17,
        height: 17,
        marginRight: 8
    },
    foodImage:{
        width:70,
        height:70,
        borderRadius:50,
        marginTop:-30
    },
    footer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:12
    }


})

export default styles;
