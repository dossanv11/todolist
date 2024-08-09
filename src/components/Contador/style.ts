import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    text: {
        fontWeight: "bold", 
        fontSize: 15
    },
    badge: {
        backgroundColor: "#808080",
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft: 7
    },
    textBadge: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#F2F2F2"
    }
});