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
        <ScrollView>     
        <View style={styles.left}>
          <View style={styles.triangle} >
          </View>
          <View style={styles.trapezoid1}>
            <View style={styles.star}>
              <Ionicons name="md-star" size={22} color="#fff" />
            </View>
          </View>
          <View style={styles.trapezoid2} >
          <View style={styles.star}>
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
            </View>
          <View style={styles.trapezoid3}>
          <View style={styles.star}>
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid4}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid5}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid6}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid7}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid8}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
          <View style={styles.trapezoid9}>          
          <View style={styles.star}>  
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          <Ionicons name="md-star" size={22} color="#fff" />
          </View>
          </View> 
        </View>
        <View style={styles.right}>
          <View style={styles.number} >
            <Text style={styles.text}>0</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}> 1</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>3</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>4</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>5</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>6</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>7</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>8</Text>
          </View>
          <View style={styles.number}>
          <Text style={styles.text}>9</Text>
          </View>
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
    alignItems: 'center',  
    flexDirection: 'row',
    
  },
  left:{
    width: '70%',
    height:'95%',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    opacity: .8,
    padding: 8,
  },
 
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderBottomWidth: 40,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#7B1FA2',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  trapezoid1: {
    width: 80,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#7C4DFF',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid2: {
    width: 120,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#00796B',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid3: {
    width: 160,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#1976D2',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid4: {
    width: 200,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#4CAF50',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid5: {
    width: 240,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#E64A19',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid6: {
    width: 280,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#795548',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid7: {
    width: 320,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#F57C00',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid8: {
    width: 360,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#00BCD4',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  trapezoid9: {
    width: 400,
    height: 0,
    borderBottomWidth: 40,
    borderBottomColor: '#FFC107',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'row',
  } ,
  star:{
    justifyContent:'center',
    alignItems: 'center',
    height: 50,
    width: 150,
    flexDirection: 'row',
    marginTop: 30,
  },
  right:{
    width: '30%',
    height:'95%',
    backgroundColor: '#03A9F4',
    opacity: .8,    
    justifyContent:'center',
    alignItems: 'center',
    alignSelf: 'flex-end',  
    position:'absolute',
    padding: 20,
  },
  number:{
    width:38,
    height:38,
    margin: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
  },
});
