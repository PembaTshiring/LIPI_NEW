import React, { Component } from 'react'
import { Text, 
    View,
    StatusBar,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,    
    Dimensions,
    Image,
    Animated,
    Easing,
    textSize,
} from 'react-native'

const { width, height } = Dimensions.get("window");

export default class SplashScreen extends Component {
    
    constructor () {
        super()
        this.animatedValue = new Animated.Value(0)
        this.animatedValues = new Animated.Value(0)
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        this.animate();
        this.animatetxt();

}
animate () {
  this.animatedValue.setValue(0)
  Animated.timing(
    this.animatedValue,
    {
      toValue: 1,
      duration: 7000,
      easing: Easing.linear
    }
  ).start(() => this.animate())
}

  animatetxt () {
    this.animatedValues.setValue(0)
    Animated.timing(
      this.animatedValues,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear
      }
    ).start(() => this.animatetxt())
    }
    static navigationOptions = {
        headerVisible: false,
        header: null
    };
    render() {
      const textSize = this.animatedValues.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [18, 32, 18]
      })
      const movingMargin = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 300, 0]
      })
      const movingMargins = this.animatedValue.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 300, 0]
      })
    return (
      <View>
      <ImageBackground source={require("../assets/images/background/bg1.jpg")} style={styles.bg}>
        <View style={styles.container}>

        <View style={styles.float}>
            <Animated.Image
            source={require("../assets/images/characters/cloud.png")}
        style={{
          marginRight:movingMargin,
          height: 100,
          width: 160,
          }} />
          { <Animated.Image
            source={require("../assets/images/characters/cloud.png")}
        style={{
          marginLeft:movingMargins,
          height: 100,
          width: 160,
          }} /> }
          </View>
          
        <View style={styles.txt}>
            <Animated.Text
        style={{
          fontSize: textSize,
          marginTop: 10,
          color: 'green'}} >
          LIPI
      </Animated.Text>
          </View>
        <View style={styles.overlay}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("MainPage")}>
                  <Image source={require("../assets/images/buttons/playButton.png")} style={styles.btn}/>
                </TouchableOpacity>
              </View>
          </View>
      </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center"
    },
    overlay: {
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
      padding: 10
    },
    bg:{
        width: width, 
        height: height
    },
    img:{
        width: 195, 
        height: 100
    },
    btn:{
      flexDirection: 'row',
        width:140,
        height:60
    },

    float:{
      flexDirection: 'row',
    }
    
  });