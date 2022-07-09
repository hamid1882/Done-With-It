// import { StatusBar } from 'expo-status-bar';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TextInput,
  Button
  } from 'react-native';
import Topbar from './Components/Topbar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Topbar style={styles} />
      <View style={styles.WelcomeBar}>
        <Text style={styles.Text100}>Welcome to Edyoda!</Text>
        <Text style={styles.Text100}>Login to Continue Learning...</Text>
      </View>
      <View style={styles.LoginBar}>
        <TextInput style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
           }} 
           placeholder='Username/Email' />
           <TextInput style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
           }} 
           placeholder='Password' />
        <Button title='Login'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  Topbar: {
    width: "100%",
    flex: 0.1,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: "row"
  },
  Logo: {
    color: "#0084ff",
    fontSize: 30,
    fontFamily: "roboto",
    fontWeight: "bold"
  },
  MoreIcon: {
    width: 40,
    height: 40,
  },
  WelcomeBar: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Text100: {
    fontFamily: "sans-serif",
    fontSize: 20,
    letterSpacing: 0.5,
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
