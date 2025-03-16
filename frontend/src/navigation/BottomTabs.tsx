import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import CreateScreen from '../screens/CreateScreen';
import LibraryScreen from '../screens/LibraryScreen';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Create') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'book' : 'book-outline';
          } else {
            iconName = 'help-circle';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF8C00', // Cor para quando a aba está ativa
        tabBarInactiveTintColor: 'gray', // Cor para quando a aba está inativa
        headerShown: false, // Esconde o cabeçalho
        tabBarStyle: {
          paddingBottom: 5, // Espaço abaixo da barra
          height: 60, // Altura da barra
        },
        tabBarLabelStyle: {
          fontSize: 12, // Tamanho da fonte do label
          paddingBottom: 5, // Distância do texto da parte inferior da aba
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Create" component={CreateScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  );
}
