import React, {useContext, useEffect, useRef, useState} from 'react';
import {FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './style';
import Input from '../../components/Input';
import Title from "../../components/Title";
import {Categories} from "../../components/Categories";
import RecipeCard from "../../components/RecipeCard";
import Card from "../../components/Card";
import {HealthyRecipesContext, RecipesContext} from "../../../App";

const Home = ({navigation}) => {
    const {recipes} = useContext(RecipesContext);
    const {healthyRecipes} = useContext(HealthyRecipesContext);
    const [tags, setTags]=useState([]);
    const [filteredRecipes,setFilteredRecipes]=useState(recipes)
    const [selectedTag,setSelectedTag]=useState(0)
    useEffect(()=>{
        const tagsData=[]
        recipes.forEach((recipe)=>{
            recipe?.tags?.forEach((tag)=>{
                if(!tagsData?.includes(tag?.name)){
                    tagsData?.push(tag?.name)
                }
            })
        })
        setTags(['All',...tagsData])
    },[recipes])

    useEffect(()=>{
        if(selectedTag){
            const filteredItems=recipes.filter((rec)=>{
                const tag=rec?.tags.find((text)=> text?.name===tags[selectedTag])
                return !!tag
            })
        setFilteredRecipes(filteredItems)
        }
        else{
            setFilteredRecipes(recipes)
        }
    },[selectedTag,recipes])
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity hitSlop={8} pressable onPress={() => navigation.navigate('Search')}>
            <Input pressable onPress={() => navigation.navigate('Search')}/>
            </TouchableOpacity>
            <Title text={"Healthy Recipes"} type={'primary'}/>
            <FlatList style={{marginHorizontal: -24}}
                      id={1}
                      horizontal
                      data={healthyRecipes}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item) => String(item.id)}
                      renderItem={({item, index}) => (

                          <RecipeCard style={index === 0 ? {marginLeft: 24} : {}}
                                      title={item?.name}
                                      time={item?.cook_time_minutes}
                                      image={item?.thumbnail_url}
                                      rating={item?.user_ratings?.score}
                                      author={item?.credits?.length? {name:item?.credits[0].name, image:item?.credits[0].image_url}:null }
                                      onPress={()=>navigation.navigate('Recipe',{item})}
                          />
                      )}
            />

            <Categories categories={tags} selectedCategory={selectedTag} onCategorySelect={setSelectedTag}/>

            <FlatList style={{marginHorizontal: -24}}
                      horizontal
                      id={2}
                      data={filteredRecipes}
                      showsHorizontalScrollIndicator={false}
                      keyExtractor={(item) => String(item?.id)}
                      renderItem={({item,index}) => (
                          <Card style={index === 0 ? {marginLeft: 24} : {}}
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
export default React.memo(Home);