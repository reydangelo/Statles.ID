import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, Pressable, Alert } from 'react-native';
import { setToken, setUserData } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import global_styles from '../../../style';

export default function Login({ navigation }) {
    const [privateKey, setPrivateKey] = useState(null);
    const [publicKey, setPublicKey] = useState(null);

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userDataState.currentUserData);

    const testData = {"testpubkey1234" : {name : "Rey", DOB: "21-09-2002", father : "Richard" }, "test2pubkey1234" : {name : "Elli", DOB: "23-09-2005", father : "Hary" }}

    async function onLogIn() {
        
        if (publicKey in testData){
            await dispatch(setUserData(testData[publicKey])); // Dispatch the action here
            navigation.navigate('Main')
        }
        else {
            return Alert.alert("Error", "Incorrect Keypair", [{text: "Okay", onPress : () => console.log('OK'), style: 'default'}])
        }
    }

    return (
        <SafeAreaView style={global_styles.themeContainer}>
            <View style={[global_styles.mainContainer, {flex: 1, justifyContent: 'center'}]}>
                <View style={styles.logoContainer}>
                    <Text style={styles.logoText}>Statles.ID</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Public Key'
                        onChangeText={(key) => setPublicKey(key)}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Private Key'
                        onChangeText={(key) => setPrivateKey(key)}
                        secureTextEntry={true}
                    />
                    <Pressable style={styles.loginButton} onPress={onLogIn}>
                        <Text>Login</Text>
                    </Pressable>
                </View>
            </View>
            <View style={[styles.signUpContainer]}>
                    <Text style={{color: 'white'}}>Don't have an account?</Text>
                    <Pressable style={styles.signUpButton} onPress={() => navigation.navigate('Register')}>
                            <Text  style={{color: '#000'}}>Sign Up</Text>
                        </Pressable>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    logoContainer: {
        margin:10
    },

    logoText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#1A1A1A',
        color: '#fff',
        width: 320,
        margin: 3,
        height: 40,
        borderRadius: 5,
        padding: 5
    },
    loginButton: {
        backgroundColor: '#fff',
        color: 'black',
        width: 50,
        height: 25,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 3
    },
    signUpButton: {
        backgroundColor: '#90e0ef',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    signUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    }
});
