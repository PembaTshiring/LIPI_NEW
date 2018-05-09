import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView, Animated,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default class App extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
}
constructor(props) {
  super(props);

  this.state = {fadeIn: new Animated.Value(0),
                fadeOut: new Animated.Value(1),
               };
}

fadeIn() {
 this.state.fadeIn.setValue(0)                  
 Animated.timing(
   this.state.fadeIn,           
   {
     toValue: 1,                   
     duration: 3000,              
   }
 ).start(() => this.fadeOut());                        
}

fadeOut() {
  this.state.fadeIn.setValue(1)
  Animated.timing(                  
     this.state.fadeIn,            
     {
       toValue: 1,                   
       duration: 9000,              
     }
  ).start();                        
}

render() {
  
    return (
      
      <View style={styles.container}>
      <ImageBackground source={require('./app/assets/images/background/bg.jpg')} style={styles.bg}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" borderWidth={3} />
        </View>
        </View>
        <View style={styles.content}>            
             
        
        <View style={styles.panel}>          
        <ScrollView>
           <Animated.View                 
              style={{opacity: this.state.fadeIn}}
           >
              <View style={styles.textContainer}>
                
                <Text style={{fontSize: 42, textAlign: 'center'}}>
                सयौं थुँगा फूलका हामी,{'\n'} एउटै माला नेपाली {'\n'}
                सार्वभौम भई फैलिएका,{'\n'} मेची-माहाकाली।{'\n'}
                प्रकृतिका कोटी-कोटी,{'\n'} सम्पदाको आंचल।{'\n'}
                वीरहरूका रगतले,{'\n'} स्वतन्त्र र अटल।{'\n'}
                ज्ञानभूमि, शान्तिभूमि{'\n'} तराई, पहाड, हिमाल {'\n'}
                अखण्ड यो प्यारो हाम्रो {'\n'} मातृभूमि नेपाल। {'\n'}
                बहुल जाति, भाषा, धर्म,{'\n'} संस्कृति छन् विशाल {'\n'}
                अग्रगामी राष्ट्र हाम्रो, {'\n'} जय जय नेपाल। {'\n'}
                </Text>
             </View>
           </Animated.View>
           </ScrollView>
       </View>     
       <View style={styles.image}>
       <Animatable.Text animation="slideInUp" iterationCount={100} direction="alternate">
       <Image style={styles.imageIn}
          source={require('./app/assets/images/characters/head.png')}
            />
         </Animatable.Text>
         <Animatable.Text animation="slideInUp" iterationCount={100} direction="alternate">
       <Image style={styles.imageIn}
          source={require('./app/assets/images/characters/head.png')}
            />
         </Animatable.Text>
         </View>
         
        <TouchableOpacity 
               onPress={() => this.fadeIn()} 
               style={styles.submitButtonStyle}
               activeOpacity={0.5}
           >
        <View style={styles.button}>
        
               <Text style={styles.submitTextStyle}>Start</Text>
           
        </View>  
        </TouchableOpacity>
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
    justifyContent:'center',
    alignItems: 'center',
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
  panel:{
    width: '70%',
    height:200,
    flexDirection: 'row',
    padding: 10,
    marginLeft: '15%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 5,
    borderWidth: 5,
    borderColor: '#757575',

  },
  image:{
    height:300,
    width:'100%',
    position: 'absolute',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    paddingTop: '18%',
  },
  imageIn:{
    height: 300,
    width: 220,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
  },
  button:{
    width:100,
    height:50,
    marginLeft: '43%',
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  
});
