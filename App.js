import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image,
  TouchableNativeFeedback
  } from 'react-native';

export default function App() {

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
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
