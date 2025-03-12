import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const Texto = ({ title, text, color }) => (
    <Text style={[styles.text, { color }]}>{title}: {text || "Nenhum texto salvo"}</Text>
);

export default function HomeScreen() {
    const navigation = useNavigation();
    const [text, setText] = useState("");
    const [persistedText, setPersistedText] = useState("");


    useEffect(() => {
        const loadPersistedText = async () => {
            const savedText = await SecureStore.getItemAsync("persistedText");
            if (savedText) setPersistedText(savedText);
        };
        loadPersistedText();
    }, []);

    const saveText = async () => {
        await SecureStore.setItemAsync("persistedText", text);
        setPersistedText(text);
    };

    return (
 <View style={styles.container}>
            <Text style={styles.title}>Persistencia e navegaçaõ</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Digite algo"
            />

            <Texto title="Texto digitado" text={text} color="blue" /> 
            <Texto title="Texto salvo" text={persistedText} color="green" />

            <TouchableOpacity style={styles.button} onPress={saveText}>
                <Text style={styles.buttonText}>Salvar texto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setText("")}>
                <Text style={styles.buttonText}>Limpar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Detalhes", { persistedText })}>
                <Text style={styles.buttonText}>Detalhes</Text>
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
