import { StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';

export default props => {
    const estilosBotoes = [estilos.btn];

    if (props.btnDuplo) estilosBotoes.push(estilos.btnDuplo);
    if (props.btnIgual) estilosBotoes.push(estilos.btnIgual);
    if (props.operacao) estilosBotoes.push(estilos.btnOper);
    if (props.ac) estilosBotoes.push(estilos.btnAC);
    if (props.bs) estilosBotoes.push(estilos.btnBS);

    return (
        <TouchableHighlight onPress={props.onClick} style={estilosBotoes}>
            <Text style={estilos.texto}>{props.label}</Text>
        </TouchableHighlight>
    );
};

const estilos = StyleSheet.create({
    btn: {
        fontSize: 24,
        height: Dimensions.get('window').width / 5, 
        width: Dimensions.get('window').width / 5,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#4CAF50", 
        borderRadius: 10, 
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold', 
    },
    btnDuplo: {
        width: (Dimensions.get('window').width / 5) * 2 + 10, 
    },
    btnIgual: {
        backgroundColor: "#f39c12", 
    },
    btnOper: {
        backgroundColor: "#e74c3c", 
    },
    btnAC: {
        backgroundColor: "#34495e",
    },
    btnBS: {
        backgroundColor: "#3498db",
    },
});
