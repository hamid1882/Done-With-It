// import { StatusBar } from 'expo-status-bar';
import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  StatusBar
  } from 'react-native';

export default function App() {

  const dimensions = useDimensions("screen");

  const orientation = useDeviceOrientation();

  const handlePress = () => {
    console.log("Hamid you pressed")
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello React native- Journey! - Alhamdulillah finnaly you are learning something</Text>
      <Image
        blurRadius={10}
        fadeDuration={1000}
        source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300"
         }}/>
         <TouchableNativeFeedback>
          <View style={{ width: 200, height: 100, backgroundColor:"skyblue"}}></View>
         </TouchableNativeFeedback>
         <Button
            title="Hamid here!"
            color="black"
            onPress={() => Alert.alert("Hamidoo","Hamid your alert",[
              {
                text: "Hello",
                style: { backgroundColor: "red", color: "red"}
              }
            ])}
         />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
