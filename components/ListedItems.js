import { StyleSheet, View, Text, Pressable } from "react-native";
function ListedItems(props) {
    return (
        
        <View style={styles.itemListView}>

            <Pressable
                android_ripple={{ color: '#210644' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >

                <View >
                    <Text style={styles.textStyle}>
                        {props.text}
                    </Text>
                </View>
            </Pressable>
        </View>
        
    );
}

export default ListedItems;

const styles = StyleSheet.create({
    itemListView: {
        margin: 8,
        backgroundColor: "#5e0acc",
        borderRadius: 6,
    },
    
    textStyle: {
        color: "white",
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
        borderRadius: 6,
    }
});
