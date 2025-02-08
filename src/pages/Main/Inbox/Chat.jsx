import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React from 'react'
import global_styles from '../../../../style'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Chat() {
  return (
    <View style={global_styles.themeContainer}>
      <View style={[{flex: 1, flexDirection: 'column'}]}>
        <View style={styles.messageContainer}>
            <View style={styles.theirMessageContainer}>
                <View style={styles.theirMessage}>
                    <Text style={{color: '#aaa'}}>Hi!</Text>
                </View>
            </View>
            <View style={styles.myMessageContainer}>
                <View style={styles.myMessage}>
                    <Text>Hello! Nice to meet you!</Text>
                </View>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Type a message'>

            </TextInput>
            <Pressable style={styles.sendIcon}>
                <MaterialCommunityIcons name='send' color={'#fff'} size={15}/>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    
    messageContainer: {
        justifyContent: 'flex-end',
        padding: 10,
        flexGrow:1,
        flexDirection: 'column',
    },

    myMessageContainer: {
        alignSelf: 'flex-end',
        marginBottom: 10,
    },

    theirMessageContainer: {
        alignSelf: 'flex-start',
        marginBottom: 10,
    },

    myMessage: {
        backgroundColor: '#E44B8D',
        padding: 20,
        borderRadius: 10,
    },
    theirMessage: {
        backgroundColor: '#1A1A1A',
        padding: 20,
        borderRadius: 10,
    },

    inputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
        padding: 10,
        borderRadius: 10,
    },
    textInput: {
        flexGrow: 1,
        marginRight: 10,
        borderRadius: 20,
        color: '#fff',
        backgroundColor: '#1A1A1A',
        padding: 10
    },
    sendIcon: {
        padding: 10,
        backgroundColor: '#1877F2',
        borderRadius: 50
    }

})