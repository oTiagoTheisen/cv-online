
import { View, Text, StyleSheet } from "react-native";

type Props = {
  curso: string;
  instituicao: string;
  ano: string;
};

export default function FormacaoItem({ curso, instituicao, ano }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.curso}>{curso}</Text>
      <Text style={styles.instituicao}>{instituicao}</Text>
      <Text style={styles.ano}>{ano}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  curso: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  instituicao: { fontSize: 14, color: "#ccc" },
  ano: { fontSize: 12, color: "#aaa" },
});
