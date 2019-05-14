import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { Icon, Container, Button, Content, Thumbnail } from "native-base";
import style, { styles } from "./styles";
// import { Thumbnail } from "react-native-thumbnail-video";
import a from "../../../../../asserts/a.png";

export default class ForYou extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <StatusBar backgroundColor="green" barStyle="light-content" />
        <ScrollView>
          <View style={{backgroundColor: "yellow"}}>
            <Button transparent>
              <Thumbnail source={a}  />
            </Button>
              <Text style={styles.YouTubeTxt}>YouTube</Text>
          </View>

          <View style={styles.mostPapular}>
            <Button style={styles.allBtn}>
              {/* <View style={styles.YoutubeBtn}> */}
              {/* <Thumbnail source={a} /> */}
              {/* <Icon
                        name="youtube"
                        type="AntDesign"
                        style={styles.YoutubeIcon}
                    /> */}
              <Text>YouTube</Text>
            </Button>
            <Button transparent style={styles.allBtn}>
              <View style={styles.WhatsappBtn}>
                <Icon
                  name="youtube"
                  type="AntDesign"
                  // style={styles.WhatsappIcon}
                />
              </View>
              <Text>YouTube</Text>
            </Button>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
