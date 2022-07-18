import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Icon } from '@rneui/base';
import { StyleSheet, Text, View, Dimensions,Image, Modal, TouchableWithoutFeedback, SafeAreaView, Animated, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function CardStatus(props) {


   
  return (
    <>
    {
      props.data.item.nome == 'Novo' ?
      <TouchableWithoutFeedback onPress={() => props.callbackopen()}>
          <View style={[styles.container]}>
              <View style={styles.containerUser}>
                  <View style={styles.containerUserFundo}>
                  <TouchableOpacity
                        style={[{
                            top: -14,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }, styles.fotoUser]}
                    >
                        <View
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 35,
                                backgroundColor: '#3F8DFD',
                                justifyContent: 'center'
                            }}
                        >
                          <Icon name='add' color={'#fff'}/>
                        </View>
                    </TouchableOpacity>
                      <Text style={{color: '#fff', fontSize: 10,marginTop: 10}}>Criar Status</Text>
                  </View>
                  
              </View>
          </View>
      </TouchableWithoutFeedback>
      :
      <TouchableWithoutFeedback onPress={() => props.callbackopen()}>
            <View style={[styles.container]}>
                <Image
                    source={{ uri : props.data.item.url ? props.data.item.url :`https://source.unsplash.com/random/800x600`}}
                    style={{width: '100%',marginLeft: '2.5%', height: '100%', borderRadius: 10}}
                />
                <View style={styles.containerUser}>
                    <View style={styles.containerUserFundo}>
                        <Image
                            source={{ uri : `https://source.unsplash.com/random/800x600`}}
                            style={styles.fotoUser}
                        />
                        <Text style={{color: '#fff', fontSize: 10,marginTop: 10}}>{props.data.item.nome}</Text>
                    </View>
                    
                </View>
            </View>
        </TouchableWithoutFeedback>
    }
    


    </>


  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.2,
    height: 170,
    backgroundColor: '#2B2D2E',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerUser:{
    position: 'absolute', 
    zIndex: 1,
    bottom: 0, 
    width: '103%', 
    height: '34%',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerUserFundo:{
    position: 'absolute', 
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1,
    bottom: 0, 
    width: '103%', 
    height: '80%',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fotoUser:{
    width: 30,
    height: 30,
    position: 'absolute',
    zIndex: 10,
    borderRadius: 100,
    top: -14
  }
});
