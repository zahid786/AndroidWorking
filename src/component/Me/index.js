import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import backgroundImage from "../../../assets/channelImages/z.jpg";
import {
  Button,
  Icon,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Switch
} from "native-base";

export default class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ImageBackground source={backgroundImage} style={styles.first}>
          <View style={styles.firstBc} />
        </ImageBackground>
        <View style={styles.second}>
          <Button style={styles.iconSetting}>
            <Icon name="playlist-play" type="MaterialIcons" />
            <Text style={styles.txtColor}>PlayList</Text>
          </Button>
          <Button style={styles.iconSetting}>
            <Icon name="history" type="FontAwesome" />
            <Text style={styles.txtColor}>History</Text>
          </Button>
          <Button style={styles.iconSetting}>
            <Icon name="hourglass-3" type="FontAwesome" />
            <Text style={styles.txtColor}>Watch Later</Text>
          </Button>
        </View>
        <View style={styles.Third}>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="like2" type="AntDesign" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>Like us</Text>
            </Body>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="share" type="FontAwesome5" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>Share Snaptube</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="smile-o" type="FontAwesome" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>Share Snaptube</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="feedback" type="MaterialIcons" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>Feedback</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="setting" type="AntDesign" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>Setting</Text>
            </Body>
            <Right />
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="arrow-down-bold-box" type="MaterialCommunityIcons" />
              </Button>
            </Left>
            <Body>
              <Text style={styles.colorTxt}>About</Text>
            </Body>
            <Right />
          </ListItem>
        </View>
      </View>
    );
  }
}
