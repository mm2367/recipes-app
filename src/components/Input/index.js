import React from 'react';
import { View, TextInput, Image, Pressable } from 'react-native';
import styles from './styles';
import colors from '../../styleconstants/colors';

const Input =({showSearchIcon, onPress,style,pressable,...props})=>{
    const renderInput=()=>{
        return(
        <View style={[styles.container,style]}>
            {showSearchIcon? <Image style={styles.icon} source={require('../../../assets/searchIcon.png')}/>:null}
            <TextInput {...props} editable={!pressable} style={styles.input} placeholderTextColor={colors.lightGray}/>
        </View>
        )
    }

    if(pressable){
        return(
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
    return renderInput()

}
Input.defaultProps={
    placeholder:'Search recipe',
    showSearchIcon:true
}
export default React.memo(Input);