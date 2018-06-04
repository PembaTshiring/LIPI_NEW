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
                       
       
        <View style={styles.imageTop}>     
        <Image style={styles.imageMain}
          source={require('./app/assets/images/vowels/1.png')}
            />
            <TouchableOpacity>
            <View style={styles.sound}>
            <Ionicons name='md-musical-note' size={33} color="#00796B" borderWidth={3} />
            </View>
            </TouchableOpacity>
        </View>
        <View style={styles.image}>     
            <TouchableOpacity>
            <Image style={styles.imageIn1}
          source={require('./app/assets/images/vowels/5.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn2}
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.image}>    
          <TouchableOpacity>
        <Image style={styles.imageIn3}
          source={require('./app/assets/images/vowels/7.png')}
            />
            </TouchableOpacity> 
            <TouchableOpacity>
            <Image style={styles.imageIn4}
          source={require('./app/assets/images/vowels/8.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn5}
          source={require('./app/assets/images/vowels/9.png')}
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
  sound:{
    height:50,
    width:50,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',

  },
  imageIn1:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    transform: [{ rotate: '10deg'}],
    borderWidth: 1,
    borderColor: '#000',
  },
  imageIn2:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    transform: [{ rotate: '-10deg'}],
    borderWidth: 1,
    borderColor: '#000',
  },
  imageIn3:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    transform: [{ rotate: '2deg'}],
    borderWidth: 1,
    borderColor: '#000',
  },
  imageIn4:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    transform: [{ rotate: '10deg'}],
    borderWidth: 1,
    borderColor: '#000',
  },
  imageIn5:{
    height: 80,
    width: 80,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    transform: [{ rotate: '-2deg'}],
    borderWidth: 1,
    borderColor: '#000',
  },
  imageMain:{
    height: 100,
    width: 150,
    marginLeft: 30,
    marginRight: 30,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#FBC02D',
    borderWidth: 1,
    borderColor: '#000',
  },
  
  
});
