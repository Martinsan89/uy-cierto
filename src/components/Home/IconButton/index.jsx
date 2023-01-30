import React from 'react'
import { styles } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const IconButton = ({name, title, user, setSelectUser, setSelected}) => {
    return (
        <Icon.Button 
            name={name} 
            title={title} 
            style={styles.buttonHome}
            onPress={() => {setSelected(true), setSelectUser(user)}}
        >
            {title}
        </Icon.Button>
    )
}

export default IconButton;