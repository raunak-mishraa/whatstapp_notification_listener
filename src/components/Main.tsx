import AsyncStorage from '@react-native-async-storage/async-storage';
import MaskedView from '@react-native-masked-view/masked-view';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Main = () => {
  const [connected, setConnected] = useState(false);

  // Load the connection status from AsyncStorage when the component mounts
  useEffect(() => {
    const loadConnectionStatus = async () => {
      try {
        const storedStatus = await AsyncStorage.getItem('connected');
        if (storedStatus !== null) {
          setConnected(storedStatus === 'true'); 
        }
      } catch (error) {
        console.error('Failed to load connection status', error);
      }
    };
    loadConnectionStatus();
  }, []);

  const connect = async () => {
    const newStatus = !connected;
    setConnected(newStatus); 
    try {
      await AsyncStorage.setItem('connected', newStatus ? 'true' : 'false'); 
    } catch (error) {
      console.error('Failed to save connection status', error);
    }
  };
  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#0B0000', '#0B0000', '#040114']}
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
            <Text style={[styles.textHeading, { opacity: 0 }]}>VoiceCo</Text>
          </LinearGradient>
        </MaskedView>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome back!</Text>
          <Text style={styles.secText}>Raunak</Text>
        </View>
        <TouchableOpacity
          onPress={connect}
          style={styles.buttonContainer}
        >
          <LinearGradient
            colors={['#0B0000', '#370000', '#0B0000']}
            // locations={[0.3, 0.8, 0.2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{connected ? 'Disconnect': 'Connect'}</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.conn}>Voiceco is
          <Text style={styles.connin}> {connected? 'connected': 'disconnected'}</Text>
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#040114',
    padding: 20,
    height: '100%',
  },
  textHeading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  welcomeContainer: {
    marginTop: 20,
    backgroundColor: 'rgba(136, 136, 136, 0.2)',
    borderColor: 'gray',
    borderWidth: 0.3,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: '#898989',
    fontWeight: 'bold',
  },
  secText: {
    fontSize: 20,
    color: '#AD98FFb0',
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: '#370000',
    borderWidth: 3,
    marginTop: 10,
    marginHorizontal: 'auto',
  },
  button: {
    padding:20
  },
  buttonText: {
    color: '#898989', // White text color
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conn:{
    color: '#898989',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  connin:{
    color: '#370000',
    fontWeight: 'bold',
  }
});

export default Main;


// import AsyncStorage from '@react-native-async-storage/async-storage';
// import MaskedView from '@react-native-masked-view/masked-view';
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { NativeEventEmitter, NativeModules } from 'react-native';

// const { NotificationModule } = NativeModules;

// const Main = () => {
//   const [connected, setConnected] = useState(false);
//   const notificationEmitter = new NativeEventEmitter(NotificationModule); // Initialize NativeEventEmitter

//   // Load the connection status from AsyncStorage when the component mounts
//   useEffect(() => {
//     const loadConnectionStatus = async () => {
//       try {
//         const storedStatus = await AsyncStorage.getItem('connected');
//         if (storedStatus !== null) {
//           setConnected(storedStatus === 'true'); 
//         }
//       } catch (error) {
//         console.error('Failed to load connection status', error);
//       }
//     };

//     loadConnectionStatus();

//     // Set up the event listener for notification events
//     const notificationListener = notificationEmitter.addListener('NotificationReceived', (notificationData) => {
//       console.log('Notification received:', notificationData);
//       // You can handle the notification data here, e.g., update state, show an alert, etc.
//     });

//     // Cleanup the listener on unmount
//     return () => {
//       notificationListener.remove();
//     };
//   }, []);

//   const connect = async () => {
//     const newStatus = !connected;
//     setConnected(newStatus); 
//     try {
//       await AsyncStorage.setItem('connected', newStatus ? 'true' : 'false'); 
//     } catch (error) {
//       console.error('Failed to save connection status', error);
//     }
//   };

//   return (
//     <SafeAreaView>
//       <LinearGradient
//         colors={['#0B0000', '#0B0000', '#040114']}
//         locations={[0, 0.2, 1]}
//         start={{ x: 0.5, y: 0.1 }}
//         end={{ x: 0.5, y: 1 }}
//         style={styles.container}
//       >
//         <MaskedView maskElement={<Text style={styles.textHeading}>VoiceCo</Text>}>
//           <LinearGradient
//             colors={['#B8B7CE', '#F1F1F1']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 0, y: 0 }}
//             style={{ alignSelf: 'center' }}
//           >
//             <Text style={[styles.textHeading, { opacity: 0 }]}>VoiceCo</Text>
//           </LinearGradient>
//         </MaskedView>
//         <View style={styles.welcomeContainer}>
//           <Text style={styles.welcomeText}>Welcome back!</Text>
//           <Text style={styles.secText}>Raunak</Text>
//         </View>
//         <TouchableOpacity
//           onPress={connect}
//           style={styles.buttonContainer}
//         >
//           <LinearGradient
//             colors={['#0B0000', '#370000', '#0B0000']}
//             start={{ x: 0, y: 0 }}
//             end={{ x: 1, y: 0 }}
//             style={styles.button}
//           >
//             <Text style={styles.buttonText}>{connected ? 'Disconnect': 'Connect'}</Text>
//           </LinearGradient>
//         </TouchableOpacity>
//         <Text style={styles.conn}>VoiceCo is
//           <Text style={styles.connin}> {connected ? 'connected' : 'disconnected'}</Text>
//         </Text>
//       </LinearGradient>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#040114',
//     padding: 20,
//     height: '100%',
//   },
//   textHeading: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   welcomeContainer: {
//     marginTop: 20,
//     backgroundColor: 'rgba(136, 136, 136, 0.2)',
//     borderColor: 'gray',
//     borderWidth: 0.3,
//     borderRadius: 10,
//     overflow: 'hidden',
//     padding: 20,
//   },
//   welcomeText: {
//     fontSize: 24,
//     color: '#898989',
//     fontWeight: 'bold',
//   },
//   secText: {
//     fontSize: 20,
//     color: '#AD98FFb0',
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     width: '100%',
//     borderRadius: 50,
//     overflow: 'hidden',
//     borderColor: '#370000',
//     borderWidth: 3,
//     marginTop: 10,
//     marginHorizontal: 'auto',
//   },
//   button: {
//     padding: 20
//   },
//   buttonText: {
//     color: '#898989',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   conn: {
//     color: '#898989',
//     textAlign: 'center',
//     marginTop: 20,
//     fontSize: 18,
//   },
//   connin: {
//     color: '#370000',
//     fontWeight: 'bold',
//   }
// });

// export default Main;
