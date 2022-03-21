import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableIcon } from "../components/TouchableIcon";

const ProfileHeader = ({navigation}) => {
    return (
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
}


const styles = StyleSheet.create({
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

export default ProfileHeader