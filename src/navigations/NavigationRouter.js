import React, { Component, PureComponent } from "react";
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import TestScreen from "../containers/TestScreen";
import TestScreen2 from "../containers/TestScreen2";
import SplashScreen from "../containers/starter/SplashScreen";
import TransactionScreen from "../containers/history/TransactionScreen";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { NavBarIconSize } from "../GlobalConfig";
import Colors from "../Colors";

class TabIcon extends PureComponent {
    render() {
        let image = ''
        switch (this.props.title) {
            case 'Screen 1':
                image = require('../images/ic_newspaper.png')
                break;

            case 'Transaksi Anda':
                image = require('../images/ic_transaksi.png')
                break;

            default:
                break;
        }

        return (
            <View style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: this.props.focused ? 'red' : 'white'
            }}>
                <View style={{ height: 32, width: 32}}>
                    <Image
                        source={image}
                        style={{height:'100%', width:'100%'}}
                        resizeMode='contain'
                        tintColor = {Colors.AccentColor} />
                </View>
                <Text>{this.props.title}</Text>
            </View>
        )
    }
}

export default class NavigationRouter extends Component {
    buttonPressed = () => {
        console.warn('oke')
    }

    render() {
        const btnHistory = (
            <TouchableOpacity
                onPress={this.buttonPressed}
                style={{
                    height: '100%',
                    aspectRatio: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Image
                    source={require('../images/ic_newspaper.png')}
                    style={NavBarIconSize}/>
            </TouchableOpacity>
        )

        return (
            <Router>
                <Stack key="root">
                    <Scene initial key="splashScreen" component={SplashScreen} hideNavBar />
                    <Scene key="screen1" component={TestScreen} title="Login" />

                    <Tabs key="tab" tabBarStyle={{ height: 64 }} showLabel={false} hideNavBar>
                        <Scene key="screen2" component={TestScreen2} title="Screen 1" type='reset' icon={TabIcon} />
                        <Scene key="transaction_screen" component={TransactionScreen} title="Transaksi Anda" icon={TabIcon}
                            renderBackButton={() => (
                                <View style={{ flex: 1, paddingLeft: 32 }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Transaksi Anda</Text>
                                </View>
                            )}
                            renderRightButton={btnHistory} />
                    </Tabs>
                </Stack>
            </Router>
        )
    }
}