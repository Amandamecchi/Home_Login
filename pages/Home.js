import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Texto = ({ title, text, color }) => (
    <Text style={[styles.text, { color: color }]}>{title}: {text}</Text>
);

const HomeScreen = () => {
    const [text, setText] = useState("");
    const [persistedText, setPersistedText] = useState("nenhum texto para salvar");
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Persistencia e navegaçaõ</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Digite algo"
            />
            <Texto title="sem persistencia" text={text || "nenhum textosalvo"} color="blue" />
            <Texto title="com persistencia" text={persistedText} color="green" />

            <TouchableOpacity style={styles.button} onPress={() => setPersistedText(text)}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => setText("")}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>detalhes</Text>
            </TouchableOpacity>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
    },
    text: {
        margin: 10,
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        margin: 10,
    },
    buttonText: {
        color: "white",
    },
});













//const Home = ({ navigation }) => {
//  const [text, setText] = useState("");
// const [persistedText, setPersistedText] = useState("nenhum texto paa salvar");
