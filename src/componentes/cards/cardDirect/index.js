import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView ,Image, TouchableWithoutFeedback} from 'react-native';
import { color, Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function CardDirect() {
    const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Direct')}>
        <View style={styles.containerDirect}>
            <View style={{height: '100%', justifyContent: 'center'}}>
                <Image
                    source={{ uri : `https://source.unsplash.com/random/800x600`}}
                    style={{width: 50, height: 50, borderRadius: 100, borderWidth: 3, borderColor: '#666'}}
                />
            </View>
            <View style={{marginLeft: 15, height: '100%', justifyContent: 'center', width: '75%'}}>
                <Text style={{color: '#fff', fontWeight: '600'}}>Erick Almeida</Text>
                <Text style={{color: '#fff', fontWeight: '300', marginTop: 5}}>Mensagem</Text>
            </View>
            <View style={{height: '100%', justifyContent: 'center'}}>
                <Text style={{color: '#fff', fontSize: 10}}>17:49</Text>
                <Icon name="done-all" size={16} color={'#004f76'}/>
            </View>
        </View>
    </TouchableWithoutFeedback>

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
        borderBottomWidth: 0.3,
        paddingHorizontal: '5%',
        flexDirection: 'row',

    }
      
});
