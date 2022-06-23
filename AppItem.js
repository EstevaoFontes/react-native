import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native'

export default function AppItem(props) {
    return (
        <View style={styles.container}>
            <Text> style={styles.textItem}
                {props.item}
            </Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.deleteButton}>
                    <Text style={styles.buttonText}>X</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FDFDFD',
        marginTop: 20,
        width: "100%"
    },
    buttonContainer:{
        flexDirection:'row-reverse',
        alignItems:'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 10,
        marginTop: 10
    },
    deleteButton:{
        marginLeft:10,
        height:40,
        backgroundColor:'navy',
        borderRadius:10,
        padding:10,
        fontSize:12,
        alignItems:'center'
    },
    editButton:{
        
    },
    buttonText:{
        color:'#FDFDFD',
        fontWeight:'bold'
    },
    textItem:{
        fontSize:20
    }

})