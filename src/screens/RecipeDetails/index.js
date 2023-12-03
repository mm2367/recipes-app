import React from 'react';
import {SafeAreaView, Image, View, Text, ScrollView} from 'react-native';
import styles from './style';
import Title from "../../components/Title";

const RecipeDetails = ({route}) => {
    const {item} = route?.params || {}
    const nutrition = item?.nutrition;
    const instructions = item?.instructions || []
    delete nutrition?.updated_at
    const nutritionKeys = Object.keys(nutrition || {})
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{uri: item?.thumbnail_url}}/>
                <Title style={{marginBottom: 32}} text={item?.name}/>
                {nutritionKeys?.map((key, index) => (
                    <View id={index} style={styles.row}>
                        <Text style={styles.key}>{key}</Text>
                        <Text style={styles.value}>{nutrition[key]}</Text>
                    </View>
                ))}
                <Title style={{marginTop: 32}} text={"Instructions"}/>
                {instructions?.map((instruction, index) => (
                    <View id={index} style={styles.instructionRow}>
                        <Text style={styles.index}>{index + 1}</Text>
                        <Text style={styles.instructionText}>{instruction?.display_text}</Text>
                    </View>
                ))}
                {!instructions?.length ? (
                    <Text style={styles.instructionText}>{'No instructions found'}</Text>
                    ) : null}
            </ScrollView>
        </SafeAreaView>
    )
}
export default React.memo(RecipeDetails);