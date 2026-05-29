import { useState } from "react";
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BANCO_PALAVRAS = [
  "REACT", "JAVA", "PYTHON", "MOBILE", "EXPO", 
  "TYPESCRIPT", "NODE", "GITHUB", "COMPUTACAO", 
  "ALGORITMO", "BANCO", "CODIGO", "COMPILADOR",
  "VARIAVEL", "FUNCAO", "INTERFACE", "SOFTWARE"
];

const obterPalavraAleatoria = () => {
  const indice = Math.floor(Math.random() * BANCO_PALAVRAS.length);
  return BANCO_PALAVRAS[indice];
};

export default function JogoForca() {
  const [palavraSecreta, setPalavraSecreta] = useState(obterPalavraAleatoria);
  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);
  const limiteErros = 6;

  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const estagiosForca = [
    `
       +---+
       |   |
           |
           |
           |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
           |
           |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
       |   |
           |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
      /|   |
           |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
      /|\\  |
           |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
      /|\\  |
      /    |
           |
     =========
    `,
    `
       +---+
       |   |
       O   |
      /|\\  |
      / \\  |
           |
     =========
    `
  ];

  const ganhouJogo = palavraSecreta.split("").every(l => letrasAcertadas.includes(l));
  const perdeuJogo = erros >= limiteErros;
  const jogoTerminou = ganhouJogo || perdeuJogo;

  const finalizarPartida = (mensagem: string) => {
    if (Platform.OS === 'web') {
      alert(mensagem);
      reiniciar();
    } else {
      Alert.alert(
        mensagem.includes("🎉") ? "Parabéns! 🎉" : "Fim de Jogo 😢",
        mensagem,
        [{ text: "Jogar Novamente", onPress: reiniciar }]
      );
    }
  };

  const verificarLetra = (letra: string) => {
    if (letrasAcertadas.includes(letra) || jogoTerminou) return;

    if (palavraSecreta.includes(letra)) {
      const novasLetras = [...letrasAcertadas, letra];
      setLetrasAcertadas(novasLetras);

      const verificarGanhou = palavraSecreta.split("").every(l => novasLetras.includes(l));
      if (verificarGanhou) {
        setTimeout(() => finalizarPartida("Você venceu o Jogo da Forca! 🎉"), 100);
      }
    } else {
      const novosErros = erros + 1;
      setErros(novosErros);
      if (novosErros >= limiteErros) {
        setTimeout(() => finalizarPartida(`A palavra secreta era: ${palavraSecreta} 😢`), 100);
      }
    }
  };

  const reiniciar = () => {
    setPalavraSecreta(obterPalavraAleatoria());
    setLetrasAcertadas([]);
    setErros(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      
      <View style={styles.forcaContainer}>
        <Text style={styles.forcaTexto}>
          {estagiosForca[erros]}
        </Text>
      </View>

      <Text style={styles.tentativas}>Restam {limiteErros - erros} tentativas</Text>

      <View style={styles.palavraContainer}>
        {palavraSecreta.split("").map((letra, index) => (
          <Text key={index} style={styles.letraOculta}>
            {letrasAcertadas.includes(letra) ? letra : "_"}
          </Text>
        ))}
      </View>

      <View style={styles.teclado}>
        {alfabeto.map(letra => {
          const selecionada = letrasAcertadas.includes(letra);
          const desativarBotao = selecionada || jogoTerminou;
          return (
            <TouchableOpacity 
              key={letra} 
              style={[styles.tecla, desativarBotao && styles.teclaDesativada]} 
              onPress={() => verificarLetra(letra)}
              disabled={desativarBotao}
            >
              <Text style={styles.textoTecla}>{letra}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity style={styles.btnReset} onPress={reiniciar}>
        <Text style={styles.btnResetText}>Reiniciar Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc", padding: 16, alignItems: "center", centerContent: true, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "bold", color: "#0f172a", marginBottom: 10, textTransform: "uppercase", letterSpacing: 1 },
  forcaContainer: { backgroundColor: "#ffffff", padding: 10, borderRadius: 16, borderWidth: 1, borderColor: "#e2e8f0", width: 200, alignItems: "center", marginBottom: 15, elevation: 1 },
  forcaTexto: { fontFamily: "monospace", fontSize: 16, lineHeight: 20, color: "#334155" },
  tentativas: { fontSize: 13, color: "#dc2626", fontWeight: "bold", marginBottom: 20, textTransform: "uppercase", letterSpacing: 1 },
  palavraContainer: { flexDirection: "row", gap: 12, marginBottom: 30 },
  letraOculta: { fontSize: 28, fontWeight: "bold", color: "#0f172a", borderBottomWidth: 3, borderBottomColor: "#db2777", minWidth: 26, textAlign: "center" },
  teclado: { flexDirection: "row", flexWrap: "wrap", gap: 6, justifyContent: "center", maxWidth: 320 },
  tecla: { width: 38, height: 38, backgroundColor: "#db2777", borderRadius: 8, alignItems: "center", justifyContent: "center" },
  teclaDesativada: { backgroundColor: "#cbd5e1" },
  textoTecla: { color: "#ffffff", fontWeight: "bold", fontSize: 14 },
  btnReset: { marginTop: 25, backgroundColor: "#0f172a", paddingVertical: 12, paddingHorizontal: 24, borderRadius: 12 },
  btnResetText: { color: "#ffffff", fontWeight: "bold", textTransform: "uppercase", fontSize: 11, letterSpacing: 1 }
});