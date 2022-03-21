import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { Colors } from "react-native-paper";
import { TouchableIcon } from "../components/TouchableIcon"

// const { width, height } = Dimensions.get('window');

const CommentList = ({ navigation, route }) => {
    useEffect(() => {
        console.log(route.params.post)
    })
    return (
        <View style={{ marginBottom: 30 }}>
            <View
                style={{
                    borderTopWidth: 1,
                    borderColor: Colors.grey300
                }}
            >
                <CommentHeader navigation={navigation} />
                <Caption caption={route.params.post} />
                <View style={{backgroundColor: Colors.grey400, width:'100%', height: 0.3}} />
                <Comment comment={route.params.post.comment} />
            </View>
        </View>
    )
}

const CommentHeader = ({navigation}) => (
    <View style={[styles.headerContainer]}>
        <TouchableIcon 
           name="chevron-left" 
           size={35}
           onPress={() => navigation.goBack()}/>
        <Text style={[styles.headerText]}>댓글</Text>
        <View style={{alignItems: 'flex-end'}}>
            <TouchableIcon
                style={{margin: 3}}
                name="send-outline" 
                size={30}
                onPress={() => navigation.goBack()}/>
        </View>
    </View>
)

const Caption = ({ caption }) => (
    <View style={[styles.caption]}>
        <View style={[styles.header]}>
            <Image
                style={[styles.avatar]}
                source={{ uri: caption.avatar }}
            />
            <Text style={[styles.avatarName]}>
                {caption.user}
            </Text>
            <Text style={[styles.content]}>
                {caption.caption}
            </Text>
        </View>

    </View>
)


const Comment = ({ comment }) => (
    <View style={{ marginLeft: 10, marginTop: 15 }}>
        {comment.map((val, index) => (
            <View style={[styles.header]} key={index}>
                <Image
                    style={[styles.avatar]}
                    source={{ uri: val.avatar }}
                /> 
                <Text style={[styles.avatarName]}>
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
        margin: 8,
        flexDirection: 'row'
    },
    userId: {
        fontWeight: '700',
        color: Colors.black,
    },
    content: {
        marginLeft: 5,
        color: Colors.black
    },
    headerContainer: {
        padding: 3, 
        flexDirection:'row', 
        justifyContent: 'space-between'
    },
    headerText: {
        marginRight: 230, 
        fontSize: 20, 
        marginTop: 3, 
        fontWeight: '700'
    },


})

export default CommentList;