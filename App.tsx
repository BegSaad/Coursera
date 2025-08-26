import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LLFooter from './src/LLFooter'
import LLHeader from './src/LLHeader'


const App = () => {
  return (
    <View style={styles.container}>
      <LLHeader/>
      <View style={styles.footer}>
      <LLFooter/>
      </View>
    
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#495E57',
  },
  footer:{
    
  }
})