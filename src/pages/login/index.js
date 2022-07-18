import React,{useContext,useRef, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../contexto';
import { Icon } from '@rneui/base';

export default function Login() {
    const { isLogged, logarUsuario, isLoading} = useContext(AuthContext)
    const [text, onChangeText] = React.useState("");
    const [senha, onChangeSenha] = React.useState("");
    const [showPassword, setShowPassword] = useState(true);
    const loginRef = useRef();
    const senhaRef = useRef();
    
  
  return (

        <View style={styles.container}>
            <Text style={{fontSize: 30, marginVertical: -10, color: '#3F8DFD'}}>Social App</Text>
            <Text style={{fontSize: 13, marginVertical: 10, color: '#666', marginBottom: 50}}>by: Erick Almeida</Text>
            <TouchableWithoutFeedback onPress={() => loginRef.current.focus()}>
                <View style={[ styles.containerInput]}>
                    <Text  style={styles.titulocampo}>Login</Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            ref={loginRef}
                            style={styles.campoTexto}
                            onChangeText={onChangeText}
                            value={text}
                        />
                        <Icon name='person' size={24} color={'#666'} />
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => senhaRef.current.focus()}>
                <View style={[ styles.containerInput]}>
                    <Text  style={styles.titulocampo}>Senha </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            ref={senhaRef}
                            style={styles.campoTexto}
                            onChangeText={onChangeSenha}
                            value={senha}
                            secureTextEntry={ showPassword ? false : true } 
                            
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon name={showPassword == true ? 'visibility' : 'visibility-off'} size={24} color={'#666'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => logarUsuario()}>
                <View style={styles.botaoLogin}>
                    <Text>Entrar</Text>
                </View>
            </TouchableWithoutFeedback>
            {
                isLoading == true ? 
                <ActivityIndicator />
                : null
            }
            
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
containerInput:{
    backgroundColor:'#2B2D2E',
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 10,
},
titulocampo: {
    marginBottom:8,
    fontSize: Platform.OS === 'ios' ? 11 : 11,
    color: '#666',
    fontWeight: '500'
},
campoTexto: {
    marginBottom:10,
    fontSize: Platform.OS === 'ios' ? 14 : 14,
    color: '#fff',
    width: '92%'

},
botaoLogin:{
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3F8DFD',
    borderRadius: 5,
    marginVertical: 20,
    flexDirection: 'row'
}
});
