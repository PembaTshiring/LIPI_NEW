import React, { Component } from 'react'
import { Text, 
    View,
    StatusBar,
    TouchableOpacity,
    StyleSheet,    
    Dimensions,
    Image
} from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get("window");

export default class AboutUs extends Component {
    
    constructor () {
        super() 
    }
    componentDidMount() {
        StatusBar.setHidden(true);
        
}
    static navigationOptions = {
        headerVisible: false,
        header: null
    };
    render() {
     
    return (
     
      <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate("Setting")} style={styles.top}>
        <View >
          <Ionicons name="md-arrow-back" size={33} />
        </View>
      </TouchableOpacity>
      
          <View style={styles.header}>
            <Text style={styles.text}>LIPI APP </Text>
          </View>
          <View style={styles.paragraph}>
          <Text style={{justifyContent:'center'}}>Lipi App is fully developed in React Native by Nevolution Tech pvt ltd. It is learning app which is specially targeted to small kids. Lipi App is underdevelop app new features will be added in future. </Text>
          <Text>-------------------------Ver:1.04-----------------------</Text>
     </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexWrap: "wrap",
      alignItems: "center",
    
      
    },
    header: {
      height:'20%',
      justifyContent: "center",
      alignItems: "center",
    },
    
    paragraph: {
      width:'60%',
      alignContent: 'center',
      justifyContent: 'center',
      
    },
    text:{
      fontSize: 30,
    },
    top:{
      height: '15%',
      width: '100%',
      justifyContent:'center',
      // marginLeft: '10%',
    },
    
  });