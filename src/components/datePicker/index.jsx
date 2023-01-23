import React, {useState} from "react";

import { View, Platform, Text, Button } from "react-native";
import { DateTimePicker } from "@react-native-community/datetimepicker";



export default function DatePicker(){
    const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "android");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let formatDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    setText(formatDate);

    console.warn(formatDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };


    return (
        <View>
            <Button 
                title='DatePicker'
                onPress={() => showMode('date')}/>
            {show && (
                <DateTimePicker 
                testID='dateTimePicker'
                value={date}
                mode={mode}
                display='default'
                onChange={onChange}
            />)}
            <Text>{text}</Text>
        </View>


    )   
};
