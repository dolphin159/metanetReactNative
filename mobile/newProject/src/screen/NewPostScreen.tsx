import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import AddNewPost from "../newPost/AddNewPost"
const NewPostScreen = ({navigation}:any) => {
    return (
        <SafeAreaView style={[styles.screenView]}>
            <AddNewPost navigation={navigation} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
    },

})

export default NewPostScreen