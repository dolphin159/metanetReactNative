import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Colors } from "react-native-paper";
import { StoryList } from "../data/users";


const Post = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.header]}>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 13,

    },
    header: {

    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 30,
        resizeMode: "cover",
        marginTop: 6,
        marginLeft: 8,
        borderWidth: 2,
    },
    avatarName: {
        marginLeft:8,
        fontSize: 12,
        textAlign: "center",

    },
})
export default Post;