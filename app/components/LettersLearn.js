import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LettersLearn extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
  // this.setState({isHidden: false})
}
static navigationOptions = {
  headerVisible: false,
  header:null
};
  render() {
    return (

      <View style={styles.container}>        
      <ImageBackground source={require('../assets/images/background/bg3.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <TouchableOpacity style={styles.setting}>
          <Ionicons name='md-arrow-round-back' onPress={()=>this.props.navigation.navigate("LearnPlay")} size={33} color="#fff" />
        </TouchableOpacity>
      </View>
        <View style={styles.center}>
          <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('../assets/images/buttons/names.png')}
            />
            </TouchableOpacity>
        </View>
          </View>
        <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('../assets/images/buttons/days.png')}
            />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('../assets/images/buttons/colors.png')}
            />
            </TouchableOpacity>
        </View>
          </View>
        <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('../assets/images/buttons/persons.png')}
            />
          </TouchableOpacity>
          </View>
        </View>

  
  
          
        </View>
        </ImageBackground>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
},
  container: {
    flex: 1,
  },
  top: {
    height: '15%',
    alignContent: 'center',
    justifyContent: 'center',
  },
  setting:{
    height: 30,
    width:30,
    // marginRight: 15,
    alignSelf: 'flex-end', 
  },
  center: {
    height: '85%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent:'center',
  },
  menu1:{
    height: '45%',
    width:'45%',
    padding: 5,    
  },
  menuInner:{
    flex: 1,
  },
  level:{
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain,
  },
  
  
});
