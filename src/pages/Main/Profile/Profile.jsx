import React, { useEffect } from 'react';
import { SafeAreaView, Text, Pressable, StyleSheet, View, Image } from 'react-native';
import global_styles from '../../../../style';
import { useDispatch, useSelector } from 'react-redux';
import { clearUserData } from '../../../../redux/actions';
import { useNavigation } from '@react-navigation/native';

function Profile(props) {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userDataState.currentUserData);

  // Effect to check if the user is logged in
  useEffect(() => {
    if (!userData) {
      // If userData is null or cleared, navigate to the Login screen
      props.navigation.navigate('Login');
    }
  }, [userData, props.navigation]);

  async function onLogOut() {
    await dispatch(clearUserData());
    // Navigation to Login screen will be handled by the useEffect
  }

  if (!userData) {
    // Optionally, return null or a loading spinner if you'd like
    return null;
  }

  return (
    <SafeAreaView style={global_styles.themeContainer}>
      <View styles={global_styles.pageTitleContainer}>
        <Text style={global_styles.pageTitle}>Profile</Text>
      </View>
      <View style={global_styles.mainContainer}>
        <Image style={{width: 150, height: 150, borderRadius: 100, margin: 30}} source={require('../../../../assets/testimgs/IMG_6304.jpg')}/>
        <View style={styles.infoContainer}>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Name</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff"}}>Rey D'Angelo</Text>
          </View>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Date of Birth</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff"}}>21 Sep 2002</Text>
          </View>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Country</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff"}}>Myanmar</Text>
          </View>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Address</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff", fontSize: 11}}>Example Road, Mandalay, Chanayethazan</Text>
          </View>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Public Key</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff"}}>eXamPLePUBlickEy</Text>
          </View>
          <View style={{flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: 'space-between', padding: 20}}>
            <Text style={{alignSelf: 'flex-start', color: "#9e9e9e"}}>Private Key</Text>
            <Text style={{alignSelf: 'flex-end', color: "#fff"}}>*******************</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 30, marginRight: 30}}>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#1C1C1C' : '#111111'}, styles.button]} onPress={()=> navigation.navigate('EditPf')}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </Pressable>
          <Pressable style={({pressed}) => [{backgroundColor: pressed ? '#1C1C1C' : '#111111'}, styles.button]} onPress={onLogOut}>
            <Text style={styles.logOutButtonText}>Log Out</Text>
          </Pressable>
        </View>
      </View>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin : 10,
    padding: 15,
    flexGrow: 1

  },

  editProfileButton : {
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin : 10,
    padding: 15,
    flexGrow: 1
  },

  logOutButtonText: {
    color: '#a00f0f',
  },
  editProfileButtonText: {
    color: '#aaa'
  }, 



  infoContainer: {
    backgroundColor: "#1A1A1A",
    width: 300,
    height: 335,
    borderRadius: 10,
  }

});

export default Profile;
