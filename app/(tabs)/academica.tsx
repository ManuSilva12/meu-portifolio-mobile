import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Academica() {
  const academicas = [
    { nome: "Bacharelado em Ciência da Computação", sub: "5º Período — Ênfase em Engenharia de Software" },
    { nome: "Projeto de Extensão ColaBora", sub: "Oficinas de tecnologia e inclusão digital para escolas públicas" },
    { nome: "Programa Padawan", sub: "Mentoria e apoio acadêmico para ingressantes no curso" }
  ];

  const profissionais = [
    { cargo: "Mentoria Avanade", empresa: "Práticas de Mercado e Arquitetura de Sistemas Cloud" },
    { cargo: "Mentoria SWITAB", empresa: "Desenvolvimento STEAM e Networking em Computação" },
    { cargo: "Technovation for Girls", empresa: "Orientação no desenvolvimento de soluções mobile com impacto social" }
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.header}>Formação Acadêmica</Text>
      {academicas.map((a, i) => (
        <View key={i} style={styles.card}>
          <Text style={styles.title}>{a.nome}</Text>
          <Text style={styles.subtitle}>{a.sub}</Text>
        </View>
      ))}

      <Text style={[styles.header, { marginTop: 20 }]}>Experiência Profissional & Mentorias</Text>
      {profissionais.map((p, i) => (
        <View key={i} style={[styles.card, styles.borderLeftPink]}>
          <Text style={styles.title}>{p.cargo}</Text>
          <Text style={styles.subtitle}>{p.empresa}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: "900", color: "#db2777", marginBottom: 16 },
  card: { backgroundColor: "#ffffff", padding: 16, borderRadius: 16, marginBottom: 12, borderWidth: 1, borderColor: "#f1f5f9" },
  borderLeftPink: { borderLeftWidth: 3, borderLeftColor: "#db2777", paddingLeft: 13 },
  title: { fontSize: 14, fontWeight: "bold", color: "#0f172a", marginBottom: 4 },
  subtitle: { fontSize: 12, color: "#64748b", lineHeight: 16 }
});