import React from 'react'
import { Button, Text, View, StyleSheet } from 'react-native'

export default function Homepage({navigate, route}) {
  return (
    <View style={{height: "100%"}}>
      <Text>Welcome {route.params.name}!</Text>
      <View style={styles.addNewTaskBar} >
         <Button title={"Create a new Task"} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addNewTaskBar: {
    width: "35%",
    height: "20px",
    position: 'absolute',
    bottom: -100,
    left: 130,
    borderRadius: 100,
    border: "1px solid black"
  }
});
