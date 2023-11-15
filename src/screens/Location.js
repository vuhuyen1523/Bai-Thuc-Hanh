import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
export default function Location({ navigation }) {
    const data = [
        { label: 'Việt Nam', value: '1' },
        { label: 'Campuchia', value: '2' },
        { label: 'Lào', value: '3' },
        { label: 'Thái Lan', value: '4' },
        { label: 'Myanmar', value: '5' },
        { label: 'Malaysia', value: '6' },
        { label: 'Singapore', value: '7' },
        { label: 'Indonesia', value: '8' },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/icon/Back.png')} resizeMode="cover" style={styles.image}>
                <View style={{ justifyContent: 'center', alignItems: 'center', gap: 20 }}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../img/icon/location.png')}
                    />
                    <Text style={{ fontWeight: '600', fontSize: 20 }}>
                        Select Your Location
                    </Text>
                    <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 14, color: '#7C7C7C' }}>
                        Swithch on your location to stay in tune with
                        what’s happening in your area
                    </Text>
                    <Text style={{ alignSelf: 'stretch', marginLeft: 40, fontWeight: '400', fontSize: 14, color: '#7C7C7C' }}>
                        Your Zone
                    </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Your Zone' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <Text style={{ alignSelf: 'stretch', marginLeft: 40, fontWeight: '400', fontSize: 14, color: '#7C7C7C' }}>
                        Your Area
                    </Text>

                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Types of your area' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles.icon}
                                color={isFocus ? 'blue' : 'black'}
                                name="Safety"
                                size={20}
                            />
                        )}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ backgroundColor: '#53B175', width: '80%', alignItems: 'center', padding: 20, borderRadius: 20 }}>
                        <Text style={{ color: 'white', fontWeight: '500' }}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    dropdown: {
        width: '80%',
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})