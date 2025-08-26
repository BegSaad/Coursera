import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LLHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Little Lemon</Text>
    </View>
  )
}

export default LLHeader

const styles = StyleSheet.create({
    container:{
    
            backgroundColor: '#F4CE14',
            marginBottom:740
    },
    textstyle:{
        fontSize:30,
        textAlign:'center',
        padding:40,
        color:'black'
    }
})