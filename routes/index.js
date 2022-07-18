import React,{useContext} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from "../src/pages/feed";
import Directs from "../src/pages/directs";
import Direct from "../src/pages/directs/Direct";
import Perfil from "../src/pages/perfil";
import { TouchableOpacity, View } from "react-native";
import Login from "../src/pages/login";
import { AuthContext } from "../src/contexto";

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();


export default function Routes() {
    const { isLogged } = useContext(AuthContext)
    const CustomTabBarButton = ({children}) => (
        <TouchableOpacity
            style={{
                top: -15,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: '#3F8DFD'
                }}
            >
                {children}
            </View>
        </TouchableOpacity>
    );

    return(
        isLogged == 1 ?
        <Tab.Navigator
            options={{
                
            }}
            screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor:'#fff',
            labelStyle: {fontSize: 12,}, 
            tabBarHideOnKeyboard: 'true',
            tabBarStyle:{
                backgroundColor: '#2B2D2E',
                position: 'absolute',
                width: '94%',
                borderRadius:15,
                marginBottom: 20,
                marginHorizontal: '3%'
                
              },
                
        }}
             >
            <Tab.Screen name="Home" component={HomeScreens} options={{ showLabel : false, headerShown: false, tabBarIcon: ({size, color}) => ( <Icon name="home" size={30} style={{marginTop: 20}}  color={color} />)}} />
            <Tab.Screen name="Home2" component={HomeScreens} options={{  headerShown: false, tabBarIcon: ({size, color}) => ( <Icon name="add" size={45}  color={'#fff'} />), tabBarButton: (props) => (<CustomTabBarButton {...props}/>) }} />
            <Tab.Screen name="Perfil" component={PerfilScreens} options={{  headerShown: false,showLabel : false, tabBarIcon: ({size, color}) => ( <Icon name="person" size={30} style={{marginTop: 20}}  color={color}/>)}} />
        </Tab.Navigator> 
        :
        <Login/>

    )
  
}

const HomeScreens = () => (
<Stack.Navigator screenOptions={{tabBarActiveTintColor:'#004F76',labelStyle: {fontSize: 12},}} >
    <Stack.Screen name="HomeInicial" component={Feed} options={{  headerShown: false}} />
    <Stack.Screen name="DirectScreens" component={DirectScreens} options={{  headerShown: false}} />
    <Stack.Screen name="PerfilScreens" component={PerfilScreens} options={{  headerShown: false}} />
</Stack.Navigator>
)

const DirectScreens = () => (
<Stack.Navigator screenOptions={{tabBarActiveTintColor:'#004F76',labelStyle: {fontSize: 12},}} >
    <Stack.Screen name="Directs" component={Directs} options={{  headerShown: false}} />
    <Stack.Screen name="Direct" component={Direct} options={{  headerShown: false}} />
</Stack.Navigator>
)

const PerfilScreens = () => (
    <Stack.Navigator screenOptions={{tabBarActiveTintColor:'#004F76',labelStyle: {fontSize: 12},}} >
        <Stack.Screen name="perfil" component={Perfil} options={{  headerShown: false}} />
    </Stack.Navigator>
    )