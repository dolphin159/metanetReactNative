import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../home/Header";
import Post from "../components/Post";
import CommentList from '../components/CommentList'
import Stories from "../home/Stories";
import BottomTabs from "../home/BottomTabs";

const Comment = ({navigation, route}:any) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <CommentList navigation={navigation} route={route}/>
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