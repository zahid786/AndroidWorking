import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Container } from 'native-base'
import { styles } from './styles'
import { ScrollView } from 'react-native-gesture-handler';
import YouTube from "react-native-youtube"
export default class Subscriptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container>

      <Header searchBar rounded style={styles.barSearch}>
      <Item>
        <Icon name="ios-search" />
        <Input placeholder="Search YouTube" />
      </Item>

      <View>
        <Icon name="music" type="FontAwesome" style={styles.searcIcon} />
      </View>
    </Header>
    <ScrollView>
      <View style={styles.mostPapularSecond}>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <YouTube 
        apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
          videoId="60Mb06Wk1y4" // The YouTube video ID
          play={true} // control playback of video with true/false
          //fullscreen={true} // control whether the video should play in fullscreen or inline
          loop={true} // control whether the video should loop when ended
          onReady={e => this.setState({ isReady: true })}
          onChangeState={e => this.setState({ status: e.state })}
          onChangeQuality={e => this.setState({ quality: e.quality })}
          onError={e => this.setState({ error: e.error })}
          style={styles.YoutubeVideo}
        />
        </View>
        </View>
        </ScrollView>
      </Container>
    );
  }
}
