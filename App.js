import 'react-native-gesture-handler';
import React, {useContext, useEffect, useState} from "react";
import {Pressable, StyleSheet, Image} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/Splash';
import Search from './src/screens/Search';
import Home from './src/screens/Home';
import {getRecipesList} from "./src/api";
import RecipeDetails from "./src/screens/RecipeDetails";


const Stack = createStackNavigator();
export const RecipesContext = React.createContext({});
export const HealthyRecipesContext = React.createContext({});
const BackButton = (props) => {
    return (
        <Pressable onPress={props.onPress}>
            <Image style={styles.back} source={require('./assets/arrowLeft.png')}/>
        </Pressable>
    )
}
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#ffffff'

    }
}
export default function App() {

    const [recipes, setRecipes] = useState([]);
    const [healthyRecipes, setHealthyRecipes] = useState([]);
    const handleRecipesFetch = async (tags, size) => {
        try {
            const recipesList = await getRecipesList(tags,size);
            console.log('im the data',recipesList.data)
            return recipesList?.data?.results;
        } catch (e) {
            console.log(e,'error fetching recipes')
        }
    }

    useEffect(() => {
        ( async ()=> {
                const rec = await handleRecipesFetch(null,'15')
                setRecipes(rec)

                const healthyRec = await handleRecipesFetch('healthy', '15')
                setHealthyRecipes(healthyRec)
            })()
    }, [])
    return (
        <HealthyRecipesContext.Provider value={{healthyRecipes, setHealthyRecipes}}>
            <RecipesContext.Provider value={{recipes, setRecipes}}>
                <NavigationContainer theme={theme}>
                    <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
                        <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
                        <Stack.Screen name="Home" component={Home} options={{headerLeft: null, gestureEnabled: false}}/>
                        <Stack.Screen name="Search" component={Search}
                                      options={{headerLeft: (props) => <BackButton {...props}/>}}/>
                        <Stack.Screen name="Recipe" component={RecipeDetails}     options={{headerLeft: (props) => <BackButton {...props}/>, title:''}}/>

                    </Stack.Navigator>
                </NavigationContainer>
            </RecipesContext.Provider>
        </HealthyRecipesContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        width: 24,
        height: 24,
        margin: 16
    }
});
