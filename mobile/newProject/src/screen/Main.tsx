import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from "../components/Header";
import Post from "../components/Post";
import Stories from "../components/Stories";
const MainScreen = () => {
    return(
        <SafeAreaView style={[styles.container]}>
            <Header />
            <Stories />
            <Post />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen;