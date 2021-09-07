import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Text,
  Pressable,
} from "react-native";

export default function App() {
  const [enteredTask, setTask] = useState("");

  const [todoList, setTodoList] = useState([]);

  const onChangehandler = (value) => setTask(value);

  const onPressHandler = () => {
    setTodoList((list) => [...list, enteredTask]);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        {todoList.map((task) => (
          <View key={task} style={styles.list}>
            <Text style={styles.listTask}>{task}</Text>
            <Pressable>
              <Text style={styles.btnRemoveText}>X</Text>
            </Pressable>
          </View>
        ))}
      </View>
      <View style={styles.bottomPlacing}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textbox}
            placeholder="Enter your task"
            value={enteredTask}
            onChangeText={onChangehandler}
          />
          <Pressable onPress={onPressHandler} style={styles.myBtn}>
            <Text style={styles.btnText}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#FAFAFA",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  myBtn: {
    width: 45,
    height: 45,
    paddingTop: 13,
    paddingLeft: 18,
    borderRadius: 22,
    backgroundColor: "#8c80d1",
  },

  btnText: {
    color: "white",
  },

  listTask: {
    width: "95%",
    color: "white",
  },

  btnRemoveText: {
    color: "red",
  },

  textbox: {
    borderWidth: 1,
    width: "80%",
    borderColor: "#abaeb3",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    borderRadius: 20,
  },

  listContainer: {
    marginTop: 20,
    borderColor: "black",
    height: 400,
  },

  list: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#8c80d1",
    color: "white",
    borderRadius: 5,
    flexDirection: "row",
  },
});
