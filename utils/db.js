import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

export const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS activities (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, calories INTEGER, date TEXT)'
      );
    });
  };

export const insertActivity = (name, calories, date) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO activities (name, calories, date) VALUES (?, ?, ?)',
      [name, calories, date],
      (_, result) => console.log('Activity logged successfully!'),
      (_, error) => console.log(error)
    );
  });
};

export const fetchActivities = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM activities',
      [],
      (_, { rows }) => callback(rows._array),
      (error) => console.log('Error fetching activities: ', error)
    );
  });
};