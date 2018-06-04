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
                       
     
        <View style={styles.up}>     
        <View style={styles.upImage}>     
       
            <View style={styles.color}>

            </View>
            <Image style={styles.image}
          source={require('./app/assets/images/color/rose.jpg')}
            />
           </View>
        </View>
      
        <View style={styles.down}>
          <TouchableOpacity>
          <View style={styles.back}>
          <Ionicons name="md-arrow-dropleft" size={32} color="green" />
          </View>
          </TouchableOpacity>
        <View style={styles.downImage}>     
        <Image style={styles.image2}
          source={require('./app/assets/images/vowels/4.png')}
            />
          </View>
          <TouchableOpacity>
          <View style={styles.next}>
          <Ionicons name="md-arrow-dropright" size={32} color="green" />
          </View>
          </TouchableOpacity>
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
    alignItems: 'center',
    
  },
  up:{
    width: '70%',
    height: '50%',
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',

  },
  down:{
    width: '70%',
    height: '50%',
    flexDirection: 'row',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',

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
    width: 150,
    height:150,
    backgroundColor: '#fd71ae',
    margin: 5,
  },
  image:{
    width: 150,
    height:150,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#000',
    margin: 5,
  },
  image2:{
    width: 300,
    height:100,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#000',
  },
  back:{
    width:50,
    height:50,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    margin: 5,
  },
  next:{
    width:50,
    height:50,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    margin: 5,
  },
});
