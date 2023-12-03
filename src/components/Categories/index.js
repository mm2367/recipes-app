import { FlatList, Pressable, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { styles } from "./styles";



export const Categories=({categories,selectedCategory,onCategorySelect})=>{
    return(
        <FlatList
        data={categories}
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.flatListStyles}
        renderItem={({item,index})=>{
            const displayName=item?.replace('_', ' ')
            return(
            <Pressable onPress={()=>onCategorySelect(index)} style={[styles.itemContainer, selectedCategory===index? styles.selectItemContainer:null,index===0? {marginLeft:24}:null]}>
            <Text style={[styles.item, selectedCategory===index?styles.selectedItem:null]}>
                {displayName}
            </Text>
            </Pressable>
            )
        }}
        />
    )
        
}