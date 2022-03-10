import React, {useRef, useMemo, useCallback} from "react";
import type { FC } from "react";
import { StyleSheet, FlatList, Image, View, Animated } from "react-native";
import type { NativeSyntheticEvent, NativeScrollEvent } from "react-native";
import { Colors } from "react-native-paper";
import { useAnimatedValue } from "../hooks/useAnimatedValue";
import { useMonitorAnimatedValue } from "../hooks/useMonitorAnimatedValue";
import { useTransformStyle } from "../hooks/useTransformStyle";

export type ImageSliderProps = {
    imageUrls: string[]
    imageWidth: number
}

const circleWidth = 10, circleMarginRight = 5;

export const ImageSlider: FC<ImageSliderProps> = ({
    imageUrls, imageWidth}) => {
    const flatListRef = useRef<FlatList | null>(null);
    const selectedIndexAnimValue = useAnimatedValue(0);

    const circleWidthValue = useAnimatedValue(circleWidth);
    const circleMarginRightAnimValue = useAnimatedValue(circleMarginRight);

    const onScroll = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>) => {
        if (imageWidth == 0)
            return
        const {contentOffset} = event.nativeEvent;
        const index = Math.round(contentOffset.x / imageWidth);
        selectedIndexAnimValue.setValue(index)
    }, [imageWidth])

    const circles = useMemo(() =>
        imageUrls.map((uri, index) => <View key={index} style={styles.circle} />), [])
    const translateX = useTransformStyle({
        translateX: Animated.multiply(
            selectedIndexAnimValue,
            Animated.add(circleWidthValue, circleMarginRightAnimValue)
        )
    })

    return (
        <>
            <FlatList ref={flatListRef} scrollEnabled={true} pagingEnabled={true}
                onScroll={onScroll}
                contentContainerStyle={{width: imageUrls.length * imageWidth}}
                showsHorizontalScrollIndicator={false} horizontal={true}
                data={imageUrls}
                renderItem={({item}) => (
                    <Image style={[styles.image, {width: imageWidth}]}
                        source={{uri: item}} />  
                )}
                keyExtractor={(item, index) => index.toString()} />
            <View style={[styles.iconBar, {justifyContent: 'center'}]}>
                {circles.length > 1 ? (
                    <View style={{flexDirection: 'row'}}>
                        {circles}
                        <Animated.View
                            style={[styles.circle, styles.selectedCircle, translateX]} />
                    </View>
                ):
                (<></>)}
                {/* <View style={{flexDirection: 'row'}}>
                    {circles}
                    <Animated.View
                        style={[styles.circle, styles.selectedCircle, translateX]} />
                </View> */}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {height: '100%', resizeMode: 'cover'},
    iconBar: {flexDirection: 'row', padding: 5},
    circle: {
        width: circleWidth, 
        height: circleWidth, 
        borderRadius: circleWidth/2,
        marginRight: circleMarginRight,
        backgroundColor: Colors.grey300,
    },
    selectedCircle: {position: 'absolute', backgroundColor: Colors.grey700},

})