import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import {
  Container,
  Tab,
  Tabs,
  Left,
  Button,
  Icon,
  Body,
  Right,
  Header,
  Title
} from "native-base";
import Downloads from "./Tabs/Downloads/";
import Music from "./Tabs/Music/";
import Playlist from "./Tabs/Playlist/";
import Video from "./Tabs/Video/";

export default class MyFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }
  onChangeTab = ({ tab, i }) => {
    this.setState({
      activeTab: i
    });
  };
  render() {
    return (
      <Container>
        <Header style={styles.headerColor}>
          <Left>
            <Title>Header</Title>
          </Left>

          <Right>
            <Button transparent>
              <Icon name="music" type="FontAwesome5" />
            </Button>
            {this.state.activeTab == 0 ? (
              <Fragment>
                <Button transparent>
                  <Icon name="setting" type="AntDesign" />
                </Button>
                <Button transparent>
                  <Icon name="md-share-alt" type="Ionicons" />
                </Button>
                <Button transparent>
                  <Icon name="more" />
                </Button>
              </Fragment>
            ) : this.state.activeTab == 1 || this.state.activeTab == 2 || this.state.activeTab==3 ? (
              <Fragment>

              <Button transparent>
                <Icon name="sort-amount-desc" type="FontAwesome" />
              </Button>
              <Button transparent>
              <Icon name="reload"  type="MaterialCommunityIcons" />
            </Button>
              </Fragment>
            
            ) : (
              <View />
            )}
          </Right>
        </Header>
        <Tabs onChangeTab={this.onChangeTab}>
          <Tab
            heading="Downloads"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Downloads />
          </Tab>
          <Tab
            heading="Music"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Music />
          </Tab>
          <Tab
            heading="Video"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Playlist />
          </Tab>
          <Tab
            heading="Playlist"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Video />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
