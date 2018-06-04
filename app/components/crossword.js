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
                       
       
        
        <View style={styles.image}>     
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/5.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imageIn}
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
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
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
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
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
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
          source={require('./app/assets/images/vowels/6.png')}
            />
            </TouchableOpacity>
        </View>
        <View style={styles.imageDown}>
        <Image style={styles.imageMain}
          source={require('./app/assets/images/vowels/1.png')}
            />
            <View style={styles.side}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
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
    
  },
  image:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',    

  },
  imageDown:{
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',

  },
  side:{
    height:60,
    width:240,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
  },
  box:{
    height:60,
    width:60,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  imageIn:{
    height: 60,
    width: 60,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: -10,
  },

  imageMain:{
    height: 60,
    width: 60,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#FBC02D',
    borderWidth: 1,
    borderColor: '#000',
  },
  
  
});
