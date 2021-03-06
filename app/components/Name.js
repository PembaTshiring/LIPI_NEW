import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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
        <View style={styles.content}>            
                       
        
        <View style={styles.left}>  
        <View style={styles.letter}>
        <Image style={styles.imageIn}
          source={require('./app/assets/images/letters/1.png')}
            />
            </View>
            <View style={styles.char}>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/characters/panda.png')}
            />
            </View>
           
        </View>
        <View style={styles.right}>
        <View style={styles.imageMain}>
        <Image style={styles.imageIn}
          source={require('./app/assets/images/words/kaxhuwa.png')}
            />
            </View>
            <View style={styles.imageName}>
            
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
  content:{
    height: '85%',
    width:'100%',     
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    
  },
  left:{
    width: '40%',
    height: '85%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  right:{
    width: '50%',
    height: '85%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',

  },
  imageMain:{
    height:'70%',
    width:'80%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  imageName:{
    height:'25%',
    width:200,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  letter:{
    height:'50%',
    width:'60%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 2,
  },
  char:{
    height:'40%',
    width:'80%',
    justifyContent:'center',
    alignItems: 'center',
  },
  imageIn:{    
    width:'100%',
    height:'100%',
    resizeMode: Image.resizeMode.contain,
  },
  
  
});
