import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableView } from '../components/TouchableView'
import { firebase } from '../../firebase'

// 로그아웃 구현
const handleSignOut = async () => {
  try {
    await firebase.auth().signOut()
    console.log('로그아웃 되었습니다!')
  } catch (error) {
    console.log(error)
  }
}

// Main화면 헤더
const Header = ({navigation}) => {
  return (
    <View style={[styles.header]}>
      <TouchableView>
        <Icon style={[styles.icon]} name="camera" size={28}/>
      </TouchableView>
      <TouchableView
        onPress={handleSignOut}
      >
        <Text style={[styles.headerText]}>Instagram</Text>
      </TouchableView>
      <TouchableView>
        <Icon style={[styles.icon]} name="plus-box" size={28} onPress={() => navigation.push('NewPostScreen')} />
      </TouchableView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.grey300,
  },
  headerText: {
    padding: 8,
    color: Colors.black,
    fontSize: 20,
    textAlign: 'center',
  },
  icon: {
    padding: 8,
  },
})
export default Header;
