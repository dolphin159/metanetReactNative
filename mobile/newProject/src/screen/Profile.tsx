import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ProfileHeader  from "../profile/ProfileHeader"
import BottomTabs from "../home/BottomTabs"
const Profile = ({navigation, userSession}:any) => {
    return (
        <SafeAreaView style={[styles.screenView]}>
            <ProfileHeader navigation={navigation}/>
            <BottomTabs navigation={navigation} userSession={userSession}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screenView: {
        flex: 1,
    },

})

export default Profile