import React, { Component, PureComponent } from 'react';
import {
    View,
    StatusBar,
    Image,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import Colors from '../../Colors.js'
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

class TransactionItem extends PureComponent {
    render() {
        const item = this.props.data
        return (
            <View style={{
                flexDirection: 'row',
                width: '100%',
                alignSelf: 'baseline',
                justifyContent: 'flex-start',
                backgroundColor: 'white',
                paddingVertical: 18,
                paddingHorizontal: 32,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}>
                    <Image
                        source={require('../../images/ic_payment.png')}
                        style={styles.imageSize}
                        resizeMode='center'
                    />
                </View>

                <View style={{
                    flex: 8,
                    justifyContent: 'flex-start',
                    marginLeft: 8
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.nominal}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.transactionCode}>Transaksi : </Text>
                        <Text style={styles.transactionCode}>{item.transaction_code}</Text>
                    </View>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>
                    <TouchableNativeFeedback onPress={this.buttonPressed} style={{
                        backgroundColor: Colors.AccentColor,
                        height: 32,
                        width: 64,
                        borderRadius: 4
                    }}>
                        <Text style={{
                            flex: 1,
                            color: 'white',
                            fontSize: 14,
                            padding: 4,
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>TARIK</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

class TransactionScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataTransaksi: [
                {
                    id: 1,
                    transaction_code: 'ASDASD',
                    nominal: 250000
                },
                {
                    id: 2,
                    transaction_code: 'ASDASD',
                    nominal: 300000
                },
                {
                    id: 3,
                    transaction_code: 'ASDASD',
                    nominal: 400000
                },
            ],
            total: 0
        }
    }

    componentDidMount() {
        let total = 0
        this.state.dataTransaksi.map(item => {
            total = total + item.nominal
        })
        this.setState({
            total: total
        })
    }

    buttonPressed = () => {
        Actions.transaction_screen()
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar backgroundColor={Colors.PrimaryColor} translucent={false} />
                <View style={{
                    flexDirection: 'row',
                    height: 128,
                    width: '100%',
                    alignSelf: 'baseline',
                    justifyContent: 'flex-start',
                    backgroundColor: 'white',
                    paddingVertical: 22,
                    paddingHorizontal: 32
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}>
                        <Image
                            source={require('../../images/ic_komisi.png')}
                            style={[styles.imageSize, { marginTop: 4 }]}
                            resizeMode='center'
                        />
                    </View>

                    <View style={{
                        flex: 8,
                        justifyContent: 'flex-start',
                        marginLeft: 8
                    }}>
                        {this.state.total > 50000 ? (<Text style={{ fontSize: 16 }}>TOTAL KOMISI</Text>) : (<Text style={{ fontSize: 16 }}>TOTAL KOMISI 2</Text>)}
                        <Text style={{ fontSize: 24, color: Colors.AccentColor }}>Rp{this.state.total}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 16 }}>{this.state.total > 50000 ? 'BONUS' : 'KOMPENSASI'} </Text>
                            <Text style={{ fontSize: 16, color: Colors.AccentColor }}>Rp{this.state.total}</Text>
                        </View>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    height: 2,
                    width: '100%',
                    backgroundColor: 'white',
                    paddingHorizontal: 32
                }}>
                    <View style={{
                        flex: 1,
                        backgroundColor: Colors.DivGreyColor
                    }} />
                </View>

                <FlatList
                    style={{ marginTop: 6 }}
                    data={this.state.dataTransaksi}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TransactionItem data={item} />
                    )}
                />
            </View >
        )
    }
}


const styles = StyleSheet.create({
    imageSize: {
        height: 32,
        width: 32
    },

    transactionCode: {
        fontSize: 14, color: Colors.GreyLightColor, marginTop: 2
    }

});

export default TransactionScreen;