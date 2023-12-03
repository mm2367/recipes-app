import React from "react";
import {Text} from "react-native";
import styles from "./styles";

const Title=({text,style,type})=>{
    return(
    <Text style={[type==='primary'? styles.primary:styles.secondary,style]}>{text}</Text>
    );
};

Title.defaultProps={
    text:'Title'

}
export default React.memo(Title);