import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../Components/Header";
import { down } from "../../Assets/images";
import SelectModal from "../../Components/SelectModal";
import { data } from "../../Components/data";

const Settings = (props) => {
  const [selectedName, setSelectedName] = useState("Dating & Friends");
  const [openModal, setOpenModal] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(0);

  const navigation = useNavigation();

  React.useEffect(() => {
    async function checkdata() {
      let id = await AsyncStorage.getItem("profileType");
      setSelectedOptionId(id);
      data.some((item) => {
        if (item.id === id) {
          setSelectedName(item.name);
        }
      });
    }
    checkdata();
  }, []);

  const onSelect = () => {
    data.some((item) => {
      if (item.id === selectedOptionId) {
        setSelectedName(item.name);
      }
    });
    setOpenModal(false);
  };

  const onSave = async () => {
    await AsyncStorage.setItem("profileType", selectedOptionId);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}>
      <Header
        navigation={navigation}
        title={"My Profile"}
        right_text={"Save"}
        right_click={() => onSave()}
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
        <TouchableOpacity
          onPress={() => setOpenModal(true)}
          style={Localstyles.dropdown}
        >
          <Text style={Localstyles.paragraph}>{selectedName}</Text>
          <Image source={down} style={Localstyles.dropView} />
        </TouchableOpacity>
      </View>

      <SelectModal
        onClose={() => setOpenModal(false)}
        modalVisible={openModal}
        setSelectedOptionId={(id) => setSelectedOptionId(id)}
        selectedOptionId={selectedOptionId}
        onSelect={() => onSelect()}
      />
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
  dropView: {
    height: hp(2),
    width: hp(2),
    resizeMode: "contain",
  },
  dropdown: {
    fontSize: hp(1.8),
    color: "#000",
    paddingBottom: hp(0.5),
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
  },
};

export default Settings;
