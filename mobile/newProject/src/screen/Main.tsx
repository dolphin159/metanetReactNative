import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../home/Header";
import Post from "../home/Post";
import Stories from "../home/Stories";
import BottomTabs from "../home/BottomTabs";
import { PostList } from "../data/posts";
import { db } from "../../firebase";

const MainScreen = ({navigation}:any) => {
    useEffect(() => {
        db.collectionGroup('post').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return(
        <SafeAreaView style={[styles.container]}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {PostList.map((post, i) => (
                    <Post post={post} key={i} navigation={navigation} />
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