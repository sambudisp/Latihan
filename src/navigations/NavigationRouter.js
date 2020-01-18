import React, { Component } from "react";
import { Router, Stack, Scene } from 'react-native-router-flux';
import TestScreen from "../containers/TestScreen";
import TestScreen2 from "../containers/TestScreen2";
import SplashScreen from "../containers/starter/SplashScreen";
import TransactionScreen from "../containers/history/TransactionScreen";

export default class NavigationRouter extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene initial key="splashScreen" component={SplashScreen} hideNavBar />
                    <Scene key="screen1" component={TestScreen} title="Login" />
                    <Scene key="screen2" component={TestScreen2} title="Login" type='reset' />
                    <Scene key="transaction_screen" component={TransactionScreen} title="Transaksi Anda"/>
                </Stack>
            </Router>
        )
    }
}