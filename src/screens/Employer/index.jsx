import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { TextFont } from '../../components'
import Icon from 'react-native-vector-icons/FontAwesome'

const Employer = ({setSelected}) => {
  return (
    <>
    <View style={styles.buttonBackContainer}>
    <Icon.Button name='home' title='Home' style={styles.buttonBack}  onPress={()=> setSelected(false)}>Home</Icon.Button>

    </View>
      <View style={styles.container}>
        <TextFont textType={'Italic'}>
          <Text style={styles.title}>Employer</Text>
        </TextFont>
      </View>
    </>
  )
}

export default Employer