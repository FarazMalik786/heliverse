import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground, Animated, Image, Pressable } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

const value1 = new Animated.ValueXY({ x: responsiveWidth(14), y: responsiveWidth(25) });
const value2 = new Animated.Value(responsiveWidth(-80))

function Screen2() {

    const navigation = useNavigation();
    const profileAnimation = Animated.timing(value2, {
        toValue: responsiveWidth(0),
        duration: 200,
        useNativeDriver: false,
    });

    useEffect(() => {

        Animated.sequence([
            Animated.timing(value1, {
                toValue: responsiveWidth(100),
                duration: 2000,
                useNativeDriver: false,
            }),
            profileAnimation

        ]).start()

    });
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("screen3");
        }, 20000);
    }, []);

    const handlePress = () => {

        Animated.timing(value2, {
            toValue: responsiveWidth(100),
            duration: 200,
            useNativeDriver: false,
        }).start(() => {
            profileAnimation.reset();
            profileAnimation.start();
        });

    };

    return (
        <ImageBackground source={require("../Images/award_bg.png")} style={styles.background} resizeMode="stretch" >
            <Animated.Image source={require("../Images/curtain.png")} style={styles.curtain} />
            <Animated.Image source={require("../Images/curtain.png")} style={styles.curtain2} />
            <Animated.View style={styles.avtar2}>
                <Image source={require("../Images/avtar2.png")} style={styles.avtar_img} />
                <View>
                    <Text style={{ fontSize: responsiveFontSize(3), color: "yellow" }}>D-Lister</Text>
                    <Text style={{ fontSize: responsiveFontSize(2), color: "white" }}>Sally</Text>
                </View>
            </Animated.View>

            <Text style={{ color: "yellow", fontSize: responsiveFontSize(4), marginVertical: responsiveHeight(4) }}>Gave U Some Love</Text>
            <ImageBackground source={require("../Images/main-heart.png")} style={{ height: responsiveHeight(18), width: responsiveWidth(45), justifyContent: "center", alignItems: "center" }} >
                <Text style={{ fontSize: responsiveFontSize(3), color: "yellow" }}>15000</Text>
            </ImageBackground>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 60 }}>
                    <Image source={require("../Images/girlClap.png")} style={{ height: responsiveHeight(35), width: responsiveWidth(30), }} />
                    <Pressable onPress={handlePress} style={({pressed})=> pressed ? [styles.arrow , {opacity:0.5}] : styles.arrow}>
                        <Image source={require("../Images/arrow.png")} style={styles.arrow} />
                    </Pressable>
                </View>

                <Image source={require("../Images/awardPlatform.png")} style={{ height: responsiveHeight(10), width: responsiveWidth(100) }} />
            </View>
        </ImageBackground>
    )
}

export default Screen2
const styles = StyleSheet.create({
    background: {
        justifyContent: "flex-end",
        alignItems: "center",

    },
    curtain: {
        height: responsiveHeight(100),
        width: responsiveWidth(81),
        position: "relative",
        top: responsiveHeight(89.5),
        left: value1.x,
        zIndex: 2,

    },
    curtain2: {
        height: responsiveHeight(100),
        width: responsiveWidth(81),
        transform: [{ scaleX: -1 }],
        position: "absolute",
        top: 0,
        right: value1.y,
        zIndex: 2,

    },
    avtar2: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: responsiveWidth(55),
        alignItems: "center",
        position: "relative",
        right: value2
    },
    avtar_img: {
        height: responsiveHeight(13),
        width: responsiveWidth(25),
        borderRadius: responsiveWidth(18),
        borderColor: "yellow",
        borderWidth: responsiveWidth(0.5)
    },
    arrow: {
        height: responsiveHeight(8),
        width: responsiveWidth(15),
        paddingLeft: 40,

    }

})