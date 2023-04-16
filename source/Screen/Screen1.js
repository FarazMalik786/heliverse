import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, Animated } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const value1 = new Animated.ValueXY({ x: responsiveWidth(14), y: responsiveWidth(25) })
function Screen1() {
  const navigation = useNavigation();
  const [time , settime ] = useState();


  useEffect(() => {

    Animated.timing(value1, {
      toValue: responsiveWidth(100),
      duration: 2000,
      useNativeDriver: false,
    }).start();

  },[])

  useEffect(()=>{
setTimeout(() => {
  navigation.navigate("screen2")
}, 3000);
  },[])

    setInterval(() => {
      const t = new Date();
      settime(`${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`)
    }, 1000);
 
  

  return (

  
    <ImageBackground source={require("../Images/award_bg.png")} style={styles.background} resizeMode="stretch" >
      <Animated.Image source={require("../Images/curtain.png")} style={styles.curtain} />
      <Animated.Image source={require("../Images/curtain.png")} style={styles.curtain2} />

      <ImageBackground source={require("../Images/castingLogo.png")} style={{ height: responsiveHeight(15), width: responsiveWidth(20), justifyContent:"center" , alignItems:"center" }} >
        <Text style={{color:"white",marginTop: responsiveHeight(4),fontSize: responsiveFontSize(2.5)}}>{time}</Text>
      </ImageBackground>
      <Text style={{ color: "pink", fontSize: responsiveFontSize(3), marginBottom: responsiveHeight(9) , transform:[{rotate : "-14deg"}] }}>CASTING CALL</Text>
      <Text style={{ color: "yellow", fontSize: responsiveFontSize(3), marginBottom: responsiveHeight(5) }}>The Results R In!</Text>
      <View style={{ alignItems: "center" }}>
        <Image source={require("../Images/girlClap.png")} style={{ height: responsiveHeight(40), width: responsiveWidth(30) }} />
        <Image source={require("../Images/awardPlatform.png")} style={{ height: responsiveHeight(12), width: responsiveWidth(100) }} />
      </View>
      </ImageBackground>
  

  )
}

export default Screen1
const styles = StyleSheet.create({
  background: {
   
    justifyContent: "flex-end",
    alignItems: "center",

  },
  curtain: {
    height: responsiveHeight(100),
    width: responsiveWidth(81),
    position: "relative",
    top: responsiveHeight(90),
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
  }
})