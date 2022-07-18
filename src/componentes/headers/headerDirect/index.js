import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function Direct() {
  return (
    <View style={styles.container}>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B1A1D',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
