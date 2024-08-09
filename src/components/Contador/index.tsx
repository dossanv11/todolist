import { Text, View } from "react-native";

import { styles } from "./style";

type Props = {
    legenda: string;
    contador: number;
    textColor: string;
}

export default function Contador({ legenda, contador, textColor }: Props) {
    return(
        <View style={styles.container}>
            <Text style={[styles.text, {color: textColor}]}>{legenda}</Text>
            <View style={styles.badge}>
                <Text style={styles.textBadge}>{contador}</Text>
            </View>
        </View>
    )
}