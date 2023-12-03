import { StyleSheet } from "react-native";
import colors from "../../styleconstants/colors";

export const styles = StyleSheet.create({
    item:{
        color:colors.primaryGreen,
        fontSize:12,
        fontWeight:"bold",
        textAlign:'center',
        lineHeight:14.52,
        overflow:'scroll',
        padding:8,
        paddingHorizontal:12,
        textTransform:'capitalize'
    },
    selectedItem:{
        color:colors.primaryWhite,
    },
    itemContainer:{
        marginRight:8,
        marginBottom:14,

    },
    selectItemContainer:{
        backgroundColor:colors.primaryGreen,
        borderRadius:10
    },
    flatListStyles:{
        marginBottom:20,
        marginTop:24,
        marginHorizontal:-24
    }
})