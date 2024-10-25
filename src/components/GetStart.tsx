import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { FontIcon } from './Icon';
import Tts from 'react-native-tts';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function GetStart({navigation}:any) {
  const [user, setUsername] = useState('');
  // Tts.getInitStatus().then(() => {
  //   Tts.voices().then(voices => {
  //     console.log(voices); // Check for Indian voices in the log
  //   });
  // });
  useEffect(() => {
    // Tts.setDefaultLanguage('hi-IN'); 
    Tts.setDefaultLanguage('en-IN');
    Tts.setDefaultVoice('en-in-x-ene-local');
    Tts.setDefaultRate(0.6);
    Tts.setDefaultPitch(0.6); 
    // Tts.setDefaultVoice('hi-in-x-hia-network');
  }, [])
  const startVoiceCo = async() => {
     if (user.trim() === '') {
      Tts.speak('Please enter your name');
    } else {
      try {
        // Tts.speak('You got a new message from raunak');
        await AsyncStorage.setItem('user', user);
        navigation.navigate('MainPage');
      } catch (e) {
        console.log(e);
      }
    }
  }
  return (
    <SafeAreaView 
    >
      <LinearGradient
         colors={['#0B0000', '#0B0000', '#000000']} 
         locations={[0, 0.2, 1]}
         start={{ x: 0.5, y: 0.1 }} 
         end={{ x: 0.5, y: 1 }}
         style={styles.container}
      >
        <MaskedView maskElement={<Text style={styles.textHeading}>VoiceCo</Text>}>
        <LinearGradient
          colors={['#B8B7CE', '#F1F1F1']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={{ alignSelf: 'center' }}
          >
            <Text style={[styles.textHeading, {opacity:0}]}>VoiceCo</Text>
        </LinearGradient>
        </MaskedView>
        <View style={styles.imageContainer}>
          <Image 
          source={require('../assets/getStart.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        {user.length > 0 && <Text style={{color: 'white', fontSize: 20, textAlign: 'center', marginTop: 20}}>Hello {user}</Text>}
          <View style={styles.buttonInput}>
            <View style={styles.inputContainer}>
              <FontIcon size="large" color="#898989" name="user" />
              <TextInput
                style={styles.input}
                placeholder="Enter your first name"
                 placeholderTextColor="rgba(255, 255, 255, 0.5)"
                value={user}
                onChangeText={setUsername}
              />
            </View>
            <TouchableOpacity 
             style={styles.buttonContainer}
             onPress={startVoiceCo}
             >
              <LinearGradient
                colors={['#000000', '#370000', '#000000']} 
                // locations={[0.2, 0.3, 0.6]}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }}   
                style={styles.button}
              >
              <Text style={styles.buttonText}>Get Started</Text>
             </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#040114',
    padding: 20,
    height: '100%',
  },
  imageContainer:{
    width: '100%',
    // backgroundColor: 'red',
    height: '60%',
    marginTop: 30,
    marginHorizontal:'auto',
  },
  textHeading:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(136, 136, 136, 0.1)',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 50,
    paddingHorizontal: 20,
    width: '80%',
  },
  input: {
    padding:15,
    fontSize: 16,
    color: '#898989',
  },
  buttonInput:{
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#370000',
    borderWidth: 0.8,
    marginTop: 10,
  },
  button: {
    padding:20
  },
  buttonText: {
    color: '#ffffff', // White text color
    fontSize: 16,
    textAlign: 'center',
  },
})