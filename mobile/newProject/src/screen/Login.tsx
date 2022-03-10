import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput, Alert } from 'react-native';
import { color } from 'react-native-reanimated';

class Login extends Component {
    state = {
        isOnLargeToggleSwitch: false
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../Image/InstagramImage.png")}
                    style={{ width: '100%' }} />
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        inlineImageLeft="appleIcloud"
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="전화번호,사용자 이름 또는 이메일"
                    />
                </View>
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        inlineImageLeft="appleIcloud"
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="비밀번호"
                    />
                </View>
                <View style={[{ width: "75%", margin: 30 }]}>
                    <Button title='Login'
                        onPress={() => {
                            Alert.alert("로그인화면으로 넘어가기")
                        }}
                    />
                </View>
                <Text style={{ paddingTop: 30, color: '#000000' }}> 계정이 없으신가요?
                    <Text style={{ color: '#2196f3' }} onPress={() => { this.props.navigation.navigate('SignUp') }}> 가입하기 </Text></Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    loginInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
    },
    TextInput: {
        height: 50, //textinput 높이 
        borderRadius: 10, //모서리 
        borderColor: 'gray',
        borderWidth: 2,
        width: 295, //textinput 길이
        margin: 5
    },
    signup: {}
})

export default Login;