import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../home/Header";
import Post from "../components/Post";
import CommentList from '../components/CommentList'
import Stories from "../home/Stories";
import BottomTabs from "../home/BottomTabs";
import { PostList } from "../data/posts";

const Comment = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                {PostList.map((post, i) => (
                    <CommentList post={post} key={i} />
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

export default Comment;