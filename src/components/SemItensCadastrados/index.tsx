import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export default function SemItensCadastrados() {
    return(
        <View style={styles.container}>
            <Image source={require("../../assets/clipboard.png")} style={styles.imagem} />
            <Text style={[styles.text, {fontWeight: "bold"}]}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={[styles.text]}>Crie tarefas e organize seus itenns a fazer</Text>
        </View>
    )
}