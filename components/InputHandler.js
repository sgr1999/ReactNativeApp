import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

function InputHandler(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addInputHandler() {
    props.onAddItem(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.textInput}>
        <Image 
        style ={styles.image}
        source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.inputBar}
          placeholder="Enter Item"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.ItemButton}>
            <Button title="Add" onPress={addInputHandler} />
          </View>
          <View style={styles.ItemButton}>
            <Button title="Cancel" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default InputHandler;

const styles = StyleSheet.create({
  textInput: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom:24,
    padding:16,
    backgroundColor:'#311b6b'
  },

  inputBar: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor:'#e4d0ff',
    color:'#120438',
    borderRadius:6,
    width:'100%',
    padding:8,
  },

  ItemButton: {
    width:100,
    marginHorizontal:8
  },

  buttonContainer:{
    flexDirection:'row',
    marginTop:16,
  },

  image:{
    width:100,
    height:100,
    margin:20,
  }
});
