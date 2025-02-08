import React from 'react'
import global_styles from '../../../../style'
import { View, Text, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import Transfer from './Transfer'
import { useNavigation } from '@react-navigation/native'

function Wallet() {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={global_styles.themeContainer}>
      <View style={global_styles.pageTitleContainer}>
          <Text style={global_styles.pageTitle}>Wallet</Text>
      </View>
      <View style={global_styles.mainContainer}>
          <View style={styles.balanceContainer}>
            <View style={{justifyContent: 'flex-start', margin: 15}}>
                <Text style={{color: "#fff", fontSize: 20}}>Balance</Text>
            </View>
            <View style={{justifyContent: 'flex-end', margin: 30, alignSelf: 'flex-end'}}>
                <Text style={styles.balanceText}>0.000032 BTC</Text>
            </View>
          </View>
          <View style={{justifyContent: 'between', flexDirection: 'row'}}>
            <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },styles.walletContainers]}
          onPress={() => navigation.navigate('Transfer')}
          >
              <Text style={styles.containerTexts}>Transfer</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },styles.walletContainers]}
          onPress={() => navigation.navigate('Request')}>
              <Text style={styles.containerTexts}>Request</Text>
            </Pressable>
          </View>
          <View style={{justifyContent: 'between', flexDirection: 'row'}}>
            <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },styles.walletContainers]}
          onPress={() => navigation.navigate('CashIn')}>
              <Text style={styles.containerTexts}>Cash In</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },styles.walletContainers]}
          onPress={() => navigation.navigate('CashOut')}>
              <Text style={styles.containerTexts}>Cash Out</Text>
            </Pressable>
          </View>
          <View style={{justifyContent: 'between', flexDirection: 'row'}}>
            <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },styles.serviceContainer]}
          onPress={() => navigation.navigate('ServiceCenter')}>
              <Text style={styles.containerTexts}>Service Center</Text>
            </Pressable>
          </View>
      </View>
      
      
      
    </SafeAreaView>
  )
}

export default Wallet


const styles = StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
    backgroundColor: "#1A1A1A",
    width: 330,
    height: 150,
    borderRadius: 20,
    margin: 15,
  },
  balanceText : {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  walletContainers: {
    width: 150,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 15,
  },
  containerTexts: {
    color: '#fff',
    fontSize: 15,
  },
  serviceContainer: {
    width: 330,
    height: 130,
    borderRadius: 15,
    justifyContent: 'center',
    margin: 10,
    alignItems: 'center',
  }
})