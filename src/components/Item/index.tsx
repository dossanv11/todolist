import React, {useState} from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { CheckBox, Icon } from "@rneui/themed";


type Props = {
    text: string;
    onRemove: () => void;
    handleCheck: (isChecked: boolean) => void;
}

export default function Item({ text, onRemove, handleCheck }: Props) {
    const [ checked, setCheck ] = useState(false);

    function handleIsChecked() {
        if (checked) {
            setCheck(false);
            handleCheck(false);
            return;
        }
        setCheck(true);
        handleCheck(true);
    }

    return(
        <View style={styles.container}>
            <CheckBox
                containerStyle={{backgroundColor: "transparent"}}
                center
                checkedIcon={
                    <Icon
                        name="check-circle"
                        type="material"
                        color="#5E60CE"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                uncheckedIcon={
                    <Icon
                        name="radio-button-unchecked"
                        type="material"
                        color="#4EA8DE"
                        size={25}
                        iconStyle={{ marginRight: 10 }}
                    />
                }
                checked={checked}
                onPress={() => handleIsChecked()}
            />
            <View style={styles.espacoTexto}>
                <Text style={checked ? styles.textChecked : styles.text}>
                    {text}
                </Text>
            </View>
            <TouchableOpacity style={styles.botaoDeletar} onPress={onRemove} >
                <Image source={require("../../assets/trash.png")} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}