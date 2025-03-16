// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabs from './src/navigation/BottomTabs'; // Importando o BottomTabs

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs /> {/* Exibe a navegação de abas */}
    </NavigationContainer>
  );
}
