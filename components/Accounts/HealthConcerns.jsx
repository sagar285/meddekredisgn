import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { axiosClient } from '../Api/Axios'
import { useAuthentication } from '../context/UserContext'

const HealthConcerns = () => {
    const navigation = useNavigation()
    const {user,setuser} =useAuthentication()
    const [Healthconcern,setHealthConcern]=useState("")
    const [select,setselect]=useState(-1)

    const Healthconcer =(value,selected)=>{
        setHealthConcern(value)
        setselect(selected)
    }

    const submitdata =async()=>{

        try {
            if(!Healthconcern || !user.user._id){
                Alert.alert("pls enter a value");
            }
            const data = await axiosClient.put("/v2/userhealthconecer",{id:user.user._id,Healthconcern:Healthconcern})
            console.log(data)
            if(data.data.statusCode == 401){
                Alert.alert("Token Expired, Pls Login")
                await AsyncStorage.clear()
                await AsyncStorage.removeItem("token")
                await AsyncStorage.removeItem("userdata")
                navigation.navigate("SigninPage")
              }
            navigation.navigate("UploadRecordsPatient")
        } catch (error) {
            console.log(error)
            Alert.alert(error.message)
        }
    }


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ paddingHorizontal: 5, paddingVertical: 16, width: 156, }}>
                    <Text style={{ color: '#263238', fontSize: 13, fontWeight: '600', }}>Select All your health Concerns.</Text>
                </View>

                <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={()=>Healthconcer("Diabetes",0)} style={{ backgroundColor :select == 0 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor:   '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Diabetes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Heart Condition",1)} style={{ backgroundColor :select == 1 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 1 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Heart Condition</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Blood Pressure",2)} style={{ backgroundColor :select == 2 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 2 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Blood Pressure</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>Healthconcer("Arthritis",3)} style={{ backgroundColor :select == 3 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 3 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Arthritis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Psoriasis",4)} style={{ backgroundColor :select == 4 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 4? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Psoriasis</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>Healthconcer("Infection",5)} style={{ backgroundColor :select == 5 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 5 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Infection</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>Healthconcer("Acne",6)} style={{ backgroundColor :select == 6 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 6 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Acne</Text>
                    </TouchableOpacity>

                    <TouchableOpacity  onPress={()=>Healthconcer("Hairfall",7)} style={{ backgroundColor :select == 7 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 7 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Hairfall</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Cold",8)} style={{ backgroundColor :select == 8 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 8 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Cold</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Vitamin Deficiency",9)} style={{ backgroundColor :select == 9 ?"#DC51C6":"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 9 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Vitamin Deficiency</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Allergies",10)} style={{ backgroundColor :select == 10 ?"#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 10 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Allergies</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Ear Infection",11)} style={{ backgroundColor :select == 11 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 11 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Ear Infection</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>Healthconcer("Asthma",12)} style={{ backgroundColor :select == 12 ? "#DC51C6" :"white", flexDirection: 'row', alignItems: 'center', paddingHorizontal: 17, paddingVertical: 10, gap: 9, borderWidth: 1, borderColor: '#D9D9D980', width: '50%' }}>
                        <View style={{ width: 42, height: 42, borderRadius: 50, backgroundColor: select == 12 ? "white" :  '#108ED6', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/sdvdsv2.png')} resizeMode='cover' style={{ width: 23, height: 23 }} />
                        </View>
                        <Text style={{ color: '#353535', fontSize: 13, fontWeight: '600', }}>Asthma</Text>
                    </TouchableOpacity>

                    <View style={{ paddingHorizontal: 13, paddingVertical: 10, borderWidth: 1, borderColor: '#D9D9D980', width: '50%', }}>
                        <TextInput onChangeText={(text)=>setHealthConcern(text)} placeholder='Enter Other Issue' placeholderTextColor={"#5D5E61BD"} style={{ paddingHorizontal: 10, paddingVertical: 2, borderWidth: 1, borderColor: '#D9D9D980', borderRadius: 5 }} />
                    </View>
                </View>

            </ScrollView>

                    <TouchableOpacity onPress={submitdata} style={{marginVertical:10, paddingVertical: 15, backgroundColor: '#1F51C6', borderRadius: 5, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 13, fontWeight: '500', }}>Continue</Text>
                    </TouchableOpacity>

        </View>
    )
}

export default HealthConcerns

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
})