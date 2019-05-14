import { Dimensions } from "react-native";
var { height, width } = Dimensions.get("window");
export const styles = {
  searcIcon: {
    marginTop: 10,
    marginLeft: 10,
    color: "white"
  },
  barSearch: {
    backgroundColor: "green"
  },
  mostPapular: {
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: "white"
  },
  YoutubeVideo: {
    height: height / 3,
    width: "90%",
    marginTop: 10
  }
};
