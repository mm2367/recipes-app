import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const Button =({children, onPress})=>{
    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.text}>
                {children}
            </Text>
            <Image soure={require('../../../assets/arrowRight.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(Button);