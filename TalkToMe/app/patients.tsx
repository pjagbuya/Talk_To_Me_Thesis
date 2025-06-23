import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function Patients() {
  const router = useRouter();

  const tableData = [
    { name: 'Shortest Remaining Time First', email: 'srtf@csopesy.com', phone: '09999999999', expiry: '2025-07-01' },
    { name: 'Round Robin', email: 'rr@csopesy.com', phone: '09999999999', expiry: '2025-08-15' },
    { name: 'Shortest Job First', email: 'sjf@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'First Come First Serve', email: 'fcfs@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'Priority Scheduling', email: 'ps@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'Multilevel Queue', email: 'mlq@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'Multilevel Feedback Queue', email: 'mlfq@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'Earliest Deadline First', email: 'edf@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
    { name: 'Multithread Scheduling', email: 'mts@csopesy.com', phone: '09999999999', expiry: '2025-09-30' },
  ];

  const handleEmail = (email: string) => {
    Linking.openURL(`mailto:${email}`);
  };

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.formBox}>
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.header}>Patients</Text>

            <TouchableOpacity style={styles.hiddenButton} >
                <Text style={styles.hiddenText}>Hidden</Text>
            </TouchableOpacity>
        </View>

          {/* Table Header */}
          <View style={styles.tableRowHeader}>
            <Text style={styles.tableHeaderCell}>Name</Text>
            <Text style={styles.tableHeaderCell}>Contact</Text>
            <Text style={styles.tableHeaderCell}>Clear</Text>
            <Text style={styles.tableHeaderCell}>View</Text>
            <Text style={styles.tableHeaderCell}>Video Expiry</Text>
          </View>

          {/* Scrollable Rows */}
          <ScrollView style={{ maxHeight: 300 }}>
            {tableData.map((row, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCell}>{row.name}</Text>
                <View style={styles.contactCell}>
                  <TouchableOpacity onPress={() => handleEmail(row.email)}>
                    <MaterialIcons name="email" size={20} color="#0080F0" style={styles.icon} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleCall(row.phone)}>
                    <Feather name="phone-call" size={20} color="#008000" style={styles.icon} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.smallButton} onPress={() => console.log('Clear', row.name)}>
                  <Text style={styles.smallButtonText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallButton} onPress={() => router.push('/review')}>
                  <Text style={styles.smallButtonText}>View</Text>
                </TouchableOpacity>
                <Text style={styles.tableCell}>{row.expiry}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 30,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 500,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Righteous',
  },
  tableRowHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 4,
    marginBottom: 6,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    fontSize: 13,
    textAlign: 'center',
  },
  contactCell: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  icon: {
    marginHorizontal: 4,
  },
  smallButton: {
    backgroundColor: '#008000',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 2,
    alignItems: 'center',
    flex: 1,
  },
  smallButtonText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Righteous',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  backButton: {
    backgroundColor: '#A2B20F',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Righteous',
  },
  hiddenButton: {
    backgroundColor: 'rgba(255, 255, 255, 0)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  hiddenText: {
    color: 'rgba(255, 255, 255, 0)',
    fontSize: 16,
    fontFamily: 'Righteous',
  },
});

const backgroundImage = require('../assets/images/background.png');
