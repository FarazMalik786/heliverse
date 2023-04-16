import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react'
import { Button } from 'react-native';
import { StyleSheet, Text, View, ImageBackground, Animated, Image, Pressable } from 'react-native';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function Screen3() {
    const navigation = useNavigation();
    const [count, setCount] = useState(15000);

    if (count < 40000) {
        setTimeout(() => {
            setCount((existing) => existing + 1000)
        }, 200);
    }
    const handlePress = () => {
       navigation.navigate("screen1")
    };

    return (
        <ImageBackground source={require("../Images/award_bg.png")} style={styles.background} resizeMode="stretch" >


            <Text style={{ fontSize: responsiveFontSize(4), color: "yellow" }}>4 Friends Gave U </Text>
            <Text style={{ fontSize: responsiveFontSize(4), color: "yellow" }}> Some Love</Text>

            <ImageBackground source={require("../Images/main-heart.png")} style={styles.heart} >
                <Text style={{ fontSize: responsiveFontSize(3), color: "yellow" }}>{count}</Text>
            </ImageBackground>

            <View style={{ alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", paddingLeft: 60 }}>
                    <Image source={require("../Images/girlClap.png")} style={{ height: responsiveHeight(35), width: responsiveWidth(30) }} />
                    <Pressable onPress={handlePress} style={styles.arrow}>
                        <Image source={require("../Images/arrow.png")} style={styles.arrow}/>
                    </Pressable>
                </View>

                <Image source={require("../Images/awardPlatform.png")} style={{ height: responsiveHeight(10), width: responsiveWidth(100) }} />
            </View>
        </ImageBackground>
    )
}

export default Screen3
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    heart: {
        height: responsiveHeight(18),
        width: responsiveWidth(45),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: responsiveHeight(5)
    },
    arrow: {
        height: responsiveHeight(8),
        width: responsiveWidth(15),
        paddingLeft: 40,
    }

})
