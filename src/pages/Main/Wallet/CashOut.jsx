import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import React from 'react'
import global_styles from '../../../../style'

export default function CashOut() {
  return (
    <View style={global_styles.themeContainer}>
      <View style={global_styles.mainContainer}>
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#aaa" : "#fff",
          },styles.itemContainer]} >
            <Image source={require('../../../../assets/service_icons/pngegg.png')} style={{width: 200, height: 50}}/>    
        </Pressable>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  itemContainer: {
    width: 330,
    height: 100,
    marginTop: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  }
})