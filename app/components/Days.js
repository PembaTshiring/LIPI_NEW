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
      <ImageBackground source={require('./app/assets/images/background/bg1.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
                       
     
        <View style={styles.up}>     
        <View style={styles.upImage}>     
       
            <View style={styles.engDay}>
                <Text style={styles.text}>Sunday</Text>
            </View>
           
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
  engDay:{
    width: 300,
    height:120,
    backgroundColor: '#fff',
    margin: 5,
    justifyContent:'center',
    alignItems: 'center',
  },
 text:{
    fontSize: 55,
    fontWeight: 'bold',
 },
  image2:{
    width: 300,
    height:120,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
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
