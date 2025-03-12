import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";


const TextoExibido = ({ titulo, texto, cor }) => (
    <Text style={[styles.texto, { color: cor }]}>
        {titulo}: {texto || "Nenhum texto salvo"}
    </Text>
);

export default function HomeScreen() {
    const navigation = useNavigation();
    const [texto, setText] = useState("");
    const [textoSalvo, setTextoSalvo] = useState("");


    useEffect(() => {
carregarTexto();
}, []);

        };
async function carregarTexto() {
    const textoPersistido = await AsyncStorage.getItem("texto");
    if (textoPersistido) {
        setTextoSalvo(textoPersistido);
    } 
}


async function salvarTexto() {
    if (!texto.trim()) { /* trim é pra quando o usuário não digitou nada válido, se tiver ""*/ 
        return alert("Digite algo para salvar");
    }

    await AsyncStorage.setItem("texto", texto);
    setTextoSalvo(texto);
    setTexto("");

    async function limparTexto() {
        await AsyncStorage.removeItem("texto");
        setTextoSalvo("");
        alert("Texto removido");
    }

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
