import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Detalhes() {
    const route = useRoute();
    const textoRecebido = route.params?.textoSalvo || "Nenhum texto salvo";

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Detalhes</Text>
            <Text style={styles.texto}>Texto salvo: {textoRecebido}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
    textoVermelho: {
        color: "red",
        margin: 10,
    },
    textoVerde: {
        color: "green",
        margin: 10,
    },
});