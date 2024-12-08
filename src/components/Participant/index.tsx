import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant(props: Props) { //desestruturado ({name}) --passa diretamente a propriedade
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <TouchableOpacity style={styles.button} onPress={props.onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
