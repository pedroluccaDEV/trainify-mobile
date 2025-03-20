import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackgroundSvg from '../assets/background.svg';
import { globalStyles } from '../styles/global';

// Definição de tipos para navegação
type RootStackParamList = {
  WorkoutDetail: { id: string; title: string };
};

type Props = NativeStackScreenProps<RootStackParamList>;

const HomeScreen = ({ navigation }: Props) => {
  const username = 'Eduardo';

  const navigateToWorkout = (id: string, title: string) => {
    navigation.navigate('WorkoutDetail', { id, title });
  };

  return (
    <SafeAreaView style={globalStyles.bodyDefault}>
      <BackgroundSvg style={globalStyles.background} />
      <View style={globalStyles.contentWrapper}>
        <View style={globalStyles.headerDefault}>
          <View style={globalStyles.headerContent}>
            <View>
              <Text style={globalStyles.headerGreeting}>Hi, {username}</Text>
              <Text style={globalStyles.headerMotto}>Success starts with Discipline!</Text>
            </View>
            <TouchableOpacity style={globalStyles.profileButton}>
              <View style={globalStyles.profileImage} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={globalStyles.pageContent}>
          <View style={{ flexDirection: 'row', gap: 15, marginBottom: 20 }}>
            <TouchableOpacity
              style={{
                width: 1,
                flex: 1,
                backgroundColor: '#F9F9F9',
                padding: 15,
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 8,
                elevation: 3,
              }}
            >
              <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#000' }}>5</Text>
              <Text style={{ fontSize: 14, color: '#666' }}>Finished Workouts</Text>
              <Text style={{ fontSize: 12, color: '#FF8C00', marginTop: 5 }}>view all progress</Text>
            </TouchableOpacity>

            <View style={{ flex: 1, gap: 15 }}>
              <TouchableOpacity
                style={{
                  backgroundColor: '#F9F9F9',
                  padding: 15,
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Ionicons name="stats-chart" size={24} color="#FF8C00" />
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', marginTop: 5 }}>
                  View Charts
                </Text>
                <Text style={{ fontSize: 12, color: '#666' }}>View your progress charts</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#F9F9F9',
                  padding: 15,
                  borderRadius: 20,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 8,
                  elevation: 3,
                }}
              >
                <Ionicons name="time" size={24} color="#FF8C00" />
                <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', marginTop: 5 }}>
                  Training time
                </Text>
                <Text style={{ fontSize: 14, color: '#666', marginTop: 2 }}>120 Minutes</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 15 }}>Your Active Workout</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
            <TouchableOpacity
              style={{
                width: 230,
                height: 150,
                borderRadius: 15,
                padding: 20,
                marginRight: 15,
                backgroundColor: '#FE676E',
              }}
              onPress={() => navigateToWorkout('1', 'Workout A')}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Workout A</Text>
              <Text style={{ fontSize: 16, color: '#fff', opacity: 0.8 }}>Upper body</Text>
              <Text style={{ fontSize: 14, color: '#fff', opacity: 0.8, marginTop: 5 }}>9 exercises</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 230,
                height: 150,
                borderRadius: 15,
                padding: 20,
                marginRight: 15,
                backgroundColor: '#845EC2',
              }}
              onPress={() => navigateToWorkout('2', 'Workout B')}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>Workout B</Text>
              <Text style={{ fontSize: 16, color: '#fff', opacity: 0.8 }}>Lower body</Text>
              <Text style={{ fontSize: 14, color: '#fff', opacity: 0.8, marginTop: 5 }}>5 exercises</Text>
            </TouchableOpacity>
          </ScrollView>

          <TouchableOpacity
            style={{
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
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: '#FFF5E6',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}
            >
              <Ionicons name="trophy" size={24} color="#FF8C00" />
            </View>
            <View>
              <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>Join the Ranking System</Text>
              <Text style={{ fontSize: 12, color: '#666', marginTop: 2 }}>
                Compete, level up, and track your progress!
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
