import { View, Text, TextInput, Button } from "react-native";

export default function LoginBar(props) {
  return(
    <View style={props.styles.LoginBar}>
       <Text>Username</Text>
       <TextInput style={{
           borderBottomWidth: 1,
           borderBottomColor: "#ccc",
           marginBottom: 20,
          }} 
          onChangeText={props.setUserName}
          value={props.userName}
          placeholder='Username/Email' />
          <Text>Password</Text>
          <TextInput style={{
           borderBottomWidth: 1,
           borderBottomColor: "#ccc",
           marginBottom: 20
          }}
          onChangeText={props.setUserPassword}
          value={props.userPassword}
          placeholder='Password' />
       <Button title='Login' onPress={props.handleLoginPress} />
    </View>
  );
}