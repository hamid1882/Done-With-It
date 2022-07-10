import React, {useState, useRef} from "react";
import { 
     View, Text, StyleSheet, Button, 
   } from 'react-native';
   import LoginBar from "./LoginBar";

export default function Main({navigation}) {
  const [userName, setUserName] = useState("Hamid");
  const [userPassword, setUserPassword] = useState("Hamid");

  const ref = useRef(null);


  const handleLoginPress = () => {
    if(userName === "Hamid" && userPassword === "Hamid") {
      // navigation.navigate('Homepage', { name: 'Hamid' })
      // navigation.navigate('Homepage', { name: 'Hamid' });
      // ref.current && ref.current.navigate("Homepage");
      // console.log(ref.current)
      return;
    } 
  }


  return (
    <View style={styles.container}>
        <View style={styles.WelcomeBar}>
          <Text style={styles.Text200}>Task Management App</Text>
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
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Homepage')}
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
    fontSize: 22,
    fontWeight: "bold",
    letterSpacing: 0.5,
    textAlign: "center",
    lineHeight: 35
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
