import React, { Component } from "react";
import { View, Text, Image, TextInput, Check } from "react-native";
import MyInput from "../../Components/MyInput";
import Color from "../../Constant/Color";
import MyLoginButton from "../../Components/MyLoginButton";

const SignupScreen = (props) => {

  

    return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        
        <Image
      source={require("../../assets/Splash/16.jpg")}
      style={{ height: "50%", width: "80%", marginBottom: 90, marginTop: -40, borderRadius: 10 }}
      />
      </View>

      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", 
      fontStyle: "normal", marginTop: -150}}>
        Create Account
      </Text>

      <View style={{ paddingHorizontal: 10 }}>
        <MyInput placeholder="Name"/>

        <MyInput placeholder=" Email Address" />

        <MyInput placeholder="Phone Number" />

        <MyInput placeholder="Password" />

        <Text style={{ fontSize: 16, fontWeight: "bold", textAlign: "center", 
      fontStyle: "normal", marginTop: 10}}>
        I accept Terms an Conditions, Privacy Policy
      </Text>


        <View>
          <MyLoginButton
            onPress={() => {
              props.navigation.navigate("CategoryScreen");
            }}
            btnTitle="SIGNUP"
          />
        </View>


      </View>
    </View>
  );
};

export default SignupScreen;
