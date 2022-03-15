import React, {useState} from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableView } from "../components/TouchableView";
import { LoginSession } from "../data/users"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from "react-native-paper";

const BottomTabs = () => {
    const[activeHome, setActiveHome] = useState(false);
    const[activeSearch, setActiveSearch] = useState(false);
    const[activePlay, setActivePlay] = useState(false);
    const[activeShop, setActiveShop] = useState(false);
    const[activeProfile, setActiveProfile] = useState(false);

    const resetActive = (value) => {
        setActiveHome(value);
        setActiveSearch(value);
        setActivePlay(value);
        setActiveShop(value);
        setActiveProfile(value);
    }

    const pressHome = (value) => {
        if(value) return;
        resetActive(value);
        setActiveHome(!value);
    }

    const pressSearch = (value) => {
        if(value) return;
        resetActive(value);
        setActiveSearch(!value);
    }

    const pressPlay = (value) => {
        if(value) return;
        resetActive(value);
        setActivePlay(!value);
    }

    const pressShop = (value) => {
        if(value) return;
        resetActive(value);
        setActiveShop(!value);
    }

    const pressProfile = (value) => {
        if(value) return;
        resetActive(value);
        setActiveProfile(!value);
    }

    return (
        <View style={[styles.bottomTab]}>
            <TouchableView onPress={() => pressHome(activeHome)}>
                <Icon style={[styles.bottomTabIcon]} name={activeHome ? 'home' : 'home-outline'} size={35}/>
            </TouchableView>
            <TouchableView onPress={() => pressSearch(activeSearch)}>
                <Icon style={[styles.bottomTabIcon, activeSearch ? styles.focusSearch : null]} name="magnify" size={35}/>
            </TouchableView>
            <TouchableView onPress={() => pressPlay(activePlay)}>
                <Icon style={[styles.bottomTabIcon]} name={activePlay ? 'movie-play' : "movie-play-outline"} size={35}/>
            </TouchableView>
            <TouchableView onPress={() => pressShop(activeShop)}>
                <Icon style={[styles.bottomTabIcon]} name={activeShop ? 'shopping' : "shopping-outline"} size={35}/>
            </TouchableView>
            <TouchableView onPress={() => pressProfile(activeProfile)}>
                <Image 
                    style={[styles.avatar, activeProfile ? styles.focusAvatar : null]}
                    source={{uri: LoginSession.avatar}}
                />
            </TouchableView>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomTab: {
        borderTopWidth: 1,
        borderColor: Colors.grey400,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 3,
        padding: 5,
    },
    bottomTabIcon: {

    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 20,
        resizeMode: "cover",
        margin: 3,
    },
    focusAvatar: {
        borderWidth: 2,
        borderColor: Colors.black,
    },
    focusSearch: {
        color: Colors.black,
    }
})

export default BottomTabs;