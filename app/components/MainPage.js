import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class MainPage extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
  // this.setState({isHidden: false})
}
  render() {
    return (

      <View style={styles.container}>        
      <ImageBackground source={require('../assets/images/background/bg1.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" />
        </View>
      </View>
        <View style={styles.center}>
          <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('../assets/images/levels/letter.png')}
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
          source={require('../assets/images/levels/words.png')}
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
          source={require('../assets/images/levels/sentence.png')}
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
          source={require('../assets/images/levels/numbers.png')}
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
          source={require('../assets/images/levels/story.png')}
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
          source={require('../assets/images/levels/rhymes.png')}
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
    marginRight: 15,
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
    width:'33%',
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
