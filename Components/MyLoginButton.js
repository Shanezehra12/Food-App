import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Color from "../Constant/Color";

const MyLoginButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        height: 40,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 40,
        marginTop: "5%",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "red",
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
        {props.btnTitle}
      </Text>
    </TouchableOpacity>
  );
};
export default MyLoginButton;
