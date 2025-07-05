
import { View, Text, StyleSheet } from "react-native";

type Props = {
  cargo: string;
  empresa: string;
  periodo: string;
  descricao: string;
};

export default function ExperienciaItem({ cargo, empresa, periodo, descricao }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 16 },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  empresa: { fontSize: 14, color: "#ccc" },
  periodo: { fontSize: 12, color: "#aaa" },
  descricao: { fontSize: 14, color: "#ddd", marginTop: 4 },
});
