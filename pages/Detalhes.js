import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet} from "react-native";
import * as SecureStore from "expo-secure-store";

export default function DetalhesScreen({ route }) {
    const { persistedText: routePersistedText } = route.params || {};
    const [persistedText, setPersistedText] = useState(routePersistedText || "nenhum texto para salvar");

    useEffect(() => {
        const loadPersistedText = async () => {
            const savedText = await SecureStore.getItemAsync("persistedText");
            if (savedText) setPersistedText(savedText);
        };
        loadPersistedText();
    }, []);
    
return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Detalhes</Text>
        <Text style={styles.textoVermelho}>Sem persistência: {textoNaoPersistido || "Nenhum texto salvo"}</Text>
        <Text style={styles.textoVerde}>Persistência: {textoPersistido}</Text>
    </View>
);

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