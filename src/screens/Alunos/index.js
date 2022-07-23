import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import THEME from '../../services/Theme'

const Alunos = props => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.Text}>Alunos</Text>
            </View>
            <View>
                <Text style={styles.Text}>Subtítulo</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => { props.navigation.navigate('Professores')}}>
                    <Text>Professores</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DFF',
    },
    Button: {
        padding: 10,
        fontSize: 20,
        borderWidth: 1,
        margin: 10,
    },
    Text:{
        fontSize: 40,
        marginBottom: 10,
        fontFamily: THEME.FONTS.r900
    },
})

export default Alunos;