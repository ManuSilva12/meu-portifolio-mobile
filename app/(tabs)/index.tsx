import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const linguagens = ["Java", "Python", "SQL", "C", "React", "Next.js", "Git"];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Image 
          source={require("../../assets/images/IMG_9995.jpeg")} 
          style={styles.avatar} 
        />
        <Text style={styles.name}>Manuela <Text style={styles.surname}>Silva</Text></Text>
        <Text style={styles.subtitle}>Bacharelado Ciência da Computação</Text>
        <Text style={styles.period}>5º Período</Text>
      </View>

      <Text style={styles.sectionTitle}>Minhas Techs</Text>
      <View style={styles.chipContainer}>
        {linguagens.map(item => (
          <View key={item} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  content: { padding: 24, alignItems: "center" },
  headerCard: { alignItems: "center", backgroundColor: "#ffffff", padding: 24, borderRadius: 24, width: "100%", elevation: 2 },
  avatar: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: "#ffffff", marginBottom: 16, backgroundColor: "#cbd5e1" },
  name: { fontSize: 28, fontWeight: "300", color: "#0f172a" },
  surname: { fontWeight: "bold", color: "#db2777" },
  subtitle: { fontSize: 12, textTransform: "uppercase", letterSpacing: 2, color: "#94a3b8", fontWeight: "700", marginTop: 8, textAlign: "center" },
  period: { fontSize: 11, color: "#64748b", marginTop: 2 },
  sectionTitle: { alignSelf: "flex-start", fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: "900", color: "#db2777", marginTop: 32, marginBottom: 12 },
  chipContainer: { flexDirection: "row", flexWrap: "wrap", gap: 8, width: "100%" },
  chip: { backgroundColor: "#ffffff", borderWidth: 1, borderColor: "#f1f5f9", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 99, elevation: 1 },
  chipText: { fontSize: 10, fontWeight: "900", color: "#64748b", textTransform: "uppercase" }
});