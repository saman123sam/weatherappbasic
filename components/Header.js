const { requireNativeComponent } = require("react-native");

import React, { Component } from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default class Header extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}> Weather Forecast</Text>
                <Image source={require('../assets/sunny.png')} style={styles.img} />
                <Text style={styles.text}>30°C</Text>
                <Text style={styles.text}>Kathmandu</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
        text:{
            fontSize: 28,
            fontWeight: 'bold',
            textAlign: 'center',
            color:'#333'

        },
        img:{
            width: 300,
            height:300,
            alignSelf:'center',
            
        }
})