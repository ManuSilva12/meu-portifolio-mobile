import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.title}>Sobre Mim</Text>
      <Text style={styles.bio}>
        Sou estudante de Ciência da Computação focada em construir soluções que unem lógica robusta e design intuitivo. Acredito no poder da tecnologia para transformar realidades através de projetos de impacto.
      </Text>

      <Text style={styles.sectionTitle}>Minha Filosofia de Dev</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardTech}>/ Engenharia com Propósito</Text>
        <Text style={styles.cardDesc}>Mais do que escrever linhas de código limpas, busco entender o impacto real do software na vida das pessoas que vão utilizá-lo.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTech}>/ Aprendizado Contínuo</Text>
        <Text style={styles.cardDesc}>A computação se transforma todos os dias. Minha maior habilidade é a capacidade de aprender novas tecnologias e conceitos rapidamente.</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTech}>/ Foco em Soluções</Text>
        <Text style={styles.cardDesc}>Adoro enfrentar problemas complexos de lógica, algoritmos e estruturas de dados, transformando desafios em sistemas eficientes.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  title: { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: "900", color: "#db2777", marginBottom: 12 },
  bio: { fontSize: 15, color: "#475569", lineHeight: 22, marginBottom: 32 },
  sectionTitle: { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: "900", color: "#db2777", marginBottom: 16 },
  card: { backgroundColor: "#ffffff", padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: "#f1f5f9" },
  cardTech: { fontSize: 14, fontWeight: "bold", color: "#0f172a", marginBottom: 4 },
  cardDesc: { fontSize: 13, color: "#64748b", lineHeight: 18 }
});