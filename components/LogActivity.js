import React, { useState } from 'react';
import { Text, TextInput, View, Button, StyleSheet } from 'react-native';
import { insertActivity } from '../utils/db';
import { Calendar } from 'react-native-calendars';

const LogActivity = () => {
  const [activity, setActivity] = useState('');
  const [calories, setCalories] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

  const handleLogActivity = () => {
    if (!activity || !calories) {
      alert('Please enter an activity and calories');
      return;
    }
  
    insertActivity(activity, calories, selectedDate);
    setActivity('');
    setCalories('');
    setSelectedDate(new Date().toISOString().slice(0, 10));
    alert('Activity logged successfully!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Activity:</Text>
        <TextInput style={styles.input} value={activity} onChangeText={setActivity} />
      </View>

      <View style={styles.inputContainer}>
        <Text>Calories:</Text>
        <TextInput style={styles.input} value={calories} onChangeText={setCalories} />
      </View>

      <Calendar onDayPress={(day) => setSelectedDate(day.dateString)} />

      <Button title="Log Activity" onPress={handleLogActivity} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default LogActivity;