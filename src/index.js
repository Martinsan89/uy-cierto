import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header, Input, Card, ModalCard } from "./components/index";
import { styles } from "./styles";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (text) => {
    setTask(text);
  };

  const onHandlerSubmit = () => {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(),
        value: task,
      },
    ]);
    setTask("");
  };

  const onHandlerModal = (item) => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(item);
  };

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
    setSelectedTask(null);
  };

  const onHandleDelete = () => {
    setTasks((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedTask.id)
    );
    setIsModalVisible(!isModalVisible);
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View>
          <Input
            onHandlerChange={onHandlerChange}
            onHandlerSubmit={onHandlerSubmit}
            placeholder="add a new task"
            task={task}
          />
        </View>
        <View>
          <Card tasks={tasks} onHandlerModal={onHandlerModal} />
          <ModalCard
            isModalVisible={isModalVisible}
            onHandleCancel={onHandleCancel}
            onHandleDelete={onHandleDelete}
            selectedTask={selectedTask}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default App;
