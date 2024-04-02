import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
const AuthenticationContext= createContext()

const UserContext = ({children}) => {
    const [user,setuser]=useState({user:null,token:null})

useEffect(()=>{
    const checkdata =async()=>{
        const token = await AsyncStorage.getItem('token')
        const userdata = await AsyncStorage.getItem('userdata')
        if(token && userdata){
          setuser({...user, token: token, user: JSON.parse(userdata)})
        }
    }
 checkdata()
},[])

  return (
    <AuthenticationContext.Provider value={{user,setuser}}>
        {children}
    </AuthenticationContext.Provider>
  )
}

const useAuthentication  = () => useContext(AuthenticationContext)

export {useAuthentication,UserContext}

