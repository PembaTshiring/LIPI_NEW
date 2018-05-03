import React, { Component } from 'react';
import { Text, View , StyleSheet, Switch, Button,Dimensions,TouchableOpacity, ImageBackground, StatusBar} from 'react-native';
import { Constants } from 'expo';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Switch from './Switch';

// import About from './About.js'

const { width, height } = Dimensions.get('window')

export default class Setting extends Component {
  constructor() {
    super();
    this.state = {
       switch1Value: false,
       switch2Value: false,
    }
  }
  componentDidMount() {
    StatusBar.setHidden(true);
    // this.setState({isHidden: false})
  }

  static navigationOptions = {
    headerVisible: false,
    header: null
  };

  toggleSwitch1 = (value) => {
      this.setState({switch1Value: value})
      console.log('Switch 1 is: ' + value)
  }
  toggleSwitch2 = (value) => {
      this.setState({switch2Value: value})
      console.log('Switch 2 is: ' + value)
  }
  render() {
    return (
      <View style={styles.container}>
       <View style={styles.top}>
        <View style={styles.text}>
        <Text style={{textAlign:'center',  color:'white',fontSize:30}}>Setting</Text>
        </View>
          <View style={styles.setting}>
          <Ionicons style={{marginRight:20}} name='md-home' size={33} color="#fff" />
        </View>
      </View>
        <View style={styles.switch}>
          <SwitchExample
               toggleSwitch1 = {this.toggleSwitch1}
               toggleSwitch2 = {this.toggleSwitch2}
               switch1Value = {this.state.switch1Value}
               switch2Value = {this.state.switch2Value}/>
               <TouchableOpacity>
               <View style={styles.about}>
               <Text style={{textAlign:'center', color:'#fff' }}> About Us  <Ionicons name='md-information-circle' size={30} color="#fff" /></Text>
               </View>
               </TouchableOpacity>
        </View>
        
        </View>
    )
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
},
  container:{
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    height: '20%',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#303F9F',
  },
  setting:{
    height: 30,
    width:50,
    alignSelf: 'flex-end', 
    position: "absolute", 
  },
  text:{
    height: 30,
    width:150,
    alignSelf: 'center', 
  },
switch:{
  width: '100%',
  height:'80%',
  justifyContent: 'center',
  
},
about:{
  width:'20%',
  height:50,
  backgroundColor: '#3F51B5',
  marginLeft: '40%',
  justifyContent: 'center',
},
  
});

