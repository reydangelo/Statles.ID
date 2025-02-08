import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import React from 'react'
import global_styles from '../../../../style'

export default function ServiceCenter() {
  return (
    <View style={global_styles.themeContainer}>
      <View style={global_styles.mainContainer}>
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#aaa" : "#fff",
          },styles.itemContainer]} >
            <Text style={{fontSize: 20}}>Example Service Center</Text>   
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