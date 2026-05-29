import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Projetos() {
  const meusProjetos = [
    { 
      nome: "AWARDLY", 
      stack: "Next.js / React / CSS", 
      desc: "Plataforma focada no acompanhamento e interações das temporadas de premiações de cinema.",
      url: "https://github.com/bnnto/Awardly" 
    },
    { 
      nome: "MOM Ateliê", 
      stack: "E-commerce / UI-UX", 
      desc: "Plataforma completa de catálogo e carrinho de compras otimizada para um ateliê de peças artesanais",
      url: "https://github.com/ManuSilva12/MOM_atelie" 
    },
    { 
      nome: "Projetos Web e Mobile", 
      stack: "Next/Js", 
      desc: "Projetos de web e mobile usando Next/js",
      url: "https://github.com/ManuSilva12/Programa-o-Web-e-Mobile" 
    },
    { 
      nome: "Árvore AVL em Java", 
      stack: "Estrutura de Dados", 
      desc: "Implementação completa de árvore binária de busca auto-balanceada com análise de performance linear.",
      url: "https://github.com/c3-disciplina-aod/2025-2-minf-0402-implementacao-avl-ManuSilva12" 
    }
  ];

  const abrirLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Não foi possível abrir o link:", err));
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 24 }}>
      <Text style={styles.header}>Portfólio de Software</Text>
      <Text style={styles.instruction}>Toque em um projeto para abrir o repositório</Text>
      
      {meusProjetos.map((p, i) => (
        <TouchableOpacity 
          key={i} 
          style={styles.projectCard} 
          onPress={() => abrirLink(p.url)}
          activeOpacity={0.7}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.projectName}>{p.nome}</Text>
            <Text style={styles.projectStack}>{p.stack}</Text>
          </View>
          <Text style={styles.projectDesc}>{p.desc}</Text>
          <Text style={styles.linkIndicator}>Ver código fonte →</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  header: { fontSize: 11, textTransform: "uppercase", letterSpacing: 3, fontWeight: "900", color: "#db2777", marginBottom: 4, marginTop: 4 },
  instruction: { fontSize: 12, color: "#94a3b8", marginBottom: 20 },
  projectCard: { backgroundColor: "#ffffff", padding: 20, borderRadius: 20, marginBottom: 16, borderWidth: 1, borderColor: "#f1f5f9", elevation: 1 },
  cardHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
  projectName: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  projectStack: { fontSize: 10, fontWeight: "bold", color: "#db2777", backgroundColor: "#fdf2f8", paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, textTransform: "uppercase" },
  projectDesc: { fontSize: 13, color: "#64748b", lineHeight: 18, marginBottom: 12 },
  linkIndicator: { fontSize: 12, fontWeight: "bold", color: "#db2777", alignSelf: "flex-end" }
});