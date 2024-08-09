import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333333",
        flexDirection: "row",
        marginHorizontal: 20,
        borderRadius: 10,
        height: 70,
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 5,
        marginBottom: 15
    },
    botaoDeletar: {
        width: 50,
        height: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 40,
        height: 40
    },
    espacoTexto: {
        width: 250,
    },
    text: {
        color: "#fff",
        fontSize: 20,
    },
    textChecked: {
        textDecorationLine: "line-through",
        fontSize: 17,
        color: "#808080"
    },
    checkbox: {
        color: "#262626"
    }
});