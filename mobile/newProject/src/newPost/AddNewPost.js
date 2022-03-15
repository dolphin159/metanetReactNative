import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableIcon } from "../components/TouchableIcon";
import FormikPostUploader from "./FormikPostUploader"

const AddNewPost = ({navigation}) => {
    return (
        <View style={[styles.container]}>
            <Header navigation={navigation} />
            <FormikPostUploader navigation={navigation} />
        </View>
    )
}

const Header = ({navigation}) => (
    <View style={[styles.headerContainer]}>
        <TouchableIcon name="chevron-left" size={35} onPress={() => navigation.goBack()}/>
        <Text style={[styles.headerText]}>New Post</Text>
        <Text></Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: '700',
        fontSize: 20,
        marginRight: 23,
    }
    
})

export default AddNewPost