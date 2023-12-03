import React, {useContext, useEffect, useState} from 'react';
import {Text, SafeAreaView, FlatList} from 'react-native';
import styles from './style';
import Input from '../../components/Input';
import {RecipesContext} from "../../../App";
import Card from "../../components/Card";
const Search =({navigation})=>{
    const {recipes}=useContext(RecipesContext);
    const [filteredRecipes,setFilteredRecipes]=useState([]);
    const [keyword,setKeyword]=useState('')

    useEffect(()=>{
        if(keyword?.length>2){
        const filteredItems =recipes?.filter((recipe)=>{
            return recipe?.name.toLowerCase()?.includes(keyword.toLowerCase())

        })
        setFilteredRecipes(filteredItems)

        }
        else{
            setFilteredRecipes([])
        }

    },[keyword])
    return(
        <SafeAreaView style={styles.container}>
          <Input autoFocus={true} onChangeText={setKeyword} value={keyword} />
            <FlatList
                style={{ flexGrow:1}}
                data={filteredRecipes}
                numColumns={2}
                keyExtractor={item=> String(item?.id)}
                renderItem={({item,index}) => (
                <Card
                      title={item?.name}
                      servings={item?.num_servings}
                      image={item?.thumbnail_url}
                      rating={item?.user_ratings?.score}
                      author={item?.credits?.length? {name:item?.credits[0].name, image:item?.credits[0].image_url}:null }
                      onPress={()=> navigation.navigate('Recipe',{item})}
                />
                )}
                      />
        </SafeAreaView>
    )
}
export default React.memo(Search);