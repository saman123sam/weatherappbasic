
import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Header from './components/Header';

export default class App extends Component{
    render(){
        return(
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
            <Header/>
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    margin: 20
  }
})