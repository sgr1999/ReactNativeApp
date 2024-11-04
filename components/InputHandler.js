import { StyleSheet,View, TextInput,Button } from 'react-native'
import { useState } from 'react';

function InputHandler(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
      }
    
      function addInputHandler(){
        props.onAddItem(enteredGoalText)
        setEnteredGoalText('')
      }
    return (
        <View style={styles.textInput}>
            <TextInput style={styles.inputBar}
                placeholder='Enter Item'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.ItemButton}>
                <Button title='Add' onPress={addInputHandler} />
            </View>
        </View>
    )
}

export default InputHandler;

const styles = StyleSheet.create({
    textInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        alignContent: 'center',
        alignItems: 'center'
    },

    inputBar: {
        flex: 3,
        borderWidth: 1,
        borderColor: '#cccccc',
        marginRight: 10,
        paddingLeft: 10,
    },

    ItemButton: {
        flex: 1,
    }
})