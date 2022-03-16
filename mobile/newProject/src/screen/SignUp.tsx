import React, { Component, useState } from 'react';
import { View, StyleSheet, TextInput, Image, Button, Alert } from 'react-native';
import { EventType } from 'react-native-gesture-handler/lib/typescript/EventType';
import { Text } from 'react-native-paper';
import { event } from 'react-native-reanimated';
import { Formik } from 'formik';
import * as Yup from 'yup'
import {firebase, db} from '../../firebase';
import { useMonitorAnimatedValue } from '../hooks/useMonitorAnimatedValue';

const SignUp = ({navigation}:any) => {
    const SignUpFormSchema = Yup.object().shape({
        email: Yup.string().required().min(8, '필수입력 값입니다.'),
        name: Yup.string().required().min(2, '성명을 입력해주세요.'),
        username: Yup.string().required().min(2, '사용자 이름을 입력해주세요'),
        password: Yup.string()
            .required()
            .min(6, '비밀번호는 최소 6자 이상입니다.')
    })

    const onSignUp = async (email:string, password:string, name:string, username:string) => {
        try {
            const authUser = await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                
            console.log('firebase user created successfully')

            db.collection('users').add({
                owner_uid: authUser.user?.uid,
                name: name,
                username: username,
                email: authUser.user?.email,
                avatar: '',
                phone: '',
            })
        } catch (error:any) {
            Alert.alert(error.message)
        }
    }
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{email: '', name: '', username: '', password: ''}}
                onSubmit={values => {
                    onSignUp(values.email, values.password, values.name, values.username)
                }}
                validationSchema={SignUpFormSchema}
                validateOnMount={true}
            >
                {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
                    <>
                        <Image source={require("../Image/InstagramImage.png")}
                            style={{ width: '100%' }} />
                        <Text style={{ paddingBottom: 80, color: '#9e9e9e', fontSize: 15 }}>친구들의 사진과 동영상을 보려면 가입하세요.</Text>
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput, {
                                    borderColor:
                                        values.email.length < 1 || values.email.length >= 8 ? '#ccc' : 'red'
                                }]}
                                placeholder="휴대폰 번호 또는 이메일 주소"
                                autoCapitalize='none'
                                keyboardType='email-address'
                                textContentType={'emailAddress' || 'telephoneNumber'}
                                autoFocus={true}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                        </View>
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput, {
                                    borderColor:
                                        values.name.length < 1 || values.name.length >= 2 ? '#ccc' : 'red'
                                }]}
                                placeholder="성명"
                                autoCapitalize='none'
                                textContentType='name'
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                        </View>
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput, {
                                    borderColor:
                                        values.username.length < 1 || values.username.length >= 2 ? '#ccc' : 'red'
                                }]}
                                placeholder="사용자 이름"
                                autoCapitalize='none'
                                textContentType='username'
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username}
                            />
                        </View>
                        <View style={styles.loginInfo}>
                            <TextInput
                                style={[styles.TextInput, {
                                    borderColor:
                                        values.password.length < 1 || values.password.length >= 6 ? '#ccc' : 'red'
                                }]}
                                placeholder="비밀번호"
                                autoCapitalize='none'
                                secureTextEntry={true}
                                textContentType='password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                        </View>
                        <View style={[{ width: "75%", margin: 30 }]}>
                            <Button title='가입하기'
                                onPress={handleSubmit}
                                disabled={!isValid}
                            />
                        </View>
                        <Text style={{ paddingTop: 30, color: '#000000' }}> 계정이 있으신가요?
                            <Text style={{ color: '#2196f3' }} onPress={() => navigation.goBack() }> 로그인 </Text>
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
        borderColor: 'gray',
        borderWidth: 2,
        width: 295, //textinput 길이
        margin: 5
    },
})

export default SignUp;