import React, { useState } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, Title, Subheading, Divider, Button } from 'react-native-paper'
import { Overlay } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const vendorList = [
    {
        shopName: 'Shekar General Store',
        ownerName: 'Shekar',
        street: 'chintha chettu center',
        area: 'RRPETA',
        city: 'Eluru',
        Phone: '9949544127'
    },
    {
        shopName: 'Krishna General Store',
        ownerName: 'Shekar',
        street: 'chintha chettu center',
        area: 'RRPETA',
        city: 'Eluru',
        Phone: '9949544127'
    },
    {
        shopName: 'Chanti General Store',
        ownerName: 'Shekar',
        street: 'chintha chettu center',
        area: 'RRPETA',
        city: 'Eluru',
        Phone: '9949544127'
    }
]


function ChooseVendor({ navigation }) {

    const [visible, setVisible] = useState(false);

    const showOverlay = () => {
        setVisible(true)
    }

    const hideOverlay = () => {
        setVisible(false)
    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center', }}>
                <Image source={{ uri: 'https://images.indianexpress.com/2017/05/google-maps-759.jpg' }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ flex: 1, }}>
                <Text style={{ fontSize: 19, fontFamily: 'ProximaNova-Bold', color: '#002F72', padding: 10 }}>select vendor :</Text>
                <ScrollView>
                    {vendorList.map((vendor, index) => {
                        return (
                            <Card key={index} style={{ marginHorizontal: 10, marginVertical: 5, paddingVertical: 10 }}>
                                <Text style={{ fontSize: 18, fontFamily: 'ProximaNova-Bold', color: '#002F72', textAlign: 'center', paddingBottom: 5 }}>{vendor.shopName}</Text>
                                <Divider style={{ backgroundColor: '#000' }} />
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <View style={{ flex: 2 }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingLeft: 15 }}>Owner    : {vendor.ownerName}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingLeft: 15, }}>Address :</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingLeft: 15 }}>{vendor.street},{"\n"}{vendor.area},{vendor.city}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingLeft: 15 }}>Phone    : {vendor.Phone}</Text>
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 10 }}>
                                        <Button labelStyle={{ color: '#002F72', fontFamily: 'ProximaNova-Bold' }}>select</Button>
                                    </View>
                                </View>
                            </Card>
                        )

                    })}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.confirmButton} onPress={showOverlay}  >
                <Text style={{ fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#fff' }}>place order</Text>
                <Icon name="arrow-right" size={17} color="#fff" style={{ paddingLeft: 3, paddingTop: 3 }} />
            </TouchableOpacity>

            <Overlay
                isVisible={visible}
                onBackdropPress={hideOverlay}
                animationType="none"
            >
                <View style={{ width: 280, height: 380, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: 'ProximaNova-Bold', color: '#002F72', paddingBottom: 10 }}>Order Summary</Text>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, paddingTop: 5, paddingLeft: 5, paddingBottom: 5, color: '#002F72' }}>Delivery Details</Text>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <View style={{ flex: 0.5, }}>
                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Name</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>phanindra</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>mobile</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>9505876290</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Address</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Eluru</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, paddingTop: 5, paddingLeft: 5, paddingBottom: 5, color: '#002F72' }}>Vendor Details</Text>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <View style={{ flex: 0.5, }}>
                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Name</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>phanindra</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>mobile</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>9505876290</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.4, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Address</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Eluru</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={{ fontFamily: 'ProximaNova-Bold', fontSize: 18, paddingTop: 5, paddingLeft: 5, paddingBottom: 5, color: '#002F72' }}>Order Details</Text>
                    <Divider style={{ backgroundColor: '#000', }} />
                    <View style={{ flex: 0.5, }}>
                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Order Items</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>3</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Subtotal</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>150</Text>
                            </View>
                        </View>

                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Delivery Charges</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>50</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', paddingHorizontal: 10 }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>Total</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: 15, fontFamily: 'ProximaNova-Bold', color: '#002F72' }}>200</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'flex-end' }}>
                        <Button style={{ backgroundColor: '#002F72', }} labelStyle={{ color: '#fff', fontSize: 15, }} onPress={() => { hideOverlay(); navigation.navigate('PaymentScreen') }}>Pay</Button>
                    </View>





                </View>


            </Overlay>


        </View>
    )
}

const styles = StyleSheet.create({
    confirmButton: {
        flex: 0.15,
        backgroundColor: '#002F72',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 8
    }
})

export default ChooseVendor