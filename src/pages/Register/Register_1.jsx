import React, { useState } from 'react'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Pressable } from 'react-native'
import global_styles from '../../../style.js'
import DateTimePicker from '@react-native-community/datetimepicker';

function Register_1() {

  const [userData, setUserData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dob: '',
    address: '',
    country: '',
    id: '',
    phoneNumber: '',
  })

  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleInputChange = (field, value) => {
    setUserData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || userData.dob;
    setShowDatePicker(false);
    handleInputChange('dob', currentDate.toLocaleDateString());
  }

  return (
    <SafeAreaView style={global_styles.themeContainer}>
      <View style={global_styles.pageTitleContainer}>
        <Text style={global_styles.pageTitle}>Register</Text>
      </View>
      <View style={{alignItems: 'flex-start'}}>

        <View style={{flexDirection: 'column', margin: 5}}>
          <Text style={styles.label}>Name</Text>
          <TextInput 
            style={styles.inputBoxes} 
            placeholder='Johnny' 
            onChangeText={(value) => handleInputChange('firstName', value)}
          />
        </View>

        <View style={{flexDirection: 'row', margin: 10}}>
          <Text style={styles.label}>Date Of Birth</Text>
          <Pressable style={{padding: 10}} onPress={() => setShowDatePicker(true)}>
            <Text style={{color: '#fff'}}>{userData.dob ? userData.dob : 'Select Date'}</Text>              
          </Pressable>
          {showDatePicker && (
            <DateTimePicker 
              mode="date" 
              display="calendar" 
              value={new Date()} 
              themeVariant='dark' 
              onChange={handleDateChange}
            />
          )}
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Register_1

const styles = StyleSheet.create({
  inputBoxes: { 
    color: '#fff',
    backgroundColor: '#1A1A1A',
    padding: 18,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 5
  },
  label : {
    color: 'white',
    fontSize: 18,
    margin: 5
  }
})
