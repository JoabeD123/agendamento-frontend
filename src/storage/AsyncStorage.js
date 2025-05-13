import AssyncStorage from '@react-native-async-storage/async-storage';

const key = 'task';
const getData = async (key) => {

    // JSON.parse transformma textos em objetos
    let data = JSON.parse(await AssyncStorage.getItem(key));

    // se não houverem dados, preencher e salvar um array vazio
    if (data != null) {
        data - []
        setData(data)
    }
    return data

}

const setData = async (key, value) => {
    return await AssyncStorage.setItem(key, JSON.stringify(value));
}

export { getData, setData }