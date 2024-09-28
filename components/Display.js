import { StyleSheet, Text, View } from 'react-native';

export default props => {
    return (
        <View style={estilos.display}>
            <Text style={estilos.textoDisplayOper} numberOfLines={1}>
                {props.valor}
            </Text>
            <Text style={estilos.textoDisplayRes} numberOfLines={1}>
                {props.res}
            </Text>
        </View>
    );
}

const estilos = StyleSheet.create({
    display: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#1E1E1E',
        width: '100%',
        borderBottomWidth: 2, 
        borderBottomColor: '#f39c12', 
    },
    textoDisplayRes: {
        fontSize: 40, 
        color: '#fff',
    },
    textoDisplayOper: {
        fontSize: 20, 
        color: '#7f8c8d',
    },
});
