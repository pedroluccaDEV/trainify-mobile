import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import BackgroundSvg from '../assets/background.svg'; // Importando o SVG

const CreateScreen = () => {
  const username = 'Pedro';

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundSvg style={styles.background} />
      <View style={styles.textContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View>
              <Text style={styles.greeting}>Hi, {username}</Text>
              <Text style={styles.motto}>Success starts with Discipline!</Text>
            </View>
            <TouchableOpacity style={styles.profileButton}>
              <View style={styles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.aiCard}>
          <Text style={styles.aiTitle}>Personalized Training with AI</Text>
          <Text style={styles.aiDescription}>
            Our AI creates customized workout plans based on the latest sports science. 
            Tailored to your goals, it's smart, effective, and fully adjustable—so you 
            can modify it your way. Achieve your best with precision and flexibility!
          </Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity style={[styles.button, styles.createButton]}>
            <Ionicons name="add-circle" size={24} color="#fff" />
            <Text style={styles.buttonText}>Create Workout</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.modifyButton]}>
            <Ionicons name="pencil" size={24} color="#fff" />
            <Text style={styles.buttonText}>Modify Workout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
  },
  header: {
    paddingVertical: 25,
    paddingHorizontal: 30,
    height: 100,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  greeting: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: '#fff',
  },
  motto: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    opacity: 0.8,
  },
  profileButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 24,
  },
  aiCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 20,
    padding: 25,
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 50,
  },
  aiTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },
  aiDescription: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
  },
  content: {
    flex: 1,
    padding: 30,
    gap: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'linear-gradient(0deg, rgba(240,240,240,1) 0%, rgba(221,221,221,1) 100%)', },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    gap: 10,
  },
  createButton: {
    backgroundColor: '#64946E',
  },
  modifyButton: {
    backgroundColor: '#FE676E',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateScreen;