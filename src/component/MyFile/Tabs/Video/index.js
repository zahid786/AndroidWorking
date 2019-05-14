import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text> No Videos </Text>
      </View>
    );
  }
}
