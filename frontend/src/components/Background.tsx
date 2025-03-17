import React from 'react';
import { View, StyleSheet } from 'react-native';
import SvgBackground from "../componentss"

const Background = () => {
  return (
    <View style={styles.container}>
      <SvgBackground width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Para garantir que o background fique atrás dos elementos
  },
});

export default Background;
