import React, { Component } from 'react';
import { View, StyleSheet, Text, Button, Image, TextInput, Alert } from 'react-native';
import { color } from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup'
import Validator from 'email-validator'
import {firebase} from '../../firebase';

const Login = ({navigation}:any) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().required('id를 입력해주세요.'),
        password: Yup.string()
            .required()
            .min(6, '비밀번호는 최소 6자 이상입니다.')
    })

    const onLogin = async (email: string, password: string) => {
        try{
            await firebase.auth().signInWithEmailAndPassword(email, password)
            console.log("firebase Login Successful", email, password)
        } catch(error:any) {
            Alert.alert(error.message);
        }
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                    onLogin(values.email, values.password)
                }}
                validationSchema={LoginFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <Image source={require("../Image/InstagramImage.png")}
                            style={{ width: '100%' }} />
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput]}
                                inlineImageLeft="appleIcloud"
                                placeholder="전화번호,사용자 이름 또는 이메일"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput,{
                                            borderColor:
                                                values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red'
                                        }]}
                                inlineImageLeft="appleIcloud"
                                placeholder="비밀번호"
                                autoCapitalize='none'
                                autoCorrect={false}
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={[{ width: "75%", margin: 30 }]}>
                            <Button title='Login'
                                onPress={handleSubmit}
                                disabled={!isValid}
                            />
                        </View>
                        <Text style={{ paddingTop: 30, color: '#000000' }}> 계정이 없으신가요?
                            <Text style={{ color: '#2196f3' }} onPress={() => navigation.navigate('SignUp') }> 가입하기 </Text>
                        </Text>
                    </>
                )}
            </Formik>
        </View>
    )
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
        borderRadius: 20,
    },
    TextInput: {
        height: 42, //textinput 높이 
        borderRadius: 10, //모서리 
        borderColor: '#ccc',
        borderWidth: 2,
        width: 295, //textinput 길이
        margin: 5
    },
})

export default Login;