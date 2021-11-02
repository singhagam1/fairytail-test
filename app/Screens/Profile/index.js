import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Components/Header";
import { dummy_profile } from "../../Assets/images";

const Profile = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Header navigation={navigation} title={"Make"} />
      <Image source={dummy_profile} style={Localstyles.dummyPicture} />
      <Text style={Localstyles.name}>Taige, United States, 34</Text>

      <View style={Localstyles.innerContainer}>
        <View>
          <Text style={Localstyles.character}>Character:</Text>
          <Text style={Localstyles.category}>Aladdin</Text>
        </View>
        <TouchableOpacity style={Localstyles.buttonStyle} onPress={() => {}}>
          <Text style={Localstyles.friends}>Only Friends</Text>
        </TouchableOpacity>
      </View>
      <Text style={Localstyles.paragraph}>
        Most adventurous experience: {"\n"}My friend and I got stranded in a
        blizzard when our SUV froze in Iceland!
      </Text>
      <Text style={Localstyles.paragraph}>
        Top wishes: {"\n"}Take a year off to explore the world. {"\n"}Have a
        family. Create a better life for people around me.
      </Text>
    </SafeAreaView>
  );
};

const Localstyles = {
  dummyPicture: {
    width: wp(90),
    borderRadius: 5,
    overflow: "hidden",
    marginVertical: hp(1.6),
    alignSelf: "center",
  },
  innerContainer: {
    flexDirection: "row",
    marginHorizontal: wp(6),
    marginTop: hp(2),
    justifyContent: "space-between",
  },
  character: {
    fontSize: hp(1.8),
    fontWeight: "bold",
  },
  category: {
    fontSize: hp(1.8),
    color: "#937AFF",
  },
  friends: {
    fontSize: hp(1.4),
    color: "#FFF",
  },
  buttonStyle: {
    borderRadius: 8,
    backgroundColor: "#DE1B7E",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  paragraph: {
    marginTop: hp(2),
    marginHorizontal: wp(6),
    fontSize: hp(1.8),
  },
  name: {
    fontSize: hp(2.3),
    marginHorizontal: wp(5),
    fontWeight: "bold",
  },
};

export default Profile;
