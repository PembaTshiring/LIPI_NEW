import React, { Component } from 'react'
import {
   View,
   Switch,
   StyleSheet,
   Text
} 
from 'react-native'

export default Switch = (props) => {
   return (
      <View style = {styles.container}>
      <Text>Music</Text>
         <Switch 
            onValueChange = {props.toggleSwitch1}
            value = {props.switch1Value}/>
            <View ></View>
            <Text>Sound</Text>
         <Switch
            onValueChange = {props.toggleSwitch2}
            value = {props.switch2Value}/>
      </View>
   )
}
const styles = StyleSheet.create ({
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      // marginTop: 100,
      //backgroundColor:'green',      
  marginLeft: '20%',
  marginRight: '20%',      
   }
})