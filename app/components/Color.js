import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Color extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
}
  render() {
    return (
      
      <View style={styles.container}>
      <ImageBackground source={require('../assets/images/background/bg4.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
                       
     
        <View style={styles.up}>     
        <View style={styles.upImage}>     
       
            <View style={styles.color}>

            </View>
            <Image style={styles.image}
          source={require('../assets/images/color/rose.jpg')}
            />
           </View>
        </View>
        <View style={styles.down}> 
        <View style={styles.downImage}>     
        <Image style={styles.image2}
          source={require('../assets/images/vowels/4.png')}
            />
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
  content:{
    height: '85%',
    width:'100%',     
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  up:{
    width: '50%',
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',

  },
  down:{
    width: '50%',
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',

  },
  upImage:{
      width: 300,
      flexDirection: 'row',
      alignItems: 'center',      
    justifyContent:'center',
  },
  downImage:{
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
},
  color:{
    width: 100,
    height:100,
    backgroundColor: '#fd71ae',
    margin: 5,
  },
  image:{
    width: 100,
    height:100,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#000',
    margin: 5,
  },
  image2:{
    width: 200,
    height:100,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#000',
  },
  
});
