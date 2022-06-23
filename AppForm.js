import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DataBase from './DataBase';

 export default function AppForm({ navigation }) {

    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleDescriptionChange(description) {
        setDescription(description);
    }


    function handleQuantityChange(quantity) {
        setQuantity(quantity);
    }

    async function handleButtonPress() {
        const listItem = { description, quantity: parseInt(quantity) };
        DataBase.saveItem(listItem)
            .then(response => navigation.navigate("AppList", listItem));
    }


    return (
        <View style={styles.cotainer}>
            <Text style={styles.title}>Item para comprar</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="O que está faltando em casa?"
                    clearButtonMode='always'
                    onChangeText={handleDescriptionChange}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={handleQuantityChange}
                    placeholder='Digite uma quantidade'
                    keyboardType='{numeric}'
                    clearButtonMode="always"
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleButtonPress}
                >
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cotainer: {
        flex: 1,
        backgroundColor: '#AABBCC',
        alignItems: 'center'
    },
    title: {
        color: '#FDFDFD',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#FDFDFD'
    },
    input: {
        marginTop: 10,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#444444',
        height: 60,
        backgroundColor: '#FDFDFD',
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FDFDFD',
        fontWeight: 'bold'
    }
})