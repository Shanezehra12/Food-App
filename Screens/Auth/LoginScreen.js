import React, { useState } from "react";
import { View, Text, Image, TextInput, } from "react-native";
import MyInput from "../../Components/MyInput";
import Color from "../../Constant/Color";
import MyLoginButton from "../../Components/MyLoginButton";

const LoginScreen = (props) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const loginHandler = () => {
    /* if (email === "") {
      alert("Please enter your Email first");
    }else if (password === "") {
      alert("Please enter your Password first");
    }else {
    } */
  };

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
      style={{ height: "50%", width: "80%", marginBottom: 90, marginTop: -20, borderRadius: 10 }}
      />
      </View>

      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", 
      fontStyle: "normal", marginTop: -140, marginBottom: 30 }}>
        Login to your Account
      </Text>
      
      <View style={{ paddingHorizontal: 10}}>
        <MyInput
          placeholder="Please enter your Email Address"
          title="Email Address"
          onChangeText={(text)=>{
            setEmail(text);
          }}
        />
        <MyInput
        secureTextEntry
        placeholder="Please enter your Password" 
        title="Password"
        onChangeText={(text)=>{
          setPassword(text);
        }}
        />
        

        <View style={{marginTop: 10}}>
          <MyLoginButton
          onPress={() => {
            props.navigation.navigate("CategoryScreen");
          }}
            btnTitle="LOGIN"
          />

        </View>

        
      </View>
    </View>
  );
};

export default LoginScreen;
