import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Icon } from '@rneui/base';
import CardDirect from '../../componentes/cards/cardDirect';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function Directs() {
  return (
    <View style={styles.container}>
        <SafeAreaView>
          <ScrollView>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
            <CardDirect/>
          </ScrollView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        height: windowHeight,
        backgroundColor: '#1B1A1D',
      },
    containerDirect:{
        width: '100%',
        height: 70,
        borderBottomColor: '#000',
        borderBottomWidth: 0.3
    }
      
});
