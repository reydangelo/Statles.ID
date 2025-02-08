import React from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, Pressable } from 'react-native'
import global_styles from '../../../../style'
import { useNavigation } from '@react-navigation/native'

function Inbox(props) {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={global_styles.themeContainer}>
      <View style={global_styles.pageTitleContainer}>
          <Text style={global_styles.pageTitle}>Inbox</Text>
      </View>
      <View style={global_styles.mainContainer}>
        <Pressable style={styles.messageContainers} onPress={()=> navigation.navigate('Chat')}>
          <Image style={{width: 40, height: 40, margin: 20, borderRadius: 50}} source={require('../../../../assets/testimgs/IMG_6304.jpg')}/>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: "#fff", margin: 5, fontSize: 20, fontWeight: 'bold'}}>Rey D'Angelo</Text>
            <Text style={{color: "#fff", margin: 5}}>Hello! Nice to meet you!</Text>
          </View>
        </Pressable>
        <Pressable style={styles.messageContainers}>
          <Image style={{width: 40, height: 40, margin: 20, borderRadius: 50}} source={require('../../../../assets/testimgs/IMG_7757.jpeg')}/>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: "#fff", margin: 5, fontSize: 20, fontWeight: 'bold'}}>Chris Ko</Text>
            <Text style={{color: "#fff", margin: 5}}>How're you doing?!</Text>
          </View>
        </Pressable>
        <Pressable style={styles.messageContainers}>
          <Image style={{width: 40, height: 40, margin: 20, borderRadius: 50}} source={require('../../../../assets/testimgs/IMG_7758.jpg')}/>
          <View style={{justifyContent: 'center'}}>
            <Text style={{color: "#fff", margin: 5, fontSize: 20, fontWeight: 'bold'}}>Win Ko Ko Aung</Text>
            <Text style={{color: "#fff", margin: 5}}>Good to see you here!</Text>
          </View>
        </Pressable>
      </View>
      
    </SafeAreaView>
  )
}

export default Inbox

const styles = StyleSheet.create({
  messageContainers: {
    backgroundColor: '#1A1A1A',
    height: 80,
    width: 330,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  }
})