import React, {useState, useRef} from "react";
import { 
    SafeAreaView, View, DrawerLayoutAndroid, Text, Pressable, Image, StyleSheet, StatusBar, Button
   } from 'react-native';
   import LoginBar from "./LoginBar";

export default function Main({navigation}) {
  const [userName, setUserName] = useState("Hamid");
  const [userPassword, setUserPassword] = useState("12345");

  const handleLoginPress = (props) => {
    if(userName === "Hamid" && userPassword == 12345) {
      navigation.navigate('Homepage', { name: 'Hamid' })  
    } 
  }

  return (
    <View style={styles.container}>
        <View style={styles.WelcomeBar}>
          <Text style={styles.Text200}>Welcome to the Task Management App</Text>
          <Text style={styles.Text100}>Login to Connect with your Task Management Buddy!</Text>
        </View>
        <LoginBar
            styles={styles}
            setUserName={setUserName} 
            userName={userName} 
            setUserPassword={setUserPassword} 
            userPassword={userPassword}
            handleLoginPress={handleLoginPress}
         />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
  },
  WelcomeBar: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 15,
  },
  Text100: {
    fontFamily: "sans-serif",
    fontSize: 12,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  Text200: {
    fontFamily: "sans-serif",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 40,
  },
  LoginBar: {
    flex: 0.5,
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: 15,
    marginRight: 30,
    marginLeft: 30,
    paddingLeft: 50,
    paddingRight: 50,
  }
});
