import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Image, Button, Alert } from 'react-native';
import { EventType } from 'react-native-gesture-handler/lib/typescript/EventType';
import { Text } from 'react-native-paper';
import { event } from 'react-native-reanimated';


class SignUp extends Component {

    state = {
        isOnLargeToggleSwitch: false
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require("../Image/InstagramImage.png")}
                    style={{ width: '100%' }} />
                <Text style={{ paddingBottom: 80, color: '#9e9e9e', fontSize: 15 }}>친구들의 사진과 동영상을 보려면 가입하세요.</Text>
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="휴대폰 번호 또는 이메일 주소"
                    />
                </View>
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="성명"
                    />
                </View>
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="사용자 이름"
                    />
                </View>
                <View style={styles.loginInfo}>
                    <TextInput
                        style={styles.TextInput}
                        onChangeText={(text) => { this.setState({ inputText: text }) }}
                        placeholder="비밀번호"
                    />
                </View>
                <View style={[{ width: "75%", margin: 30 }]}>
                    <Button title='가입하기'
                        onPress={() => {
                            Alert.alert("가입이 완료되었습니다.")
                        }}
                    />
                </View>
                <Text style={{ paddingTop: 30, color: '#000000' }}> 계정이 있으신가요?
                    <Text style={{ color: '#2196f3' }} onPress={() => { this.props.navigation.navigate('Login') }}> 로그인 </Text></Text>
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
})

export default SignUp;