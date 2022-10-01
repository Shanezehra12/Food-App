import React from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { CATEGORY } from "../../Data/DummyData";
const CategoryScreen = (props) => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: 10, marginTop: 90 }}>
        <Text style={{ color: "black", fontWeight: "bold", textAlign: "left", fontSize: 28, marginTop: -40 }}
                      > 
                      Select a Category: 
        </Text>
        <FlatList
          data={CATEGORY}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(itemData) => {
            return (
                
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("AllmealsScreen", {
                    catId: itemData.item.id,
                  });
                }}
                style={{
                  height: 200,
                  width: "100%",
                  margin: 5,
                  
                }}
              >
                
                <ImageBackground
                  borderRadius={20}
                  style={{
                    height: "100%",
                    width: "99%",
                    justifyContent: "flex-end",
                    overflow: "hidden",
                    
                    
                  }}
                  source={{ uri: itemData.item.image }}
                >

                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      justifyContent: "flex-end",
                      
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    >
                      {itemData.item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CategoryScreen;
