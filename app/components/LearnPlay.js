import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default class App extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
}
  render() {
    return (

      <View style={styles.container}>
      <ImageBackground source={require('./app/assets/images/background/bg2.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
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
          source={require('./app/assets/images/buttons/learn.png')}
            />
            </TouchableOpacity>              
            <Progress.Bar style={styles.progressBar} progress={0.3} width={null} height={15} 
            borderColor= {'#E64A19'} color= {'#FF5722'}/>              
        </View>
          </View>
        <View style={styles.menu1}>
            <View style={styles.menuInner}>
            <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
       >
            <Image style={styles.level}
          source={require('./app/assets/images/buttons/play.png')}
            />
          </TouchableOpacity>
          <Progress.Bar style={styles.progressBar} progress={0.5} width={null} height={15} 
          borderColor= {'#E64A19'} color= {'#FF5722'} />  
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
    alignContent:'center',
  },
  menu1:{
    height: '70%',
    width:'50%',
    padding: 15,
    justifyContent:'center',
    alignContent:'center', 
  },
  menuInner:{
    flex: 1,
    justifyContent:'center',
    alignContent:'center', 
  },
  level:{
    width: '100%',
    height: '100%',
    resizeMode: Image.resizeMode.contain,
  },
  progressBar:{
    borderWidth: 2,
    borderRadius: 0,
    borderRadius: 4,
    
    
  },
  
});
