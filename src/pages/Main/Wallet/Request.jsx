import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import global_styles from '../../../../style'

export default function Request() {

  const [walletAddress, setWalletAddress] = useState(null);
  const [amount, setAmount] = useState(0);

  return (
    <View style={global_styles.themeContainer}>
        <View style={global_styles.mainContainer}>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Wallet Address</Text>
              <TextInput style={styles.textInput} onChangeText={(address)=> setWalletAddress(address)}/>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Amount (BTC)</Text>
              <TextInput style={styles.textInput} onChangeText={(amount)=> setAmount(amount)}/>
              <Text style={{color: 'gray', alignSelf: 'flex-end'}}>Balance: 0.0000032 BTC</Text>
            </View>
            <Pressable style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#ccc" : "#fff",
            },styles.transferButton]} 
            onPress={()=> alert(`Requested ${amount} BTC from ${walletAddress}`)}>
              <Text style={{color: '#000'}}>Request</Text>
            </Pressable>
        </View>
    </View>
  )
} 


const styles = StyleSheet.create({
  inputLabel: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 15
  },
  textInput: {
    backgroundColor: '#1A1A1A',
    width: 330,
    height: 40,
    borderRadius: 10,
    marginBottom: 5,
    padding: 10,
    color: '#fff'
  },
  transferButton: {
    width: 330,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 20
  }
})