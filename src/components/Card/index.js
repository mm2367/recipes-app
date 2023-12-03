import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./styles";

const Card = ({title, image, style, servings, onPress}) => {
    return (
        <TouchableOpacity  onPress={onPress} style={[styles.container,style]}>
                <Image style={styles.foodImage} source={{uri:image}}/>
                <Text numberOfLines={3} style={styles.title}>{title}</Text>
            {servings?
                <><Text style={styles.label}> Servings</Text>
                <Text style={styles.footerText}> {servings}</Text></>:null}
        </TouchableOpacity>
    );
};

export default React.memo(Card);