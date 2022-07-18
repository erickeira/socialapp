import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Icon } from '@rneui/base';
import CardDirect from '../../componentes/cards/cardDirect';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function Perfil() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        
          <ScrollView>
            <ImageBackground
                style={{width : '100%', height: 280}}
                source={{uri : "https://source.unsplash.com/random/800x600"}}>
                <LinearGradient 
                    colors={['#00000000', '#1B1A1D']} 
                    style={{height : '100%', width : '100%'}}>
                        <View style={{width: '100%', alignItems: 'center', position: 'absolute', height: 280, paddingTop: 90}}>
                            <Image
                                source={{ uri : `https://source.unsplash.com/random/800x600`}}
                                style={{width: 120, height: 120, borderRadius: 100, borderWidth: 3, borderColor: '#666'}}
                            />
                            <Text style={{color: '#fff', fontSize: 16, marginTop: 10, fontWeight: '500'}}>
                                Erick Almeida Ricardo
                            </Text>
                            <Text style={{color: '#fff', fontSize: 12, marginTop: 3, }}>
                                Analista de sistemas
                            </Text>
                        </View>
                        <SafeAreaView style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={{width: 50, height: 50}}>
                                <Icon name="arrow-back-ios" color={'#fff'}/>
                            </TouchableOpacity>
                            <View style={{width: 50, height: 50}}>
                                <Icon name="more-vert" color={'#fff'}/>
                            </View>
                        </SafeAreaView>

                </LinearGradient>
            </ImageBackground>

            <View style={styles.containerInfoSguidores}>
                <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20}}>100</Text>
                    <Text style={{color: '#adadad', fontSize: 14}}>Posts</Text>
                </View>
                <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20}}>235</Text>
                    <Text style={{color: '#adadad', fontSize: 14}}>Seguidores</Text>
                </View>
                <View style={{width: '30%', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff', fontSize: 20}}>56</Text>
                    <Text style={{color: '#adadad', fontSize: 14}}>Seguindo</Text>
                </View>
            </View>

            <View  style={styles.containerSelect}>
                <View style={{width: '50%',backgroundColor: '#3F8DFD',borderRadius: 12, paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff'}}>Post</Text>
                </View>
                <View style={{width: '50%',paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#fff'}}>Video</Text>
                </View>
            </View>

            {/* RENDER POSTS */}
            <View style={styles.containerPosts}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Image
                        source={{ uri : `https://source.unsplash.com/random/800x600`}}
                        style={{width: '49%', height: 200, borderRadius: 15}}
                    />
                                        <Image
                        source={{ uri : `https://source.unsplash.com/random/800x600`}}
                        style={{width: '49%', height: 200, borderRadius: 15}}
                    />
                </View>
                <View style={{flexDirection: 'row',marginVertical:5, justifyContent: 'space-between'}}>
                    <Image
                        source={{ uri : `https://source.unsplash.com/random/800x600`}}
                        style={{width: '49%', height: 200, borderRadius: 15}}
                    />
                                        <Image
                        source={{ uri : `https://source.unsplash.com/random/800x600`}}
                        style={{width: '49%', height: 200, borderRadius: 15}}
                    />
                </View>
            </View>
          </ScrollView>
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
    },
    containerInfoSguidores:{
        marginHorizontal: '5%',  
        bbackgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderRadius: 7, 
        flexDirection: 'row', 
        paddingHorizontal: 10, 
        paddingVertical: 10, 
        justifyContent: 'space-between',
        borderWidth: 0.3,
        borderColor: '#adadad'
    },
    containerSelect:{
        marginHorizontal: '5%',  
        backgroundColor: '#2B2D2E', 
        borderRadius: 12, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginVertical: 10
    },
    containerPosts:{
        marginHorizontal: '5%'
    }
      
});
