import { Link } from 'expo-router'
import React from 'react'
import { Button, Text, View } from 'react-native'

const NotFound = () => {
  return (
    <View>
      <Text>NotFound</Text>
      <Link href="/auth/Login" asChild>
              <Button title="Ir al profile"/>
      </Link>
    </View>
  )
}

export default NotFound