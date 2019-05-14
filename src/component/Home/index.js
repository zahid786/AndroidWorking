import React, { Component } from "react";
import { View, Text,StatusBar } from "react-native";
import { styles } from "./style";
import ForYou from "./Tabs/ForYou";
import Ternding from "./Tabs/Ternding";
import Channels from "./Tabs/Channels";

import {
  Container,
  Header,
  Input,
  Item,
  Icon,
  Tabs,
  Tab,
  Button
} from "native-base";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <StatusBar  backgroundColor="green" barStyle="light-content" />
        <Header searchBar rounded style={styles.barSearch}>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search YouTube" />
          </Item>

          <View>
            <Icon name="music" type="FontAwesome" style={styles.searcIcon} />
          </View>
        </Header>

        <Tabs>
          <Tab
            heading="For You"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <ForYou />
          </Tab>
          <Tab
            heading="Ternding"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Ternding />
          </Tab>
          <Tab
            heading="Channels"
            tabStyle={{ backgroundColor: "green" }}
            textStyle={{ color: "#fff" }}
            activeTabStyle={{ backgroundColor: "green" }}
            activeTextStyle={{ color: "#fff", fontWeight: "normal" }}
          >
            <Channels />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
