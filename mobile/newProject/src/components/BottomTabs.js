import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableView } from "./TouchableView";
import { LoginSession } from "../data/users"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTabs = () => {
    const[activeTab, setActiveTab] = useState('Home')

    // const icon = () => (
    //     <View style={[styles.bottomTab]}>
    //         <TouchableView>
    //             <Icon style={[styles.bottomTabIcon]} name="home" size={30}/>
    //         </TouchableView>
    //         <TouchableView>
    //             <Icon style={[styles.bottomTabIcon]} name="magnify" size={30}/>
    //         </TouchableView>
    //         <TouchableView>
    //             <Icon style={[styles.bottomTabIcon]} name="movie-play-outline" size={30}/>
    //         </TouchableView>
    //         <TouchableView>
    //             <Icon style={[styles.bottomTabIcon]} name="shopping-outline" size={30}/>
    //         </TouchableView>
    //         <TouchableView>
    //         </TouchableView>
    //     </View>
    // )

    return (
        <View style={[styles.bottomTab]}>
            <TouchableView>
                <Icon style={[styles.bottomTabIcon]} name="home" size={35}/>
            </TouchableView>
            <TouchableView>
                <Icon style={[styles.bottomTabIcon]} name="magnify" size={35}/>
            </TouchableView>
            <TouchableView>
                <Icon style={[styles.bottomTabIcon]} name="movie-play-outline" size={35}/>
            </TouchableView>
            <TouchableView>
                <Icon style={[styles.bottomTabIcon]} name="shopping-outline" size={35}/>
            </TouchableView>
            <TouchableView>
                <Image 
                    style={[styles.avatar]}
                    source={{uri: LoginSession.avatar}}
                />
            </TouchableView>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
    },
    bottomTabIcon: {

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 20,
        resizeMode: "cover",
        margin: 5,
    },
})

export default BottomTabs;