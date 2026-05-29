import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#db2777",
        tabBarInactiveTintColor: "#64748b",
        tabBarStyle: { backgroundColor: "#ffffff", paddingBottom: 5, height: 60 },
        headerStyle: { backgroundColor: "#f8fafc" },
        headerTitleStyle: { fontWeight: "bold", color: "#0f172a" },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{ title: "Home", tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={22} color={color} /> }} 
      />
      <Tabs.Screen 
        name="sobre" 
        options={{ title: "Sobre", tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={22} color={color} /> }} 
      />
      <Tabs.Screen 
        name="academica" 
        options={{ title: "Trajetória", tabBarIcon: ({ color }) => <Ionicons name="briefcase-outline" size={22} color={color} /> }} 
      />
      <Tabs.Screen 
        name="projetos" 
        options={{ title: "Projetos", tabBarIcon: ({ color }) => <Ionicons name="code-slash-outline" size={22} color={color} /> }} 
      />
      <Tabs.Screen 
        name="jogo" 
        options={{ title: "Jogo", tabBarIcon: ({ color }) => <Ionicons name="game-controller-outline" size={22} color={color} /> }} 
      />
    </Tabs>
  );
}