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
      <ImageBackground source={require('./app/assets/images/background/bg3.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
                       
   
        <View style={styles.imageTop}>  
       
        <Image style={styles.imageMain}
          source={require('./app/assets/images/characters/panda.png')}
            />     
            <TouchableOpacity>
            <View style={styles.dialogBox}>
              <Text style={styles.text}>What is your name ?</Text>
            </View>
            </TouchableOpacity>  
        </View>
        <View style={styles.image}> 
            <View style={styles.blank}></View>
            <View style={styles.blank}></View>
            <View style={styles.blank}></View>
            <View style={styles.blank}></View>
        </View>
        <View style={styles.image}>    
          <TouchableOpacity>
        <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/7.png')}
            />
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/8.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/9.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/8.png')}
            />
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
    
  },
  image:{
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',

  },
  imageTop:{
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',

  },
  dialogBox:{
    height: 100,
    width: 200,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight:'bold',
  },
  sound:{
    height:50,
    width:50,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',

  },
  imageIn:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  blank:{
    height: 80,
    width: 80,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  imageMain:{
    height: 100,
    width: 150,
    marginLeft: 20,
    marginRight: 20,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#FBC02D',
    borderWidth: 1,
    borderColor: '#000',
  },
  
  
});
