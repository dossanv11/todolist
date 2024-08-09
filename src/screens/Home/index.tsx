import React, { useState } from "react";
import { FlatList, Image, Keyboard, SafeAreaView, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import Contador from "../../components/Contador";
import SemItensCadastrados from "../../components/SemItensCadastrados";
import Item from "../../components/Item";

export default function Home () {
    const [itens, setItens] = useState<string[]>([]);
    const [item, setItem] = useState("");
    const [numeroTarefasCriadas, setNumeroTarefasCriadas] = useState(0);
    const [numeroTarefasConcluidas, setNumeroTarefasConcluidas] = useState(0);

    function handleItensAdd() {
        setItens(prevState => [...prevState, item]);
        setItem("");
        Keyboard.dismiss();
        handleIncrementarContadorTarefasCriadas();
    }

    function handleItensDelete(texto: string) {
        setItens(prevState => prevState.filter(item => item !== texto));
        handleDecrementarContadorTarefasCriadas();
    }

    function handleIncrementarContadorTarefasCriadas() {
        setNumeroTarefasCriadas(prevState => prevState + 1);
    }

    function handleDecrementarContadorTarefasCriadas() {
        setNumeroTarefasCriadas(prevState => prevState - 1);
    }

    function handleIncrementarContadorTarefasConcluidas() {
        setNumeroTarefasConcluidas(prevState => prevState + 1);
    }

    function handleDecrementarContadorTarefasConcluidas() {
        setNumeroTarefasConcluidas(prevState => prevState - 1);
    }

    function handleConcluidas(isChecked: boolean) {
        if(isChecked) {
            handleIncrementarContadorTarefasConcluidas();
            return;
        }
        handleDecrementarContadorTarefasConcluidas();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require("../../assets/logo.png")} style={styles.imgHeader} />
            </View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    keyboardType="email-address"
                    maxLength={70}
                    onChangeText={setItem}
                    value={item}
                />

                <TouchableOpacity 
                    style={styles.button}
                    onPress={handleItensAdd}
                >
                    <Image source={require("../../assets/plus.png")} style={styles.imgButton} />
                </TouchableOpacity>
            </View>

            <View style={styles.contadores}>
                <Contador legenda="Criadas" contador={numeroTarefasCriadas} textColor="#4EA8DE"/>
                <Contador legenda="Concluídas" contador={numeroTarefasConcluidas} textColor="#8284FA"/>
            </View>

            <FlatList
                data={itens}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Item
                        key={item}
                        text={item}
                        onRemove={() => handleItensDelete(item)}
                        handleCheck={(isChecked: boolean) => handleConcluidas(isChecked)}
                    />
                )}
                ListEmptyComponent={() => <SemItensCadastrados />}
            />
        </SafeAreaView>
    )
}