import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { back } from "../../Assets/images";

class Header extends React.Component {
  render() {
    const { title, right_text, right_click, navigation } = this.props;
    return (
      <View style={LocalStyle.Container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={LocalStyle.backOuter}
        >
          <Image source={back} style={LocalStyle.backView} />
          <Text style={LocalStyle.backText}>Back</Text>
        </TouchableOpacity>

        <Text style={LocalStyle.middleText}>{title}</Text>

        <View style={LocalStyle.rightBottom}>
          {right_text && (
            <TouchableOpacity
              onPress={() => {
                right_click();
              }}
              style={LocalStyle.rightTouch}
            >
              <Text style={LocalStyle.rightText}>{right_text}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const LocalStyle = StyleSheet.create({
  Container: {
    width: "100%",
    height: hp(7),
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  rightBottom: { width: wp(20) },
  middleText: {
    fontSize: hp(2.2),
    width: wp(48),
    textAlign: "center",
    fontWeight: "bold",
  },
  rightTouch: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  rightText: {
    fontSize: hp(2.2),
    color: "#776FE8",
    fontWeight: "bold",
    textAlign: "center",
  },
  backOuter: {
    width: wp(22),
    flexDirection: "row",
    alignItems: "center",
  },
  backView: { height: hp(2.6), width: wp(10), resizeMode: "contain" },

  backText: { color: "#776FE8", fontSize: hp(2.2), fontWeight: "bold" },
});

export default Header;
