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

export default function App() {
  const [courseGoal, setCourseGoal] = useState([]);

  function addInputHandler(enteredGoalText) {
    setCourseGoal((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    console.log(id)
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <InputHandler onAddItem={addInputHandler} />

      <View style={styles.itemList}>
        <Text>Item List</Text>
        <FlatList
          data={courseGoal}
          renderItem={(itemData) => {
            return <ListedItems
              text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}
            />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 28,
  },
  itemList: {
    borderTopWidth: 1,
    borderColor: "#ccccc",
    flex: 5,
  },
});
