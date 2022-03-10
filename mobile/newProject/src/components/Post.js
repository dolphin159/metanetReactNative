import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableView } from "./TouchableView";
import { ImageSlider } from "../components/ImageSlider";

const Post = ({post}) => {
    return (
        <View style={{marginBottom: 30}}>
            <View 
                style={{
                        borderTopWidth: 1,
                        borderColor: Colors.grey300
                        }}
            >
                <PostHeadr post={post} />
                <PostImage post={post} />
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSection post={post} />
            </View>
        </View>
    )
}

const PostHeadr = ({post}) => (
    <View style={[styles.container]}>
        <View style={[styles.header]}>
            <Image 
                style={[styles.avatar]}
                source={{uri: post.avatar}}
            />
            <Text style={[styles.avatarName]}>
                {post.userid}
            </Text>
        </View>
        <View>
            <TouchableView>
                <Icon name="dots-horizontal" size={20}/>
            </TouchableView>
        </View>
    </View>
)

const PostImage = ({post}) => (
    <View style={[styles.contentImgView]}>
        <ImageSlider imageUrls={post.ContentImg.map((img, i) => img)} imageWidth={395} />
        {/* <Image 
            style={[styles.contentImg]}
            source={{uri: post.ContentImg.map((img, i) => img)}}
        /> */}
    </View>
)

const PostFooter = () => (
    <View style={{flexDirection: 'row'}}>
        <View style={[styles.postFooterView]}>
            <TouchableView>
                <Icon style={[styles.postFooterIcon]} name="heart-outline" size={30}/>
            </TouchableView>
            <TouchableView>
                <Icon style={[styles.postFooterIcon]} name="comment-outline" size={30}/>
            </TouchableView>
            <TouchableView>
                <Icon style={[styles.postFooterIcon]} name="send-outline" size={30}/>
            </TouchableView>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableView>
                <Icon style={[styles.postFooterIcon]} name="bookmark-outline" size={30}/>
            </TouchableView>
        </View>
    </View>
)

const Likes = ({post}) => (
    <Text style={[styles.likeText]}>
        {post.like.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} likes
    </Text>
)

const Caption = ({post}) => (
    <View style={[styles.caption]}>
        <Text style={[styles.userId]}>
            {post.userid}
        </Text>
        <Text style={[styles.content]}>
            {post.Content}
        </Text>
    </View>
)


function CommentSection ({post}) {
    const [commentView, setCommentView] = useState(false);
    const pressComment = (value) => {
        console.log(value);
        return setCommentView(value);
    } 

    return (
        <>
        {
            !!post.comment.length &&
            <View>
                <Text style={[styles.viewComment]} onPress={() => pressComment(!commentView)}>
                    View {post.comment.length > 1 ? 'all ' + post.comment.length + ' comments' : 'comment'}
                </Text>
            </View>
        }
        </>
    )
}

const Comment = ({post}) => (
    <View style={[styles.caption]}>
        <Text style={[styles.userId]}>
            {post.comment.map((userid, index) => userid)}
        </Text>
        <Text style={[styles.content]}>
            {post.comment.map((comment, index) => comment)}
        </Text>
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
        marginLeft:8,
        fontSize: 15,
        fontWeight: '500',
        color: Colors.black,
    },
    contentImgView: {
        width: '100%',
        height: 450,
    },
    contentImg: {
        height: '100%',
        resizeMode: 'cover',
    },
    postFooterView: {
        flexDirection: 'row',
    },
    postFooterIcon: {
        margin: 8,
        marginTop: 1,
        marginBottom: 3,
    },
    likeText: {
        marginTop: 3,
        marginLeft: 8,
    },
    caption: {
        marginLeft: 8,
        flexDirection: 'row'
    },
    userId: {
        fontWeight: '700',
        color: Colors.black,
    },
    content: {
        marginLeft: 5,
        color: Colors.black,
    },
    viewComment: {
        marginLeft: 8,
        color: Colors.grey500,

    }

})

export default Post;