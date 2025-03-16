import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SvgXml } from 'react-native-svg'; 

type RootStackParamList = {
  WorkoutDetail: { id: string; title: string };
};

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  const username = 'Pedro'; // Nome do usuário (vem do estado de autenticação)

  const navigateToWorkout = (id: string, title: string) => {
    navigation.navigate('WorkoutDetail', { id, title });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header com estrutura reutilizável */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.greeting}>Hi, {username}</Text>
            <Text style={styles.motto}>Success starts with Discipline!</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            {/* Avatar */}
            <View style={styles.profileImage} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo Principal */}
      <ScrollView style={styles.content}>
        <View style={styles.statsContainer}>
          <TouchableOpacity style={styles.finishedWorkouts}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Finished Workouts</Text>
            <Text style={styles.viewAll}>view all progress</Text>
          </TouchableOpacity>

          <View style={styles.smallStatsContainer}>
            <TouchableOpacity style={styles.smallStat}>
              <Ionicons name="stats-chart" size={24} color="#FF8C00" />
              <Text style={styles.smallStatLabel}>View Charts</Text>
              <Text style={styles.smallStatSubLabel}>View your progress charts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.smallStat}>
              <Ionicons name="time" size={24} color="#FF8C00" />
              <Text style={styles.smallStatLabel}>Training time</Text>
              <Text style={styles.smallStatValue}>120 Minutes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Workout cards */}
        <Text style={styles.sectionTitle}>Your Active Workout</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.workoutScroll}>
          <TouchableOpacity 
            style={[styles.workoutCard, { backgroundColor: '#FF6B6B' }] }
            onPress={() => navigateToWorkout('1', 'Workout A')}
          >
            <Text style={styles.workoutTitle}>Workout A</Text>
            <Text style={styles.workoutSubtitle}>Upper body</Text>
            <Text style={styles.workoutDetails}>9 exercises</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.workoutCard, { backgroundColor: '#845EC2' }] }
            onPress={() => navigateToWorkout('2', 'Workout B')}
          >
            <Text style={styles.workoutTitle}>Workout B</Text>
            <Text style={styles.workoutSubtitle}>Lower body</Text>
            <Text style={styles.workoutDetails}>5 exercises</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Ranking Button */}
        <TouchableOpacity style={styles.rankingButton}>
          <View style={styles.rankingIcon}>
            <Ionicons name="trophy" size={24} color="#FF8C00" />
          </View>
          <View>
            <Text style={styles.rankingTitle}>Join the Ranking System</Text>
            <Text style={styles.rankingSubtitle}>Compete, level up, and track your progress!</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#FF8C00',
    paddingVertical: 25,   // Padding em cima e embaixo
    paddingHorizontal: 30, // Padding nas laterais
    height: 100,           // Altura do header
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%', // Isso garante que o conteúdo ocupe a altura total do header
  },
  greeting: {
    fontSize: 20,
    fontFamily: 'Inter-Bold', // Fonte Inter Bold
    color: '#fff',
  },
  motto: {
    fontSize: 12,
    fontFamily: 'Inter-Regular', // Fonte Inter Regular
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
    backgroundColor: '#ccc', // Cor cinza para o avatar
    borderRadius: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 20,
  },
  finishedWorkouts: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  viewAll: {
    fontSize: 12,
    color: '#FF8C00',
    marginTop: 5,
  },
  smallStatsContainer: {
    flex: 1,
    gap: 15,
  },
  smallStat: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  smallStatLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginTop: 5,
  },
  smallStatSubLabel: {
    fontSize: 12,
    color: '#666',
  },
  smallStatValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  workoutScroll: {
    marginBottom: 20,
  },
  workoutCard: {
    width: 230,
    height: 150,
    borderRadius: 15,
    padding: 20,
    marginRight: 15,
  },
  workoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  workoutSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  workoutDetails: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  rankingButton: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  rankingIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF5E6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rankingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  rankingSubtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
});

export default HomeScreen;
