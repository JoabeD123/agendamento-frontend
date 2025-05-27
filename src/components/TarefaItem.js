import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TarefaItem(props) {

    let statusColor = 'orange';

    if (props.status == 'concluído') {
        statusColor = 'green';
    }

    const handleRemove = () => {
        props.onRemove(props.id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.nome}</Text>
            <Text style={styles.data}>{props.data}</Text>
            <Text style={styles.categoria}>Categoria - {props.categoria}</Text>
            <View style={{ ...styles.status, backgroundColor: statusColor }}>
                <Text style={styles.textoStatus}>{props.status}</Text>
            </View>
            <TouchableOpacity style={styles.botaoRemover} onPress={handleRemove}>
                <Text style={styles.textoRemover}>×</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
        padding: 15,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 18
    },
    data: {
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria: {
        marginTop: 8
    },
    status: {
        backgroundColor: 'orange',
        width: 150,
        height: 30,
    },
    textoStatus: {
        color: 'white'
    },
    botaoRemover: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30
    },
    textoRemover: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    }
});