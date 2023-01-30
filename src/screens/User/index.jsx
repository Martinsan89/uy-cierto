import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TextFont, Input } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'


const User = ({setSelected}) => {
  return (
    <>
    <View style={styles.buttonBackContainer} >
      <Icon.Button name='home' style={styles.buttonBack}  onPress={()=> setSelected(false)}>Home</Icon.Button>
    </View>
      <View style={styles.container}>
        <TextFont textType={'Italic'} style={styles.title}>
          <Text >User</Text>
        </TextFont>
      </View>

    </>
  )
}

export default User