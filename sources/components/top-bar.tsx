import React from 'react'
import { Linking, Text, TouchableOpacity, View } from 'react-native'

type PropsType = {
  author: string,
  link: string
}

export default (props: PropsType) => {
  return (
    <View
      style = {{
        alignItems: 'center',
        backgroundColor: 'dimgray',
        padding: 20
      }}
    >
      <TouchableOpacity
        activeOpacity = {0.8}
        onPress = {() => Linking.openURL(props.link)}
        style = {{
          padding: 10
        }}
      >
        <Text
          style = {{
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
          }}
        >
          Created by {props.author}
        </Text>
      </TouchableOpacity>
    </View>
  )
}