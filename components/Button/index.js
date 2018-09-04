import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Button({iconName, onPress}) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <MaterialCommunityIcons name={iconName} size={80} color={"white"} />
    </TouchableOpacity>
  );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
}

export default Button;