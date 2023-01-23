import React from "react";
import { View, TextInput, Button } from "react-native";
import { styles } from "./styles";
// import { text, date, show, mode, showMode, onChange } from '../../functions/dateTimePicker'
// import { DateTimePicker } from "@react-native-community/datetimepicker";


const Input = ({placeholder, task, onHandlerChange, onHandlerSubmit}) => {

  return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder={placeholder}
          autoComplete='off'
          autoCorrect={false}
          autoCapitalize='none'
          value={task}
          onChangeText={onHandlerChange}/>
        <Button 
          disabled={!task} 
          title='Add' 
          style={styles.button} 
          onPress={onHandlerSubmit} />
        {/* <Button 
          title='DatePicker'
          onPress={() => showMode('date')}/>
        {show && (
          <DateTimePicker 
            testID='dateTimePicker'
            value={date}
            mode={mode}
            display='default'
            onChange={onChange}
          />)} */}
      </View>
  );
};

export default Input;
