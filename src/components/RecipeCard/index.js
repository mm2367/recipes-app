import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./styles";
import Rating from "../Rating";

const RecipeCard = ({title, author, image, style,rating, time, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.container,style]}>
            <View style={styles.row}>
                <View style={{flex:1}}>
                <Text numberOfLines={1} style={styles.title}>{title}</Text>
            <Rating rating={rating}/>

                </View>
                <Image style={styles.foodImage} source={{uri:image}}/>
            </View>
            <View style={styles.footer}>
                <View style={styles.row}>
                    <Image style={styles.authorImage} source={{uri: author.image}}/>
                    <Text style={styles.footerText}> By {author.name}</Text>
                </View>
                {time ?
                <View style={styles.row}>
                    <Image style={styles.timerIcon} source={require('../../../assets/timer.png')}/>
                    <Text style={styles.footerText}> {time}</Text>
                </View>
                :<View/>}
            </View>
        </View>
        </TouchableOpacity>
    );
};

export default React.memo(RecipeCard);