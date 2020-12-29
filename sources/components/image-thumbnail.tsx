import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'

type PropsType = {
  image: string,
  index: number
}

export default (props: PropsType) => {
  return (
    <View
      key = {props.image}
      style = {{
        backgroundColor: 'crimson',
        borderRadius: 10,
        marginTop: props.index == 0 ? 0 : 20,
        overflow: 'hidden'
      }}
    >
      <Image
        source = {{uri: props.image}}
        style = {{
          height: (Dimensions.get('window').width - 40) / 16 * 9,
          width: Dimensions.get('window').width - 40
        }}
      />
			
      <Text
        style = {{
          color: 'white',
          fontWeight: 'bold',
          margin: 10
        }}
      >
        Dog {props.index + 1}
      </Text>
    </View>
  )
}