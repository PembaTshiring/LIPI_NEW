import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <View style={styles.setting}>
          <Ionicons name='md-settings' size={33} color="#fff" />
          </View>
        </View>
        <View style={styles.center}>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          <View style={styles.menu1}>
            <View style={styles.menuInner}></View>
          </View>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: '10%',
    backgroundColor: '#382',
    alignContent: 'center',
    justifyContent: 'center',
  },
  setting:{
    height: 30,
    width:30,
    marginRight: 15,
    alignSelf: 'flex-end', 
  },
  center: {
    height: '90%',
    backgroundColor: '#382',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    justifyContent:'center',
  },
  menu1:{
    height: '50%',
    width:'33%',
    padding: 5,    
  },
  menuInner:{
    flex: 1,
    backgroundColor: "#fff",
  },
  
});
