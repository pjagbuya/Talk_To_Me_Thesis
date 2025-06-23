import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Review() {
  const router = useRouter();

  const videoData = [
    { id: 1, title: 'Level 1 | 12-01-2025', thumbnail: require('../assets/images/sample.png') },
    { id: 2, title: 'Level 2 | 12-01-2025', thumbnail: require('../assets/images/sample.png') },
    { id: 3, title: 'Level 3 | 12-02-2025', thumbnail: require('../assets/images/sample.png') },
    { id: 4, title: 'Level 4 | 12-02-2025', thumbnail: require('../assets/images/sample.png') },
    { id: 5, title: 'Level 5 | 12-02-2025', thumbnail: require('../assets/images/sample.png') },
    { id: 6, title: 'Level 5 | 12-03-2025', thumbnail: require('../assets/images/sample.png') },
  ];

  const handleView = (id: number) => {
    console.log('Viewing video', id);
  };

  const handleDelete = (id: number) => {
    console.log('Deleting video', id);
  };

  const handleClearAll = () => {
    console.log('Clear all videos');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
      <View style={styles.container}>
        <View style={styles.formBox}>
          {/* Header Controls */}
          <View style={styles.topBar}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <Text style={styles.backText}>Back</Text>
            </TouchableOpacity>

            <Text style={styles.header}>Review Videos</Text>

            <TouchableOpacity style={styles.clearButton} onPress={handleClearAll}>
              <Text style={styles.clearText}>Clear Videos</Text>
            </TouchableOpacity>
          </View>

          {/* Scrollable Video Cards */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.videoScroll}>
            {videoData.map((video) => (
              <View key={video.id} style={styles.card}>
                <Image source={video.thumbnail} style={styles.thumbnail} />
                <Text style={styles.videoTitle}>{video.title}</Text>
                <View style={styles.cardButtonRow}>
                  <TouchableOpacity style={styles.cardButton} onPress={() => handleView(video.id)}>
                    <Text style={styles.cardButtonText}>View</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.cardButton} onPress={() => handleDelete(video.id)}>
                    <Text style={styles.cardButtonText}>Delete</Text>
                  </TouchableOpacity>
                </View>
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
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    maxWidth: 800,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
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
  clearButton: {
    backgroundColor: '#F25757',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  clearText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Righteous',
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    fontFamily: 'Righteous',
    color: '#000',
    lineHeight: 30,
  },
  videoScroll: {
    paddingVertical: 10,
  },
  card: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    paddingBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  videoTitle: {
    fontSize: 14,
    fontFamily: 'Righteous',
    padding: 10,
    textAlign: 'center',
  },
  cardButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardButton: {
    backgroundColor: '#123423',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  cardButtonText: {
    color: '#fff',
    fontFamily: 'Righteous',
    fontSize: 12,
  },
});

const backgroundImage = require('../assets/images/background.png');
