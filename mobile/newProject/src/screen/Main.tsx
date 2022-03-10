import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../components/Header";
import Post from "../components/Post";
import Stories from "../components/Stories";
import BottomTabs from "../components/BottomTabs";
import { PostList } from "../data/posts";

const MainScreen = () => {
    return(
        <SafeAreaView style={[styles.container]}>
            <Header />
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