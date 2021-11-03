import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { tick } from "../../Assets/images";
import { data } from "../../Components/data";

const SelectModal = (props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => props.onClose()}
      visible={props.modalVisible}
    >
      <View style={Localstyles.mainContainer}>
        <TouchableOpacity
          style={Localstyles.staticHeight}
          onPress={() => {
            props.onClose();
          }}
        ></TouchableOpacity>
        <View style={Localstyles.innerBox}>
          <Text style={Localstyles.chooseStyle}>Choose Mode</Text>
          {data.map((item, index) => {
            return (
              <View key={index} style={Localstyles.mapView}>
                <Text
                  onPress={() => props.setSelectedOptionId(item.id)}
                  style={Localstyles.mapheading}
                >
                  {item.name}
                </Text>
                {props.selectedOptionId == item.id && (
                  <Image source={tick} style={Localstyles.tickStyle} />
                )}
              </View>
            );
          })}
          <View style={Localstyles.bottomView}>
            <TouchableOpacity
              onPress={() => props.onClose()}
              style={[
                Localstyles.outerOption,
                {
                  borderRightWidth: 1,
                },
              ]}
            >
              <Text style={Localstyles.options}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.onSelect()}
              style={Localstyles.outerOption}
            >
              <Text style={Localstyles.options}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={Localstyles.staticHeight}
          onPress={() => props.onClose()}
        ></TouchableOpacity>
      </View>
    </Modal>
  );
};

const Localstyles = {
  mainContainer: {
    justifyContent: "center",
    backgroundColor: "rgba(49,49,49,0.8)",
    height: "100%",
  },
  options: { fontSize: hp(2), color: "#776FE8" },
  outerOption: {
    width: "50%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  staticHeight: { height: hp(34) },
  innerBox: {
    backgroundColor: "#FFF",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    height: hp(32),
    alignItems: "center",
  },
  chooseStyle: { fontSize: hp(2), marginVertical: hp(3) },
  mapView: {
    flexDirection: "row",
    alignItems: "center",
    width: wp(60),
    justifyContent: "center",
  },
  mapheading: { fontSize: hp(2), marginVertical: hp(1) },
  tickStyle: {
    height: hp(2),
    width: hp(2),
    resizeMode: "contain",
    marginLeft: wp(5),
    position: "absolute",
    right: 0,
  },
  bottomView: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    height: hp(8),
    borderTopWidth: 1,
    marginHorizontal: 5,
    flexDirection: "row",
    alignItems: "center",
  },
};

export default SelectModal;
