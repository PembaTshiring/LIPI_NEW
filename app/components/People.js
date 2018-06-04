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
      <ImageBackground source={require('./app/assets/images/background/bg5.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
                       
        <ScrollView>
        <View style={styles.image}>  
          <TouchableOpacity>
                <View style={styles.frame1}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/gfather.png')}
                />
                  <View style={styles.text}>
                    <Text> Grandfather=हजुरबुबा</Text>
                  </View>
                </View>
         </TouchableOpacity>  
         <TouchableOpacity>  
                <View style={styles.frame1}>
                  <Image style={styles.imageIn}
                source={require('./app/assets/images/characters/gmother.png')}
                />        
                <View style={styles.text}>
                  <Text>Grandmother=हजुरआमा</Text>
                </View>
              </View>
          </TouchableOpacity>  
        </View>
        <View style={styles.image}>   
          <TouchableOpacity> 
        <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/mother.png')}
                />
                  <View style={styles.text}>
                    <Text> Mother = आमा</Text>
                  </View>
                </View>
         </TouchableOpacity> 
         <TouchableOpacity>
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/father.png')}
                />
                  <View style={styles.text}>
                    <Text>Father = बुबा</Text>
                  </View>
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/uncle.png')}
                />
                  <View style={styles.text}>
                    <Text>Uncle = काका</Text>
                  </View>
                </View>
        </TouchableOpacity>
        <TouchableOpacity>
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/aunt.png')}
                />
                  <View style={styles.text}>
                    <Text> Aunt = काकी</Text>
                  </View>
                </View>
        </TouchableOpacity>
        </View>
        <View style={styles.image}>   
        <TouchableOpacity>    
        <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/mee.png')}
                />
                  <View style={styles.text}>
                    <Text> Me = म</Text>
                  </View>
                </View>
         </TouchableOpacity>  
         <TouchableOpacity>  
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/brother.png')}
                />
                  <View style={styles.text}>
                    <Text>Elder Brother = दाई</Text>
                  </View>
                </View>
         </TouchableOpacity>  
         <TouchableOpacity>  
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/younger.png')}
                />
                  <View style={styles.text}>
                    <Text>Yonger Brother=भाई</Text>
                  </View>
                </View>
         </TouchableOpacity>  
         <TouchableOpacity>  
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/eldersis.png')}
                />
                  <View style={styles.text}>
                    <Text>Elder Sister=दिदी</Text>
                  </View>
                </View>
          </TouchableOpacity>
          <TouchableOpacity>    
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/sister.png')}
                />
                  <View style={styles.text}>
                    <Text>Yonger Sister=बहिनी</Text>
                  </View>
                </View>
          </TouchableOpacity>  
        </View>
        <View style={styles.image}>  
        <TouchableOpacity>    
                <View style={styles.frame}>    
                    <Image style={styles.imageIn}
                    source={require('./app/assets/images/characters/cat.png')}
                />
                  <View style={styles.text}>
                    <Text>Cat = बिरालो</Text>
                  </View>
                </View>
        </TouchableOpacity>  
        <TouchableOpacity>  
                <View style={styles.frame}>
                  <Image style={styles.imageIn}
                source={require('./app/assets/images/characters/dog.png')}
                />        
                <View style={styles.text}>
                  <Text>Dog = कुकुर</Text>
                </View>
              </View>
          </TouchableOpacity>  
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
  frame:{
    height: 120,
    width: 110,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
  },
  frame1:{
    height: 130,
    width: 130,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    justifyContent:'center',
    alignItems: 'center',
  },
  imageIn:{
    height: 100,
    width: 100,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
  },
  
  
});
