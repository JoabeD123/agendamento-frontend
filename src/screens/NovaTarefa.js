import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function NovaTarefa() {
    return (
        <View>
            <View style={styles.cabecalho}>
                <Text style={styles.titulo}>Adicionar Tarefa</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.texto}>Nome da Tarefa:</Text>
                <TextInput style={styles.textInput} />

                <Text style={styles.texto}>Categotia da Tarefa:</Text>
                <Picker style={styles.textInput}>
                    <Picker.Item label="Estudo" value="estudo" />
                    <Picker.Item label="Trabalho" value="trabalho" />
                    <Picker.Item label="Reunião" value="reuniao" />
                    <Picker.Item label="Prova" value="prova" />
                    <Picker.Item label="Aula" value="aula" />
                </Picker>

                <Text style={styles.texto}>Descrição da Tarefa:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Value'
                />

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
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    body: {
        padding: 15
    },
    texto: {
        marginBottom: 5
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ccc',
        padding: 10,
        backgroundColor: 'white',
        marginBottom: 15
    }
});