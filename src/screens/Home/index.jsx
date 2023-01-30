import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles';
import { TextFont, IconButton } from '../../components';

const Home = ({ setSelectUser, setSelected}) => {
  return (
    <View>
        <View style={styles.subContainer}>
          <TextFont textType={'Italic'} style={styles.subTitle}>
              <Text>Bienvenido a Lagurar.</Text>
          </TextFont>
            <TextFont textType={'Light'} style={styles.subText} >
                <Text>Elige si eres usuario o empleador. </Text>
            </TextFont>
        </View>
        <View style={styles.buttonContainer}>
          <IconButton 
            name={'user'} 
            title={'Usuario'} 
            user={'user'}
            setSelectUser={setSelectUser}
            setSelected={setSelected}   
          />
          <IconButton 
            name={'suitcase'} 
            title={'Empresa'} 
            user={'employer'}
            setSelectUser={setSelectUser}
            setSelected={setSelected}  
          />
        </View>
    </View>
  )
}
export default Home;