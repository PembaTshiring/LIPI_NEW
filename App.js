import React from 'react';
import { StyleSheet, 
  Text, 
  View } from 'react-native';
// import { StackNavigator } from "react-navigation";

import SplashScreen from "./app/components/SplashScreen";
import MainPage from "./app/components/MainPage";
import Menu from "./app/components/Menu";
import LearnPlay from "./app/components/LearnPlay";
import WordsLearn from "./app/components/WordsLearn";

export  class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App = StackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      title: "SplashScreen"
    }
  },
  MainPage: {
    screen: MainPage,
    navigationOptions: {
      title: "MainPage"
    }
  },
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: "Menu"
    }
  },
  LearnPlay: {
    screen: LearnPlay,
    navigationOptions: {
      title: "LearnPlay"
    }
  },
  WordsLearn: {
    screen: WordsLearn,
    navigationOptions: {
      title: "WordsLearn"
    }
  }
});