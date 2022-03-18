/**************************************************** 
* 작성자 : 김동욱
* 수정일 : 2022.03.18
* 소스설명 : 메인화면 부분
*****************************************************/

// import part
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import Header from "../home/Header";
import Post from "../home/Post";
import Stories from "../home/Stories";
import BottomTabs from "../home/BottomTabs";
import { PostList } from "../data/posts";
import { db, firebase } from "../../firebase";

const MainScreen = ({navigation}:any) => {
    // 게시물, 세션정보 변수선언
    const [posts, setPosts]:any = useState([])
    const [userSession, setUserSession]:any = useState();

    // 세션정보 값 가져오기
    const getSessionData = async () => {
        try {
            const user = firebase.auth().currentUser
            await db
            .collection('users')
            .where('owner_uid', '==', user?.uid)
            .onSnapshot(snapShot => snapShot.docs.map(doc => 
                setUserSession({
                    avatar: doc.data().avatar,
                    email: doc.data().email,
                    name: doc.data().name,
                    owner_uid: doc.data().owner_uid,
                    phone: doc.data().phone,
                    username: doc.data().username
                }))
            )
        } catch (error) {
            console.log(error)
        }
    }

    // 변수에 값 할당
    useEffect(() => {
        getSessionData()
        db.collectionGroup('post').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return(
        <SafeAreaView style={[styles.container]}>
            <Header navigation={navigation} />
            <Stories />
            <ScrollView>
                {posts.map((post:any, i:number) => (
                    <Post post={post} key={i} navigation={navigation} />
                ))}
            </ScrollView>
            <BottomTabs userSession={userSession}/>
        </SafeAreaView>
    )
}

// ********** //
// style part //
// ********** //

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default MainScreen;