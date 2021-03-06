/**************************************************** 
* 작성자 : 김동욱
* 수정일 : 2022.03.18
* 소스설명 : 메인화면 Post부분
*****************************************************/

// import part
import React, { useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, Dimensions, TextInput } from "react-native";
import { Colors } from "react-native-paper";
import { TouchableIcon } from "../components/TouchableIcon";
import { ImageSlider } from "../components/ImageSlider";
import { db, firebase } from "../../firebase";

// Dimensions를 이용한 화면 너비, 높이 구하기f
const {width, height} = Dimensions.get('window');

/********************
* Post 렌더링 부분
*********************/
const Post = ({post, navigation, userSession}) => {
    // 좋아요 상태 boolean
    const currentLikeStatus = !post.likes_by_users.includes(
        firebase.auth().currentUser.email
    )
    // 좋아요 이벤트 
    // post배열에 likes_by_users 에 email값 추가 삭제
    const handleLike = post => {
        db.collection('users')
        .doc(post.owner_email)
        .collection('post')
        .doc(post.id)
        .update({
            likes_by_users: currentLikeStatus
                ? firebase.firestore.FieldValue.arrayUnion(
                    firebase.auth().currentUser.email
                )
                : firebase.firestore.FieldValue.arrayRemove(
                    firebase.auth().currentUser.email
                )
        })
        .then(() => {
            console.log('좋아요!')
        })
        .catch( e => {
            console.error('error: ', e)
        })
    }

    // undefinded, null 확인
    const isEmpty = (value) => {
        if(value == null) {
            return true
        }
        if(value.length) {
            return value.length === 0
        }
        return Object.keys(value).length === 0
    }

    //값에 따라 다른 return값 출력
    if(!isEmpty(post)){
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
                    <PostFooter post={post} handleLike={handleLike} currentLikeStatus={currentLikeStatus} navigation={navigation} />
                    <Likes post={post} />
                    <Caption post={post} />
                    <CommentSection post={post} navigation={navigation} />
                </View>
            </View>
        )
    } else {
        return (
            <View style={{marginBottom: 30, flex: 1}}>
                <View 
                    style={{
                            borderTopWidth: 1,
                            borderColor: Colors.grey300,
                            alignItems: 'center',
                            }}
                >
                    <TouchableIcon style={{marginTop: 200}} name="plus-box" 
                        size={28} onPress={() => navigation.push('NewPostScreen')} 
                    />
                    <Text style={{fontSize: 20, marginTop: 10}} 
                        onPress={() => navigation.push('NewPostScreen')}
                    >
                        첫 게시글을 등록해보세요!
                    </Text>
                </View>
            </View>
        )
    }
}

// Post Header 부분
const PostHeadr = ({post}) => (
    <View style={[styles.container]}>
        <View style={[styles.header]}>
            <Image 
                style={[styles.avatar]}
                source={{uri: post.avatar}}
            />
            <Text style={[styles.avatarName]}>
                {post.user}
            </Text>
        </View>
        <View>
            <TouchableIcon name="dots-horizontal" size={20}/>
        </View>
    </View>
)

// Post Image 부분 사용자 component ImageSlider이용
const PostImage = ({post}) => (
    <View style={[styles.contentImgView]}>
        <ImageSlider imageUrls={post.postImage.map((img, i) => img)} imageWidth={width} />
        {/* <Image 
            style={[styles.contentImg]}
            source={{uri: post.ContentImg.map((img, i) => img)}}
        /> */}
    </View>
)

// Post의 아이콘 부분 현재 기능 X
// 좋아요 추가
// 댓글 추가
const PostFooter = ({post, handleLike, currentLikeStatus, navigation}) => (
    <View style={{flexDirection: 'row'}}>
        <View style={[styles.postFooterView]}>
            <TouchableIcon 
                style={[styles.postFooterIcon]}
                color={!currentLikeStatus ? Colors.red500 : null}
                name={currentLikeStatus ? "heart-outline" : "heart"} size={30}
                onPress={() => handleLike(post)}
            />
            <TouchableIcon style={[styles.postFooterIcon]} name="comment-outline" size={30}
                onPress={() => navigation.navigate('Comment', {post: post})}
            />
            <TouchableIcon style={[styles.postFooterIcon]} name="send-outline" size={30}/>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
            <TouchableIcon style={[styles.postFooterIcon]} name="bookmark-outline" size={30}/>
        </View>
    </View>
)

// 좋아요 표시 부분 정규식을 활용하여 숫자에 ',' 표시
const Likes = ({post}) => (
    <Text style={[styles.likeText]}>
        {post.likes_by_users.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명이 좋아합니다.
    </Text>
)

// Post caption부분
const Caption = ({post}) => (
    <View style={[styles.caption]}>
        <Text style={[styles.userId]}>
            {post.user}
        </Text>
        <Text style={[styles.content]}>
            {post.caption}
        </Text>
    </View>
)

// 댓글 개수 표시 부분 버튼 클릭시 parameter을 넘겨주며 화면 이동
const CommentSection = ({post, navigation, userSession}) => (
    <>
    {
        !!post.comment.length &&
        <View>
            <Text style={[styles.viewComment]} onPress={() => navigation.navigate('Comment', {post: post})}>
                댓글 {post.comment.length > 1 ? post.comment.length + '개 모두 보기' : '개 보기'}
            </Text>
        </View>
    }
    </>
)

// ********** //
// style part //
// ********** //

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
        margin: 5,
        marginTop: 1,
        marginRight: 3,
        marginBottom: 3,
    },
    likeText: {
        marginTop: 3,
        marginLeft: 8,
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
        color: Colors.black,
    },
    viewComment: {
        marginLeft: 8,
        color: Colors.grey500,
    }

})

// *********** //
// export part //
// *********** //

export default Post;