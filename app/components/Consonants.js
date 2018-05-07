import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
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
      <ImageBackground source={require('./app/assets/images/background/bg5.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
                       
        <ScrollView>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/1.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/2.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/3.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/4.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/5.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/6.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/7.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/8.png')}          
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/9.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/10.png')}          
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/11.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/12.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/13.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/14.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/15.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/16.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/17.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/18.png')}          
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/19.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/20.png')}          
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/21.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/22.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/23.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/24.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/25.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/26.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/27.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/28.png')}          
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/29.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/30.png')}          
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/31.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/32.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/33.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/34.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/35.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/36.png')}
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
    marginRight: 15,
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
    marginLeft: 5,
    marginRight: 5,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
  },
  
  
});
