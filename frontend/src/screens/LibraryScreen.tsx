import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

interface WorkoutPlan {
  id: string;
  title: string;
  workouts: number;
  volume: string;
  progress: string;
  color: string;
}

const WORKOUT_PLANS: WorkoutPlan[] = [
  {
    id: '1',
    title: 'Upper / Lower',
    workouts: 4,
    volume: 'Low Volume',
    progress: '3/4',
    color: '#FF6B6B',
  },
  {
    id: '2',
    title: 'ABC',
    workouts: 6,
    volume: 'Low Volume',
    progress: '3/4',
    color: '#FF9F68',
  },
  {
    id: '3',
    title: 'Full Body',
    workouts: 4,
    volume: 'Low Volume',
    progress: '3/4',
    color: '#4CAF50',
  },
  {
    id: '4',
    title: 'ABC + Upper/Lower',
    workouts: 5,
    volume: 'Low Volume',
    progress: '3/4',
    color: '#845EC2',
  },
];

const LibraryScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlans = WORKOUT_PLANS.filter(plan =>
    plan.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search workouts..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Workout Plan Library</Text>
        {filteredPlans.map(plan => (
          <TouchableOpacity key={plan.id} style={styles.workoutCard}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{plan.title}</Text>
              <View style={[styles.colorIndicator, { backgroundColor: plan.color }]} />
            </View>
            <View style={styles.cardContent}>
              <View style={styles.cardInfo}>
                <Text style={styles.infoText}>{plan.workouts} workouts</Text>
                <Text style={styles.infoText}>{plan.volume}</Text>
              </View>
              <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                  <View 
                    style={[
                      styles.progressFill,
                      { width: '75%', backgroundColor: plan.color }
                    ]} 
                  />
                </View>
                <Text style={styles.progressText}>{plan.progress}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
    paddingBottom: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  searchContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  workoutCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  cardContent: {
    gap: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: '#666',
    fontSize: 14,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressBar: {
    flex: 1,
    height: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
  },
  progressText: {
    fontSize: 12,
    color: '#666',
  },
});

export default LibraryScreen;
