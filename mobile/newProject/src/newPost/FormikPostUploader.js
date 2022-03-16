import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, Button } from "react-native";
import { Colors } from 'react-native-paper'
import * as Yup from 'yup'
import { Formik } from 'formik'
import validUrl from 'valid-url'

const PlaceHolder_Img = 
    'https://www.froben11.de/wp-content/uploads/2016/10/orionthemes-placeholder-image-1024x683.png';

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('URL은 필수입력사항입니다.'),
    caption: Yup.string().max(1000, '내용이 최대 글자수를 초과하였습니다.')
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl, setThumbnailUrl] = useState(PlaceHolder_Img);


    return (
        <Formik
        initialValues={{caption: '', imageUrl: ''}}
        onSubmit={values => {
            console.log(values)
            console.log('게시글이 성공적으로 등록되었습니다!')
            navigation.goBack()
        }}
        validationSchema={uploadPostSchema}
        validateOnMount={true}
        >
            {({ 
                handleBlur, 
                handleChange, 
                handleSubmit, 
                values, 
                errors, 
                isValid
              }) => (
                <>
                    <View style={[styles.container]}>
                        <Image 
                            source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PlaceHolder_Img}}
                            style={[styles.thumbnailImg]}
                        />
                        <View style={[styles.captionContainer]}>
                            <TextInput 
                                style={[styles.caption]}
                                placeholder="내용을 작성하세요..." 
                                placeholderTextColor="gray"
                                multiline={true}
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                            />
                        </View>
                    </View>
                    <View style={[styles.divider]}></View>
                    <TextInput 
                        onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                        style={[styles.imageUrl]}
                        placeholder="이미지 Url을 입력하세요" 
                        placeholderTextColor="gray"
                        onChangeText={handleChange('imageUrl')}
                        onBlur={handleBlur('imageUrl')}
                        value={values.imageUrl}
                    />
                    {errors.imageUrl && (
                        <Text style={{fontSize: 10, color: 'red'}}>
                            {errors.imageUrl}
                        </Text>
                    )}

                    <Button onPress={handleSubmit} title="등록하기" disabled={!isValid} />
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    thumbnailImg: {
        width: 100,
        height: 100,
    },
    caption: {
        fontSize: 20,
    },
    imageUrl: {
        fontSize: 18,
    },
    divider: {
        borderTopWidth: 0.2,
        borderColor: Colors.grey400,
    },
    captionContainer: {
        flex: 1,
        marginLeft: 12,
    }
})

export default FormikPostUploader