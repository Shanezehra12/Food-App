import React from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import { AllMeals } from "../../Data/DummyData";

const AllMealsScreen = (props) => {
  const catId = props.route.params.catId;
  const data = props.route.params.data;

  const MyMeals = AllMeals.filter((item) => item.catId == catId);

  return (
    <SafeAreaView>
          <View style={{ marginHorizontal: 10, marginTop: 90 }}>
        <Text style={{ color: "black", fontWeight: "bold", textAlign: "left", fontSize: 28, marginTop: -40 }}
                      > 
                      Select your favourite Pizza Recipe: 
        </Text>

      <FlatList
        data={MyMeals}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(itemData) => {
          return (
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("MealsDetailScreen", {
                  mealsData: itemData.item,
                });
              }}
              style={{
                height: 110,
                width: "100%",
                margin: 5,
                marginBottom: 8
              

              }}
            >
              <ImageBackground
                borderRadius={10}
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
                    borderRadius: 10,
                    backgroundColor: "#00000030",
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

export default AllMealsScreen;
