import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePagePatients from './HomePagePatients';
import AppointmentsOfPatient from './AppointmentsOfPatient';
import FindDoctorsByPatient from './FindDoctorsByPatient';
import RecordsPetient from './RecordsPetient';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const HomePage = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={HomePagePatients} options={{
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name='home' color={color} size={size} />
        )
      }} />
      <Tab.Screen name="Doctors" component={FindDoctorsByPatient} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Find Doctors',
        tabBarIcon: ({ color, size }) => (
          <FontAwesome6 name='user-doctor' color={color} size={size} />
        ),
        headerLeft: (props) => <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={15} style={{ paddingHorizontal: 10 }} />
        </TouchableOpacity>,
        headerTitleStyle: { color: '#404040', fontSize: 16, fontWeight: '600' }
      }} />
      <Tab.Screen name="Appointments" component={AppointmentsOfPatient} options={{
        headerTitleAlign: 'center',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='calendar-week' color={color} size={size} />
        ),
        headerLeft: (props) => <TouchableOpacity onPress={() => navigation.goBack()} >
          <AntDesign name='left' size={15} style={{ paddingHorizontal: 10 }} />
        </TouchableOpacity>,
        headerTitleStyle: { color: '#404040', fontSize: 16, fontWeight: '600' }
      }} />
      <Tab.Screen name="Records" component={RecordsPetient} options={{
        headerTitleAlign: 'center',
        headerTitle: 'Medical Records',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name='file-document-multiple-outline' color={color} size={size} />
        ),
        headerLeft: (props) => <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name='left' size={15} style={{ paddingHorizontal: 10 }} />
        </TouchableOpacity>,
        headerTitleStyle: { color: '#404040', fontSize: 16, fontWeight: '600' }
      }} />
    </Tab.Navigator>
  )
}

export default HomePage

const styles = StyleSheet.create({})