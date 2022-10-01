import React from 'react';
import { View, Text, FlatList, Image, Dimensions, ScrollView } from "react-native";

const MealsDetailScreen = (props) => {
  const MealsData= props.route.params.mealsData;
  return (
    <ScrollView>
    <FlatList 
    showsHorizontalScrollIndicator={false}
    horizontal={true}
    keyExtractor={(item, index) => index.toString()}
    data={MealsData.imagesUrl} 
    renderItem={(itemData) => {
      return (
        <View style={{height: 150, 
        width: Dimensions.get("screen").width - 25, 
        marginHorizontal: 15,
        marginTop: 10,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.36,
shadowRadius: 6.68,
elevation: 11,
marginTop: 50,
borderRadius: 30
        }}
        >
        <Image style={{height: "100%", width: "100%", borderRadius: 30 }}
        source={{uri: itemData.item.image }}
        />
        </View> 
      );
    }}
    />

    <View style={{
      width: "100%",
      paddingHorizontal: 10
    }}
    >

{/*       JS ES6 func*/}   
    
    
    <Text style={{
            marginVertical: 10,
            fontSize: 22,
            color: "red",
            fontWeight: "bold",
          }}
    > {`Steps To Make ${MealsData.name} Pizza:`} </Text>

<View>
<Text style={{
            marginVertical: 10,
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
          }}
    > {`Time Duration : `} 
{MealsData.timeDuration}
    </Text>
</View>



    <View>
      {
        MealsData.Steps.map((i) =>{
          return(
            <View
            key={i.id}
            > 
            <Text style={{
            marginVertical: 10,
            fontSize: 20,
            color: "black",
            fontWeight: "bold",
          }} 
            > 
            {`* ${i.stepCount}`} </Text> 

              <Text style={{fontSize:18, opacity: 0.6}}>
              {i.stepDescription}</Text>
            </View>
          )
        })
      }
    </View>
 


    </View>

    </ScrollView>
    
  );
};

export default MealsDetailScreen;
