import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import AppItem from './AppItem';
import DataBase from './DataBase';

export default function AppList({route, navigation }) {
    
    const [items,setItems] = useState([]) ;

    useEffect(()=>{
        DataBase.getItem().then(items => setItems(items));
    },[route]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Compras</Text>
            <ScrollView
                style={styles.scroolContainer}
                contentContainerStyle={styles.itemContainer}
                >
                {
                    items.map(item => {
                    return 
                        <AppItem
                            key={item.id}
                            id={item.id}
                            item={item.quantity + 'de' + item.description}
                        />
                })
                }
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AABBCC',
        alignItems: 'center',
        justifyContent: 'center'

    },
    scroolContainer:{
        flex:1,
        width:'90%'
    },
    itemContainer:{
        flex:1,
        marginTop:10,
        padding:20,
        borderTopLeftRadius: 10,
        borderBottomRightRadius:10,
        alignItems:'stretch',
        backgroundColor:'#FDFDFD'
    },
    title:{
        color:'#FDFDFD',
        fontSize: 20,
        fontWeight:'bold',
        marginTop:50,
        marginBottom: 20

    }
})