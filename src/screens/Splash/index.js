import React, {useContext, useEffect} from 'react';
import { View, ImageBackground, Text, Image} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';
import {getRecipesList} from "../../api";
import {RecipesContext} from "../../../App";

const Splash =({navigation})=>{
    const onPress=()=>{
        navigation.navigate('Home')
    }


    return(            
        <ImageBackground style={styles.background} source={require('../../../assets/splash.png')}>
          
            <View style={styles.container}>
                <Image source={require('../../../assets/logo.png')} style={styles.logo}></Image>
                <Text style={styles.title}>100K+ Premium Recipes</Text>
            </View>

            <View style={styles.container}>
                <Text style={styles.bigTitle}>Get Cooking</Text>
                <Text style={styles.subTitle}>Simple way to find simple recipes.</Text>
                
                <Button onPress={onPress}>Start Cooking</Button>
            </View>
        </ImageBackground>
    )
}
export default React.memo(Splash);