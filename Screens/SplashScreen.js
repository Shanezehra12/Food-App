import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import Color from "../Constant/Color";
import MyLoginButton from "../Components/MyLoginButton";

const SplashScreen = (props) => {
  /* useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("LoginScreen");
    },4000);
  },[]); */

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
    
      <Image
      source={require("../assets/Splash/16.jpg")}
      style={{ height: "30%", width: "90%", marginBottom: 40 }}
      />

<Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", 
      fontStyle: "normal", marginTop: 10, color: "white"}}>
        Already have an Account? 
      </Text>

      <View style={{width: "40%"}}>
          <MyLoginButton
            onPress={() => {
              props.navigation.navigate("LoginScreen");
            }}
            btnTitle="LOGIN"
          />
        </View>


        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", 
      fontStyle: "normal", marginTop: 40, color: "white"}}>
        Didn't have an Account? Create Account 
      </Text>

      <View style={{width: "40%"}}>
          <MyLoginButton
            onPress={() => {
              props.navigation.navigate("SignupScreen");
            }}
            btnTitle="SIGNUP"
          />
        </View> 

        <Image
      source={require("../assets/Splash/17.jpg")}
      style={{ height: "30%", width: "95%", marginTop: 10}}
      />

    </View>

    
  );
};
export default SplashScreen;