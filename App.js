import React from 'react';
import { StyleSheet, 
  Text, 
  View } from 'react-native';
import { StackNavigator } from "react-navigation";

import AboutUs from "./app/components/AboutUs";
import Color from "./app/components/Color";
import Consonants from "./app/components/Consonants";
import LearnPlay from "./app/components/LearnPlay";
import MainPage from "./app/components/MainPage";
import Name from "./app/components/Name";
import Quiz from "./app/components/Quiz";
import Rhymes from "./app/components/Rhymes";
import Setting from "./app/components/Setting";
import SplashScreen from "./app/components/SplashScreen";
import Vowels from "./app/components/Vowels";
import LettersLearn from "./app/components/LettersLearn";
import LetterMenu from "./app/components/LetterMenu";



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
  Consonants: {
    screen: Consonants,
    navigationOptions: {
      title: "Consonants"
    }
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: {
      title: "AboutUs"
    }
  },
  LearnPlay: {
    screen: LearnPlay,
    navigationOptions: {
      title: "LearnPlay"
    }
  },
  LettersLearn: {
    screen: LettersLearn,
    navigationOptions: {
      title: "LettersLearn"
    }
  },
  Setting: {
    screen: Setting,
    navigationOptions: {
      title: "Setting"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: "Quiz"
    }
  },
  Rhymes: {
    screen: Rhymes,
    navigationOptions: {
      title: "Rhymes"
    }
  },
  Color: {
    screen: Color,
    navigationOptions: {
      title: "Color"
    }
  },
  Vowels: {
    screen: Vowels,
    navigationOptions: {
      title: "Vowels"
    }
  },
  LearnPlay: {
    screen: LearnPlay,
    navigationOptions: {
      title: "LearnPLay"
    }
  },
  LetterMenu: {
    screen: LetterMenu,
    navigationOptions: {
      title: "LetterMenu"
    }
  },
});