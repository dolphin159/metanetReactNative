import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Colors } from "react-native-paper";

// const { width, height } = Dimensions.get('window');

const CommentList = ({ post }) => {
    return (
        <View style={{ marginBottom: 30 }}>
            <View
                style={{
                    borderTopWidth: 1,
                    borderColor: Colors.grey300
                }}
            >
                <Caption post={post} />
                <Content post={post} />
                <Comment post={post} />
            </View>
        </View>
    )
}


const Caption = ({ post }) => (
    <View style={[styles.caption]}>
        {/* <Text style={styles.avatar}>
            {post.avatar}
        </Text>
        <Text style={[styles.userId]}>
            {post.userid}
        </Text> */}
        <View style={[styles.header]}>
            <Image
                style={[styles.avatar]}
                source={{ uri: post.avatar }}
            />
            <Text style={[styles.avatarName]}>
                {post.userid}
            </Text>
        </View>

    </View>
)

const Content = ({ post }) => (
    <View style={{ marginLeft: 50, marginBottom: 25 }}>
        <Text style={[styles.content]}>
            {post.Content}
        </Text>
    </View>
)


const Comment = ({ post }) => (
    <View style={{ marginLeft: 10 }}>
        {/* <Text style={[styles.userId]}>
            {post.comment.map((id, index) => id.userid)}
        </Text>
        <Text style={[styles.content]}>
            {post.comment.map((comment, index) => comment.comment)}
        </Text> */}
        {post.comment.map((val, index) => (
            <View style={{ flexDirection: 'row' }} key={index}>
                <Text style={[styles.userId]}>
                    {val.userid}
                </Text>
                <Text style={[styles.content]}>
                    {val.comment}
                </Text>
            </View>
        ))}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,

        alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 20,
        resizeMode: "cover",
        marginTop: 6,
        borderWidth: 2,
    },
    avatarName: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: '500',
        color: Colors.black,
    },
    caption: {
        marginLeft: 8,
        flexDirection: 'row',
    },
    userId: {
        fontWeight: '700',
        color: Colors.black,
    },
    content: {
        marginLeft: 5,
        color: Colors.black
    },
    // viewComment: {
    //     marginLeft: 8,
    //     color: Colors.grey500,
    // }

})

export default CommentList;