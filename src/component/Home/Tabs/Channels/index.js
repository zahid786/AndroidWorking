import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  Container,
  Button,
  Content,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  Icon
} from "native-base";
import { styles } from "./styles";
import avtImage from "../../../../../assets/channelImages/z.jpg";

export default class Channels extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Content>
          <Text style={styles.titleTxt}>Creator on the Rise</Text>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={avtImage} />
              </Left>
              <Body>
                <Text style={styles.titleTxt}>Zahid Ali</Text>
                <Text>124,2323 subscribers</Text> 
              </Body>
              <Right>
                <Icon name="share" type="MaterialCommunityIcons" />
              </Right>  
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
