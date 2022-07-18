import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView, ScrollView } from 'react-native';
import { Icon } from '@rneui/base';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function Direct() {
  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 50, borderBottomWidth: 0.3, marginTop: 50, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: '#fff'}}>
          Chat
        </Text>
      </View>
          <View style={{minHeight: windowHeight - 300}}>
          <ScrollView >
            <View style={styles.mensagens}>
              <View style={{width: '100%', height: 30}}>
                <View style={{position: 'absolute', paddingHorizontal: 10,paddingVertical: 2, backgroundColor: '#000', borderRadius: 3}}>
                  <Text style={{color: '#fff'}}>
                    OI
                  </Text>
                </View>
              </View>
              <View style={{width: '100%', height: 30}}>
                <View style={{ paddingHorizontal: 10, position: 'absolute',right: 0, paddingVertical: 2, backgroundColor: '#000', borderRadius: 3}}>
                  <Text style={{color: '#fff'}}>
                    Tudo Bem?
                  </Text>
                </View>
              </View>


            </View>

          </ScrollView>
          <View style={styles.containerInputSend}>
              <View  style={{width: '95%'}}>
              <Text style={{color: '#666'}}>Digite...</Text>
              </View>
              <Icon name="send" color={'#666'}/>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1B1A1D',
      },
      containerInputSend: {
        backgroundColor: '#2B2D2E', 
        width: '90%', 
        height: 50, 
        zIndex: 10,
        position:'absolute',
        bottom: 0,
        marginHorizontal: '5%',
        borderRadius: 4,
        alignItems: 'center',
        paddingHorizontal: '5%',
        flexDirection: 'row'
      },
      mensagens:{
        minHeight: windowHeight,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        paddingHorizontal: '5%',
        paddingVertical: 10
      }
});
