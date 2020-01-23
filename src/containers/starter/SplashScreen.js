import React, { Component } from 'react';
import {
    View,
    Image, 
    StatusBar
} from 'react-native';
import { BlueColor } from '../../GlobalConfig';
import { Actions } from 'react-native-router-flux';


class SplashScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            Actions.tab()
        }, 1000)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: BlueColor, justifyContent: 'center', alignItems: 'center' }}>
                <StatusBar backgroundColor={BlueColor} translucent />
                <Image
                    source={require('../../images/ic_beta_white.png')}
                    style={{ height: 132, width: 115 }}
                    resizeMode='contain'
                />
            </View>
        )
    }
}

export default SplashScreen;
