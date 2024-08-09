import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#262626",
    },
    header: {
        backgroundColor: "#0D0D0D",
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    imgHeader: {
        width: 175,
        height: 50
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#333333",
        borderRadius: 5,
        color: "#F2F2F2",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#1E6F9F",
        alignItems: "center",
        justifyContent: "center",
      },
      imgButton: {
        width: 25,
        height: 25
      },
      form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 36,
        marginBottom: 30,
        paddingHorizontal: 20
      },
      contadores: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#333333",
        marginBottom: 30
      },
  });