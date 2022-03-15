import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Colors } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableView } from '../components/TouchableView'

const Header = () => {
  return (
    <View style={[styles.header]}>
      <TouchableView>
        <Icon style={[styles.icon]} name="camera" size={28}/>
      </TouchableView>
      <TouchableView>
        <Text style={[styles.headerText]}>Instagram</Text>
      </TouchableView>
      <TouchableView>
        <Icon style={[styles.icon]} name="send" size={28}/>
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
