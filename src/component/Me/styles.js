import { Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');
export const styles = {
    first:{
        height:height/4,
       
    },
    firstBc:{
        height:height/4,
        backgroundColor:'rgba(0,0,0,0.7)',

    },
    second:{
        height:height *0.10,
        backgroundColor:'black',
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },
    Third:{
        height:height *0.65,
        backgroundColor:'black'
    },
    colorTxt:{
        color:'white'
    },
    iconSetting:{
        marginTop:10,
        backgroundColor:'black',
        flexDirection:'column'
    },
    txtColor:{
        color:'white',
        marginTop: 3,
    }

}