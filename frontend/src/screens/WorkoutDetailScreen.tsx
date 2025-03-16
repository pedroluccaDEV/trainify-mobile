import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: string;
  weight: number;
  restTime: number;
  completed: boolean;
};

const SAMPLE_EXERCISES: Exercise[] = [
  {
    id: '1',
    name: 'Barbell Bench Press',
    sets: 4,
    reps: '8-10',
    weight: 135,
    restTime: 90,
    completed: false,
  },
  {
    id: '2',
    name: 'Incline Dumbbell Press',
    sets: 3,
    reps: '10-12',
    weight: 50,
    restTime: 60,
    completed: false,
  },
  {
    id: '3',
    name: 'Cable Flyes',
    sets: 3,
    reps: '12-15',
    weight: 30,
    restTime: 60,
    completed: false,
  },
];

type RootStackParamList = {
  WorkoutDetail: { id: string; title: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetail'>;

const WorkoutDetailScreen = ({ navigation, route }: Props) => {
  const [exercises, setExercises] = useState<Exercise[]>(SAMPLE_EXERCISES);
  const [timer, setTimer] = useState<number | null>(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const toggleExerciseCompletion = (id: string) => {
    setExercises(exercises.map(ex => 
      ex.id === id ? { ...ex, completed: !ex.completed } : ex
    ));
  };

  const startRestTimer = (seconds: number) => {
    if (isTimerRunning) {
      setIsTimerRunning(false);
      setTimer(null);
      return;
    }

    setTimer(seconds);
    setIsTimerRunning(true);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval);
          setIsTimerRunning(false);
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{route.params.title}</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {exercises.map((exercise, index) => (
          <View key={exercise.id} style={styles.exerciseCard}>
            <TouchableOpacity 
              style={styles.exerciseHeader}
              onPress={() => toggleExerciseCompletion(exercise.id)}
            >
              <View style={styles.exerciseInfo}>
                <Text style={styles.exerciseNumber}>#{index + 1}</Text>
                <View>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseDetails}>
                    {exercise.sets} sets • {exercise.reps} reps • {exercise.weight}lb
                  </Text>
                </View>
              </View>
              <Ionicons 
                name={exercise.completed ? "checkmark-circle" : "checkmark-circle-outline"} 
                size={24} 
                color={exercise.completed ? "#4CAF50" : "#666"}
              />
            </TouchableOpacity>

            <View style={styles.setsList}>
              {Array.from({ length: exercise.sets }).map((_, setIndex) => (
                <View key={setIndex} style={styles.setRow}>
                  <Text style={styles.setNumber}>Set {setIndex + 1}</Text>
                  <View style={styles.setInputs}>
                    <Text style={styles.setDetail}>{exercise.reps} reps</Text>
                    <Text style={styles.setDetail}>{exercise.weight}lb</Text>
                  </View>
                  <TouchableOpacity 
                    style={[
                      styles.restButton,
                      isTimerRunning && timer !== null && styles.restButtonActive
                    ]}
                    onPress={() => startRestTimer(exercise.restTime)}
                  >
                    <Text style={styles.restButtonText}>
                      {isTimerRunning && timer !== null 
                        ? formatTime(timer)
                        : `Rest ${exercise.restTime}s`
                      }
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.finishButton}>
          <Text style={styles.finishButtonText}>Finish Workout</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  exerciseCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  exerciseInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  exerciseNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF8C00',
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '600',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  setsList: {
    padding: 15,
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  setNumber: {
    width: 60,
    fontSize: 14,
    color: '#666',
  },
  setInputs: {
    flexDirection: 'row',
    gap: 20,
  },
  setDetail: {
    fontSize: 14,
    color: '#333',
  },
  restButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  restButtonActive: {
    backgroundColor: '#FF8C00',
  },
  restButtonText: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  finishButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default WorkoutDetailScreen;
