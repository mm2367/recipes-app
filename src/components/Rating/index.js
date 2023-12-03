import React from "react";
import {View, Image} from "react-native";
import styles from "./styles";

const Rating=({rating})=>{
    const arr=[1,2,3,4,5]
    const renderStars=()=>{
        return arr.map((star)=>{
            if(Math.round(rating)>=star) {
                return (
                    <Image key={star} style={styles.rating} source={require('../../../assets/starfull.png')}/>
                )
            }
            return(
                <Image key={star} style={styles.rating} source={require('../../../assets/starempty.png')}/>
                )

        })
    }
    return(
    <View style={styles.row}>
        {renderStars()}
    </View>
    );
};

export default React.memo(Rating);