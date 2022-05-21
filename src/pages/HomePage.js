import React, {useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


const HomePage = (props) => {

    return <View style = {styles.container}>
   		 <Text>Hello to AVA React Native App </Text>

    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: 50
    },
});

export default HomePage;