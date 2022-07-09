import React from 'react'

export default function Topbar(props) {
  return (
    <View style={props.styles.Topbar}>
        <Text style={props.styles.Logo}>EDYODA</Text>
        <Image source={require("./assets/more.png")} style={props.styles.MoreIcon} />
    </View>
  )
}
