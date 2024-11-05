import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ListedItems from "./components/ListedItems";
import InputHandler from "./components/InputHandler";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addInputHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    console.log(id);
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }

  function visibleInputHandler() {
    setModalIsVisible(true);
  }

  function endInputHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
        <View style={styles.container}>
          <Button
            title="Add New Item"
            color="#5e0acc"
            onPress={visibleInputHandler}
          />

          <InputHandler
            visible={modalIsVisible}
            onAddItem={addInputHandler}
            onCancel={endInputHandler}
          />

          <View style={styles.itemList}>
            <Text>Item List</Text>
            <FlatList
              data={courseGoal}
              renderItem={(itemData) => {
                return (
                  <ListedItems
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  itemList: {
    flex: 5,
  },
});
