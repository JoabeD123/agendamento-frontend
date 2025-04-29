import React from "react"
import { View, Text, StyleSheet, useState} from "react-native"
import { TextInput } from "react-native"
import {Dropdown } from "react-native-element-dropdown"

export default function NovaTarefa() {

    const data = [
        { label: 'selecione uma categoria', value: '0' },
        { label: 'estudos', value: '1' },
        { label: 'trabalho', value: '2' },
        { label: 'programação', value: '3' },
        { label: 'reunião', value: '4' },
      ];
    return (
        <View >
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>adicionar tarefa</Text>
                        
            </View>

            <View>
                
                <View style={styles.body}>
                    <Text style={styles.texto}>Nome da tarefa:</Text>
                    <TextInput style={styles.TextInput}/>
                    <Text style={styles.texto}>Categoria da tarefa</Text>
                    <Dropdown
                    styles={styles.dropdown}
                    data = {data}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    placeholder="Selecione uma categoria"
                    labelField={"label"}
                    valueField={"value"}
                    value= '0'
                    search
                    maxHeight={300}
                    onChange={item => {
                        console.log(item.value)
                    }}
                    />
                               
                </View>
           
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
        textAlign: 'left'
    },
    TextInput: {
        backgroundColor: 'white',
        flex: 1,
        height: 40,
        borderRadius: 20,
        borderColor: '#CCC',
        borderWidth: 2,
        padding: 5,
        flex: 0.9
    },
    form: {
        flexDirection: 'row',
    },
    textForm: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        flex: 0.1,

    },
    body: {
        padding: 15
    },
    texto: {
        marginBottom:5
    },
    dropdown: {
        marginTop: 100,
        margin: 16,
        heinght: 50,
        border: 2,
        borderColor: 'black',
        borderBottomColor:'black',
        borderbottomwidth: 0.5,
        color: 'black'
    },
    placeholderStyle: {
        fontSize: 16,
        color: 'black'
    },
    selectedTextStyle: {
        fontSize: 16,
        color: 'black'

    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: 'black'
    },
    
    

}
)
