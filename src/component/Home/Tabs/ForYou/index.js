import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { Icon, Container, Button, Content, Thumbnail } from "native-base";
import { styles } from "./styles";
import Video from "react-native-video";
import YouTubee from "../../../../../assets/YouTube.png";
import Whatsapp from "../../../../../assets/Whatsapp.png";
import Facebook from "../../../../../assets/Facebook.png";
import Instagram from "../../../../../assets/Instagram.png";
import MP3 from "../../../../../assets/Mp3.png";
import Game from "../../../../../assets/Game.png";
import Dailymotion from "../../../../../assets/Dailymotion.png";
import More from "../../../../../assets/More.png";
// import Vid from "../../../../../assets/Vid.mp4"
import YouTube from "react-native-youtube";

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
          <View style={styles.mostPapular}>
            <View style={styles.innerView}>
              <Button transparent style={styles.YouTubeIcon}>
                <Thumbnail source={YouTubee} />
              </Button>
              <Text style={styles.YouTubeTxt}>YouTube</Text>
            </View>
            <View style={styles.innerView}>
              <Button transparent style={styles.WhatsappIcon}>
                <Thumbnail source={Whatsapp} />
              </Button>
              <Text style={styles.WhatsappTxt}>Whatsapp</Text>
            </View>
            <View style={styles.innerView}>
              <Button transparent style={styles.FacebookIcon}>
                <Thumbnail source={Facebook} />
              </Button>
              <Text style={styles.FacebookTxt}>Facebook</Text>
            </View>
            <View style={styles.innerView}>
              <Button transparent style={styles.InstagramIcon}>
                <Thumbnail source={Instagram} />
              </Button>
              <Text style={styles.InstagramTxt}>Instagram</Text>
            </View>
          </View>

          <View style={styles.mostPapular}>
            <View style={styles.innerView}>
              <Button transparent style={styles.MpeIcon}>
                <Thumbnail source={MP3} />
              </Button>
              <Text style={styles.Mp3Txt}>MP3</Text>
            </View>
            <View style={styles.innerView}>
              <Button transparent style={styles.GameIcon}>
                <Thumbnail source={Game} />
              </Button>
              <Text style={styles.GameTxt}>Game</Text>
            </View>

            <View style={styles.innerView}>
              <Button transparent style={styles.Dailymotion}>
                <Thumbnail source={Dailymotion} />
              </Button>
              <Text style={styles.DailymotionTxt}>Dailymotion</Text>
            </View>
            <View style={styles.innerView}>
              <Button transparent style={styles.MoreIcon}>
                <Thumbnail source={More} />
              </Button>
              <Text style={styles.MoreTxt}>More</Text>
            </View>
          </View>

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
            
            
            <YouTube
              apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
                videoId="KCPDJ3YV6eU" // The YouTube video ID
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
            
            
            <YouTube
              apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
                videoId="KCPDJ3YV6eU" // The YouTube video ID
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
            
            
            <YouTube
              apiKey="AIzaSyBiMD30gLpguz9H4tQnKKricnl-ybWsbsY"
                videoId="KCPDJ3YV6eU" // The YouTube video ID
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

          {/* <View style={styles.mostPapularThird}>
            <View style={styles.thmnail}>
             
            </View>
            <View style={styles.thmnail}>
              <Thumbnail
                url="https://www.youtube.com/watch?v=Y1ixFdnkITg"
                iconStyle={styles.iconStyle}
                imageHeight={100}
                imageWidth={100}
              />
            </View>
          </View> */}
        </ScrollView>
        {/* </Content> */}
      </Container>
    );
  }
}
