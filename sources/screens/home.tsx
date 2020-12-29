import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'

import TopBar from '../components/top-bar'
import ImageThumbnail from '../components/image-thumbnail'

import LoadImagesResponseType from '../global-types/load-images-response'

export default () => {
  const [ images, setImages ] = useState([] as string[])

  useEffect(() => {
    loadImages()
  }, [])

  async function loadImages() {
    const loadImagesFetch = await fetch('https://dog.ceo/api/breed/husky/images')

    try {
      const json = await loadImagesFetch.json() as LoadImagesResponseType
      
      setImages(json.message)
    } catch {
      //Handle if any error occured
    }
  }

  return (
    <SafeAreaView
      style = {{
        backgroundColor: 'gainsboro',
        flex: 1
      }}
    >
      <TopBar
        author = 'rynvva'
        link = 'https://github.com/rynvva'
      />
			
      <ScrollView
        contentContainerStyle = {{
          padding: 20
        }}
        style = {{
          flex: 1
        }}
      >
        {
          images.map((image, imageIndex) => (
            <ImageThumbnail
              key = {image}
              image = {image}
              index = {imageIndex}
            />
          ))
        }
      </ScrollView>
    </SafeAreaView>
  )
}