import React from "react";
import { View, Text, FlatList, ImageBackground, TouchableOpacity, Image} from "react-native";

const HomeScreen = (props) => {
    const Data = [
         {
            id: Math.random (),
            name: "Beef Pizza",
            image: "https://media.istockphoto.com/photos/steak-and-mushroom-pizza-picture-id477995767?k=20&m=477995767&s=612x612&w=0&h=3QuW2H4BmHxtHBaK7VQiGEKuabJDQPruqEi9ecb362s=",
        },
         {
            id: Math.random (),
            name: "Chicken Pizza",
            image: "https://thumbs.dreamstime.com/b/curry-chicken-pizza-tomato-onion-chili-powder-black-pepper-isolated-wooden-cutting-board-side-view-fastfood-table-252842825.jpg",
        }, 
        {
            id: Math.random (),
            name: "Vegetarian Pizza",
            image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg",
        },
        {
            id: Math.random (),
            name: "Breakfast Pizza",
            image: "https://img.freepik.com/premium-photo/delicious-pizza-with-bacon-egg-arugula-served-wooden-table-surrounded-with-fresh-ingredients_272335-27.jpg?w=2000",
        },   
    ];

    return (
        <View style={{ flex: 1, backgroundColor: "white", }}>
            <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={Data}
            renderItem={(itemData) => {
                
                return (

                    <TouchableOpacity
                        onPress={() => {
                            props.navigation.navigate("CategoryScreen");
                        }}>
                    

                <ImageBackground
                resizeMode="contain"
                imageStyle={{borderRadius: 10, borderWidth: 2, borderColor: "black",  }}
                source={{ uri: itemData.item.image }}
                style={{height: 220, 
                width:"97%", 
                marginBottom: 15,
                borderColor: "black", 
                marginHorizontal: 10,
                justifyContent: "flex-end", 
                alignItems: "center"
                }}
                > 
                <View style={{ width: "70%", backgroundColor: "wheat", opacity: 0.7,
                alignItems: "center", justifyContent: "flex-end", borderRadius: 50, marginTop: 20 }}>
                <Text style={{ fontSize: 24, color:"black", fontWeight: "bold" }}>
                    {itemData.item.name}
                </Text>
                </View>


                </ImageBackground>
                </TouchableOpacity>
                );
            }}
            />
            </View>
  
    );
};


export default HomeScreen;