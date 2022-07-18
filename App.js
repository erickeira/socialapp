import { StatusBar } from 'expo-status-bar';
import React,{useContext} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Feed from './src/pages/feed';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import AuthProvider from './src/contexto';
import { AuthContext } from './src/contexto';
import Login from './src/pages/login';

const windowWidth = Dimensions.get('window').width; 
const windowHeight = Dimensions.get('window').height; 

export default function App() {
  const { isLogged } = useContext(AuthContext)
  return (
    <NavigationContainer>
      <AuthProvider>
          <Routes/>
        
      </AuthProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
