import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Image, ActivityIndicator, Modal, TouchableWithoutFeedback, Animated} from 'react-native';
import CardPost from '../../componentes/cards/carPost';
import CardStatus from '../../componentes/cards/cardStatus';
import Icon  from  'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';

export default function Feed() {
  const [showStatus, setShowStatus] = useState(false)
  const largura = new Animated.Value(0)
  const navigation = useNavigation()

  const user = 'Erick Almeida'

  const posts = [
    { id: 1 , nome: 'Erick Almeida'},
    { id: 1 , nome: 'Gilberto Junior'},
    { id: 1 , nome: 'João Vitor'},
  ]

  const status = [
    { id: 1 , nome: 'Novo'},
    { id: 1 , nome: 'Erick Almeida', url: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-em-tons-de-cinza-de-uma-aguia-careca-americana-em-um-fundo-escuro_181624-31795.jpg?w=2000'},
    { id: 1 , nome: 'Gilberto Junior'},
    { id: 1 , nome: 'João Vitor'},
    { id: 1 , nome: 'João Vitor'},
    { id: 1 , nome: 'João Vitor'},
    { id: 1 , nome: 'João Vitor'},
    { id: 1 , nome: 'João Vitor'},
  ]

  function openStatus(){
      setShowStatus(true)
      startAnimationIn()
      setTimeout(() => {
          setShowStatus(false)
      }, 2000);
  }

  startAnimationIn = () => {
      Animated.timing(
        largura,{
          toValue: 500,
          timing: 2000,
          delay: 300,
          useNativeDriver: true
      }).start()
  }

  const renderStatus = (item) =>{
    return(
      <View style={{marginHorizontal: '5%'}}>
        <CardPost data={item}/>
      </View>
    )

  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: '5%', paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
                source={{ uri : `https://source.unsplash.com/random/800x600`}}
                style={{width: 40, height: 40, borderRadius: 100, borderWidth: 3, borderColor: '#666'}}
            />
            <TouchableWithoutFeedback onPress={() => navigation.navigate('PerfilScreens')}>
              <Text style={{color: '#fff', fontSize: 25, marginLeft: 10}}>
                {user}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          
          <View style={{flexDirection: 'row'}}>

            <View style={{width: 40, height: 40,marginLeft: 10, backgroundColor: '#2B2D2E', justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
              <Icon name="notifications" size={20} color={'#fff'}/>
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('DirectScreens')}>
              <View style={{width: 40, height: 40,marginLeft: 10, backgroundColor: '#2B2D2E', justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
                <Icon name="message" size={20} color={'#fff'}/>
              </View>
            </TouchableWithoutFeedback>


          </View>
        </View>
        <FlatList
          data={posts}
          renderItem={(item, index) => 
            renderStatus(item, index)
          }
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          ListHeaderComponent={
            <View style={{marginVertical: 10}}>


              <Text style={{color: '#fff',marginVertical: 10,marginLeft: '5%', fontWeight: '500'}}>Status</Text>
              <View style={{flexDirection: 'row', overflow: 'scroll'}}>
                <FlatList
                  data={status}
                  renderItem={(item, index) => 
                    <View style={{marginLeft: 15}}>
                      <CardStatus data={item} index={index} callbackopen={() => openStatus(item)}/>
                    </View>
                  }
                  keyExtractor={(item, index) => String(index)}
                  showsHorizontalScrollIndicator={false}
                  scrollEventThrottle={16}
                  horizontal
                />

              </View>
            </View>
          }
          ListFooterComponent={
            <View>
              <ActivityIndicator size={20} color={'#fff'} style={{marginTop: 5}}/>
            </View>
          }
        />
        </SafeAreaView>

        <Modal
            visible={showStatus}

        >
            <TouchableWithoutFeedback onPress={() => setShowStatus(false)}>
                <SafeAreaView style={{backgroundColor: '#000'}}>
                    <View>
                        <View style={{width: '100%',height: 10,position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1}}>
                            <Animated.View style={{width: largura, height: '100%', backgroundColor: '#004f76'}}></Animated.View>
                        </View>
                        <Image
                            source={{ uri : `https://source.unsplash.com/random/800x600`}}
                            style={{width: '100%', height: '100%', borderRadius: 4}}
                        />
                    </View>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1A1D',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
