import React,{useState, createContext, useEffect} from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
// import AsyncStorage from "@react-native-community/async-storage";
// import { set } from "react-native-reanimated";


export const AuthContext = createContext({})

export default function AuthProvider({children}){
    const navigation = useNavigation()
    const [isLoading, setIsloading] = useState(false)
    const [isLogged, setIsLogged] = useState(0)

    console.log(`Is Logged`)
    console.log(isLogged)

    function logarUsuario(){
        setIsloading(true)
        setIsLogged(1)
        setTimeout(() => {
            setIsloading(false)
        }, 400);

    }

    function deslogarUsuario(){
        setIsLogged(0)
    }

    return(
        <AuthContext.Provider 
          value={{
            isLogged,
            logarUsuario,
            deslogarUsuario,
            isLoading
          }}>
            {children}
        </AuthContext.Provider>
    )

}