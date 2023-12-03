import { StyleSheet } from "react-native";
import colors from "../../styleconstants/colors";

const styles=StyleSheet.create({
    background:{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-between',
    },
    container:{
        paddingHorizontal:15,
        paddingVertical:30,
    },
    title:{
        color: colors.primaryWhite,
        fontSize:18,
        textAlign:'center',
        fontWeight:'500'
    },
    logo:{
        width:80,
        height:80,
        alignSelf:'center'
    },
    bigTitle:{
        fontSize:50,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:20,
        paddingHorizontal:40,
        color:colors.primaryWhite
    },
    subTitle:{
        color:colors.primaryWhite,
        fontSize:10,
        textAlign:'center',
        marginTop:30,
        marginBottom:64
    
    }
})

export default styles;