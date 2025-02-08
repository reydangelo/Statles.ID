import React, { useState } from "react";
import global_styles from "../../../../style";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import services from "../../../../services";
import { BlurView } from "expo-blur";

function Services(props) {
  const servicesArray = services;

  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [currItem, setCurrItem] = useState(null);

  function ItemModal() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        style={{ flex: 0 }}
      >
        <BlurView
          intensity={100}
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        />
        <View style={styles.itemView}>
        <Pressable style={{alignSelf: "flex-end", margin: 15}} onPress={()=> setModalVisible(false)}><Text style={{color: "#fff", fontSize: 18}}>X</Text></Pressable>
          <View>
            {currItem && (
              <>
                <Text style={styles.itemTitle}>{currItem.name}</Text>
                <Text style={styles.itemDescription}>{currItem.description}</Text>
              </>
            )}
          </View>
          <View style={{flex:1, justifyContent: "flex-end", margin: 10}}>
            <Pressable 
              style={{alignSelf: "flex-end"}} 
              onPress={()=> {setModalVisible(false)
                            setTimeout(()=> {
                              setModal2Visible(true)}, 1000)}}>
                <Text style={{color: "#fff", fontSize: 18}}>Apply</Text>
            </Pressable>  
          </View>
        </View>
      </Modal>
      
    );
  }

  function ConsentModal(){
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modal2Visible}
        onRequestClose={() => setModal2Visible(false)}
        style={{ flex: 0 }}>
          <BlurView
          intensity={100}
          style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}/>
          <View style={styles.itemView}>
        <Pressable style={{alignSelf: "flex-end"}} onPress={()=> setModal2Visible(false)}><Text style={{color: "#fff", fontSize: 18}}>X</Text></Pressable>
          <View>
            {currItem && (
              <>
                <Text style={styles.itemTitle}>Consent Form</Text>
                <Text style={styles.itemDescription}>Your identity information will be sent and reviewed by {currItem.name}. Do you agree to this?</Text>
              </>
            )}
          </View>
          <View style={{flex:1, alignItems:'center', justifyContent: 'flex-end', margin: 10}}>
            <Pressable 
              style={{margin: 15}}
              onPress={()=> {setModal2Visible(false)}}>
                <Text style={{color: "#fff", fontSize: 18}}>Yes</Text>
            </Pressable>
            <Pressable 
              style={{margin: 15}}
              onPress={()=> {setModal2Visible(false)}}>
                <Text style={{color: "#fff", fontSize: 18}}>No</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    )
  }

  function Item({ item }) {
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#0A0909" : "#1A1A1A",
          },
          styles.itemContainer,
        ]}
        onPress={() => {
          setModalVisible(true);
          setCurrItem(item);
        }}
      >
        <Text style={global_styles.normalText}>{item.name}</Text>
      </Pressable>
    );
  }

  return (
    <SafeAreaView style={global_styles.themeContainer}>
      <View style={global_styles.pageTitleContainer}>
        <Text style={global_styles.pageTitle}>Services</Text>
      </View>
      <View style={global_styles.mainContainer}>
        <FlatList
          data={servicesArray}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      <ItemModal />
      <ConsentModal />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: 150,
    height: 150,
    alignItems: "center",
    justifyContent: "center", // Fixed background color
    borderRadius: 20,
    margin: 15,
    padding: 10, // Added padding for better spacing
  },

  itemView: {
    flex: 1,
    width: 300,
    height: 150,
    alignSelf: "center",
    backgroundColor: "#0A0909",
    borderRadius: 15,
    padding: 10,
    margin: 180,
  },
  itemTitle : {
    color: "#fff",
    fontSize: 40,
    margin: 20,
  },
  itemDescription : {
    color: "#fff",
    fontSize: 16,
    margin: 20,
    lineHeight: 30
  },
});

export default Services;
