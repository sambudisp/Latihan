import React, { Component, PureComponent } from 'react';
import {
    View
} from 'react-native';

export const GreenColor = 'green'

export class KotakMerah extends PureComponent {
    render() {
        return (
            <View style={{
                height: 100,
                width: 200,
                backgroundColor: 'red'
            }}>

            </View>
        )
    }
}

export class KotakHijau extends PureComponent {
    render() {
        return (
            <View style={{
                height: 100,
                width: 200,
                backgroundColor: 'green'
            }}>

            </View>
        )
    }
}