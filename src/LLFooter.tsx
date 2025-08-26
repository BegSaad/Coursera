import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LLFooter = () => {
  return (
    <View style={styles.container}>
      <Text style={
        styles.textc
      }> All rights reserved by Little Lemon, 2025</Text>
    </View>
  )
}

export default LLFooter

const styles = StyleSheet.create({
    container:{
         backgroundColor: '#F4CE14',
         marginBottom:10
    },
    textc:{
fontSize:18,
color:'black',
textAlign:'center'
    }
})