import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CreateScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hi, Pedro</Text>
            <Text style={styles.motto}>Success starts with Discipline!</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Ionicons name="person-circle" size={40} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.aiCard}>
          <Text style={styles.aiTitle}>Personalized Training with AI</Text>
          <Text style={styles.aiDescription}>
            Our AI creates customized workout plans based on the latest sports science. 
            Tailored to your goals, it's smart, effective, and fully adjustable—so you 
            can modify it your way. Achieve your best with precision and flexibility!
          </Text>
        </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF8C00',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  motto: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
  },
  aiTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  aiDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    gap: 10,
  },
  createButton: {
    backgroundColor: '#4CAF50',
  },
  modifyButton: {
    backgroundColor: '#FF6B6B',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateScreen;
