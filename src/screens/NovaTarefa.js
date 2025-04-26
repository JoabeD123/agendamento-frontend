import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { TextInput } from "react-native"

export default function NovaTarefa() {
    return (
        <View >
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>adicionar tarefa</Text>
                        
            </View>

            <View>

            <Text style={styles.titulo}>Nome da tarefa</Text>
                <TextInput style={styles.TextInput}/>
           
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center'
    },
    titulo: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    TextInput: {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        borderRadius: 20,
        borderColor: '#CCC',
        borderWidth: 2,
        borderheight: 100,
        position: 'absolute',
        right: 15
    },
}
)
