import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header, Input, Card, ModalCard } from "./components/index";
import { Employer, Home, User } from "./screens/index";
import { styles } from "./styles";

const App = () => {
  // const [task, setTask] = useState("");
  // const [tasks, setTasks] = useState([]);
  // const [isModalVisible, setIsModalVisible] = useState(false);
  // const [selectedTask, setSelectedTask] = useState(null);

  // const onHandlerChange = (text) => {
  //   setTask(text);
  // };

  // const onHandlerSubmit = () => {
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: Math.random().toString(),
  //       value: task,
  //     },
  //   ]);
  //   setTask("");
  // };

  // const onHandlerModal = (item) => {
  //   setIsModalVisible(!isModalVisible);
  //   setSelectedTask(item);
  // };

  // const onHandleCancel = () => {
  //   setIsModalVisible(!isModalVisible);
  //   setSelectedTask(null);
  // };

  // const onHandleDelete = () => {
  //   setTasks((prevTaskList) =>
  //     prevTaskList.filter((task) => task.id !== selectedTask.id)
  //   );
  //   setIsModalVisible(!isModalVisible);
  // };

  const [selectUser, setSelectUser] = useState("");
  const [selected, setSelected] = useState(false);

  const SelectedUser = () => {
    if (selected) {
      if (selectUser === "user") {
        return <User setSelected={setSelected} />;
      } else {
        return <Employer setSelected={setSelected} />;
      }
    } else {
      return <Home setSelectUser={setSelectUser} setSelected={setSelected} />;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.selectUserContainer}>
          <SelectedUser />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
