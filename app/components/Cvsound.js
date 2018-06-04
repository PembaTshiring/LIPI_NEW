import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Progress from 'react-native-progress';

export default class App extends React.Component {
  //hiding statusBar
componentDidMount() {
  StatusBar.setHidden(true);
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
                       
        <ScrollView>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/1l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/2l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/3l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/4l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/5l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/6l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/7l.png')}
            />
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/8l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/9l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/10l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/11l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/12l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/13l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/14l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/15l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/16l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/17l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/18l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/19l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/20l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/21l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/22l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/23l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/24l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/25l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/26l.png')}
            />          
        </View>
        <View style={styles.image}>    
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/27l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/29l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/30l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/31l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/32l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/33l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/34l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/35l.png')}
            />          
        </View>
        <View style={styles.image}>     
        <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36a.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36b.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36c.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36d.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36e.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36f.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36g.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36h.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36i.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36j.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36k.png')}
            />
            <Image style={styles.imageIn}
          source={require('./app/assets/images/cvsound/36l.png')}
            />          
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
  imageIn:{
    height: 42,
    width: 42,
    marginLeft: 3,
    marginRight: 3,
    resizeMode: Image.resizeMode.contain,
    backgroundColor: '#fff',
  },
  
  
});
