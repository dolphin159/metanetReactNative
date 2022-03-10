import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Colors } from "react-native-paper";
import { StoryList } from "../data/users";


const Stories = () => {
    return (
        <View style={[styles.container]}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {StoryList.map((story, i) => (
                    <View key={i}>
                        <Image 
                            style={[styles.avatar]}
                            source={{uri: story.avatar}}
                        />
                        <Text style={[styles.avatarName]}>
                            {story.userid.length > 10 ? story.userid.slice(0, 9).toLowerCase() + '...'
                            : story.userid}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50,
        resizeMode: "cover",
        marginTop: 6,
        marginLeft: 8,
        borderWidth: 3,
        borderColor: Colors.orange400,
    },
    avatarName: {
        marginLeft:8,
        fontSize: 12,
        textAlign: "center",

    },
})
export default Stories;