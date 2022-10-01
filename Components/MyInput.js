import React from "react";
import { View, Text, TextInput } from "react-native";
import Color from "../Constant/Color";

const MyInput = (props) => {
    return (
      <View>
        <Text>{props.title}</Text>
        <View
          style={{
            height: 50,
            width: "100%",
            borderRadius: 10,
            borderColor: "black",
            borderWidth: 2,
            paddingHorizontal: 12,
            marginBottom: 16
            
          }}
        >
          <TextInput
            placeholder={props.placeholder}
            style={{ width: "100%", height: "100%"}}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
          />
        </View>
      </View>
    );
  };
  export default MyInput;