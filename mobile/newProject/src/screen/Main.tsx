import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../home/Header";
import Post from "../home/Post";
import Stories from "../home/Stories";
import BottomTabs from "../home/BottomTabs";
import { PostList } from "../data/posts";

const MainScreen = ({navigation}:any) => {
    return(
        <SafeAreaView style={[styles.container]}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {PostList.map((post, i) => (
                    <Post post={post} key={i} />
                ))}
            </ScrollView>
            <BottomTabs />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen;