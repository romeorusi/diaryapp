import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { fetchActivities } from '../utils/db';

const Diary = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities(setActivities);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diary</Text>

      {activities.map((activity) => (
        <View style={styles.log} key={activity.id}>
          <Text style={styles.date}>{formatDate(activity.date)}</Text>
          <Text style={styles.name}>{activity.name}</Text>
          <Text style={styles.calories}>{activity.calories} calories</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  log: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  date: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  calories: {
    fontSize: 14,
  },
});

export default Diary;