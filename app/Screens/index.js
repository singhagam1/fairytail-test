import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Localstyles.Container}>
      <TouchableOpacity
        style={Localstyles.buttonStyle}
        onPress={() => navigation.navigate("Settings")}
      >
        <Text style={Localstyles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={Localstyles.buttonStyle}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={Localstyles.buttonText}>Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Localstyles = {
  Container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginBottom: hp(2),
    borderColor: "#cecece",
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 15,
    width: wp(40),
  },
  buttonText: {
    textAlign: "center",
    fontSize:hp(1.8)
  },
};

export default Home;
