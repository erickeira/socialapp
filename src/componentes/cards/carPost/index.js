import { Icon } from '@rneui/base';
import { StatusBar} from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function CardPost(props) {
  return (
    <View style={styles.container}>
        <View style={{marginVertical: 15, marginHorizontal: 15}}>
            <View style={{flexDirection: 'row',alignItems: 'center'}}>

                <Image
                    source={{ uri : `https://source.unsplash.com/random/800x600`}}
                    style={{width: 50, height: 50, borderRadius: 100, borderWidth: 3, borderColor: '#666'}}
                />
                <View>
                    <Text style={{color: '#fff', marginLeft: 10}}>
                        {props.data.item.nome}
                    </Text>
                    <Text style={{color: '#adadad', marginLeft: 10, fontSize: 10, marginTop: 3}}>
                        à 10 min
                    </Text>
                </View>
                <View style={{width: 40, height: 40,position: 'absolute',right: 0, borderRadius: 100, backgroundColor: '#666', justifyContent: 'center', alignItems: 'center'}}>
                   <Icon name="more-horiz" size={25} color={'#fff'}/>
                </View>
            </View>
        </View>
        <Image
            source={{ uri : `https://source.unsplash.com/random/800x600`}}
            style={{width: '95%',marginLeft: '2.5%', height: 170, borderTopLeftRadius: 13, borderTopRightRadius: 13}}
        />

        <View style={{marginHorizontal: 10, marginVertical: 10}}>


            <View style={{marginBottom: 10}}>
                <Text style={{color: '#f4f4f4', fontSize: 12}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Icon name="favorite" color={'red'} size={25} style={{width: 40}}/>
                <Icon name="message" color={'#fff'} size={25} style={{width: 40}}/>
                <Icon name="send" color={'#fff'} size={25} style={{width: 40}}/>
            </View>

            <View style={{flexDirection: 'row', marginVertical: 10,alignItems: 'center'}}>
                <Text style={{color: '#fff', fontSize: 12}}>
                    222
                    <Text style={{color: '#666'}}> curtidas</Text>
                </Text>
                <View style={{alignItems: 'center', marginHorizontal: 5}}>
                    <Icon name="fiber-manual-record" color={'#fff'} size={5}/>
                </View>
                <Text style={{color: '#fff', fontSize: 12}}>
                    50
                    <Text style={{color: '#666'}}> comentários</Text>
                </Text>
            </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2B2D2E',
    width: windowWidth * 0.9,
    minHeight: 200,
    borderRadius: 13,
    marginVertical: 10,
  },
});
