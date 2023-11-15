import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, SafeAreaView, ImageBackground } from 'react-native'

import React, { useState } from 'react'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [hidePassword, setHidePassword] = useState(true);
    const [userPassword, setUserPassword] = useState('');
    const managePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/icon/Back.png')} resizeMode="cover" style={styles.image}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 50,
                    backgroundColor: '#FCFCFC',
                }}>
                    <Image
                        style={styles.imgLogo}
                        source={require('../img/icon/logo.png')}
                    />
                    <Text style={{
                        alignSelf: 'stretch',
                        marginLeft: 20,
                        fontSize: 20,
                        fontWeight: '600'
                    }}>
                        Loging
                    </Text>
                    <Text style={{
                        alignSelf: 'stretch',
                        marginLeft: 20,
                        fontSize: 12,
                        fontWeight: '400',
                        color: '#7C7C7C',
                        marginTop: 20,
                        marginBottom: 10
                    }}>
                        Enter your emails and password
                    </Text>
                    <SafeAreaView
                        style={styles.containerInput}
                    >
                        <Text>
                            Email
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="imshuvo97@gmail.com"
                            keyboardType="default"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </SafeAreaView>
                    <SafeAreaView
                        style={styles.containerInput}
                    >
                        <Text>
                            Password
                        </Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={hidePassword}
                            autoCompleteType="password"
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="send"
                            placeholder="Password"
                            value={userPassword}
                            onChangeText={(text) => setUserPassword(text)}
                        />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={styles.visibilityBtn}
                            onPress={managePasswordVisibility}
                        >
                            <Image
                                source={
                                    hidePassword
                                        ? require('../img/icon/view.png')
                                        : require('../img/icon/hide.png')
                                }
                                style={styles.btnImage}
                            />
                        </TouchableOpacity>
                    </SafeAreaView>
                    <TouchableOpacity style={styles.btnQuenMatKhau}>
                        <Text
                            style={styles.btnText}
                        >Forgot Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLogin} >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 18,
                                fontWeight: '500'
                            }}
                        >Log In</Text>
                    </TouchableOpacity>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 5,
                        marginTop: 20
                    }}>
                        <Text>
                            Don’t have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
                            <Text style={{
                                color: '#53B175'
                            }}>
                                Singup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        flex: 1,
        marginTop: 50,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '700'
    },
    back: {
        flex: 2,
        backgroundColor: '#C92127',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    content: {
        alignItems: 'center',
        flex: 5,
        backgroundColor: 'blue',
        marginTop: -150,
        margin: 20,
        marginBottom: -10,
        borderRadius: 15,
        backgroundColor: 'white'
    },
    bottom: {
        margin: 20,
    },
    btnLogin: {
        backgroundColor: '#53B175',
        width: '80%',
        alignItems: 'center',
        padding: 20,
        borderRadius: 20,
        marginTop: 50
    },
    containerLogin: {
        backgroundColor: '#307EF3',
        flexDirection: 'row',
        width: '90%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 10,
        marginTop: 20,
        gap: 10
    },
    btnQuenMatKhau: {
        alignSelf: 'flex-end',
        margin: 10,
    },
    btnText: {
        color: '#000'
    },
    imgLogo: {
        margin: 40,
    },
    containerInput: {
        width: '90%',
        marginTop: 10
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        padding: 5,
        paddingLeft: 10,
        // borderRadius: 30,
        marginTop: 10
    },
    visibilityBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 36,
        marginRight: 5
    },
    vector: {
        width: '100%',
        marginTop: 50,
    },
    contentDangKi: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        gap: 20
    },
    contentBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
})