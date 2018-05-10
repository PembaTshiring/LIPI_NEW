import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Vowels extends React.Component {
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
                       
        <ScrollView>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('../assets/images/vowels/1.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/2.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/3.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('../assets/images/vowels/4.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/5.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/6.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('../assets/images/vowels/7.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/8.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/9.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('../assets/images/vowels/10.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/11.png')}
            />
            <Image style={styles.imageIn}
          source={require('../assets/images/vowels/12.png')}
            />
        </View>
       
        </ScrollView> 
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
    
  },
  image:{
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',

  },
  imageIn:{
    height: 100,
    width: 100,
    marginLeft: 30,
    // marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
  },
  
  
});
