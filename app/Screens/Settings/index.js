import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Header from "../../Components/Header";

const Settings = (props) => {
  const [content, setContent] = useState();
  const navigation = useNavigation();
  React.useEffect(() => {}, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Header
        navigation={navigation}
        title={"My Profile"}
        right_text={"Save"}
        right_click={() => alert("s")}
      />
      <View style={Localstyles.outerView}>
        <Text style={Localstyles.paragraph}>
          Have a family. Create a better life for people around me.
        </Text>

        <Text style={Localstyles.headings}>My values ...</Text>
        <Text style={Localstyles.paragraph}>
          Kindness, family, healthy living, and education.
        </Text>

        <Text style={Localstyles.headings}>My hobbies ...</Text>
        <Text style={Localstyles.paragraph}>
          Scuba diving and international cuisine.
        </Text>

        <Text style={Localstyles.headings}>
          Instagram (only show to your adventure matches)
        </Text>
        <Text style={Localstyles.paragraph}>@taigeair</Text>

        <Text style={Localstyles.headings}>
          Fairytrail Mode (tell others know you're not open to dating)
        </Text>
        <Text style={Localstyles.paragraph}>DROPDOWN</Text>
      </View>
    </SafeAreaView>
  );
};

const Localstyles = {
  outerView: {
    padding: wp(5),
  },
  paragraph: {
    fontSize: hp(1.8),
    color: "#000",
    marginTop: hp(1),
  },
  headings: {
    fontSize: hp(1.8),
    color: "#2d8659",
    marginTop: hp(3.5),
  },
};

export default Settings;
