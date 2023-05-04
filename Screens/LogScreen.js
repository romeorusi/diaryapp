import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogActivity from '../components/LogActivity';

const LogScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Log Activity</Text>
      <LogActivity />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default LogScreen;