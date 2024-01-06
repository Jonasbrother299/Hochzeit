
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHeart, faUserFriends, faBell, faBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Username</Text>
      </View>
      <View style={styles.statsSection}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>2</Text>
          <Text style={styles.statLabel}>Events Created</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Events Attending</Text>
        </View>
      </View>
      <View style={styles.menuSection}>
        <MenuItem icon={faHeart} label="Favourite" />
        <MenuItem icon={faUserFriends} label="Friendlist" />
        <MenuItem icon={faBell} label="Notifications" />
        <MenuItem icon={faBook} label="My Recipes" />
        <MenuItem icon={faSignOutAlt} label="Logout" />
      </View>
    </View>
  );
}

const MenuItem = ({ icon, label }) => (
  <View style={styles.menuItem}>
    <FontAwesomeIcon icon={icon} size={24} style={styles.menuIcon} />
    <Text style={styles.menuLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#gradientBackground', // Replace with actual gradient background
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
  },
  menuSection: {
    padding: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  menuIcon: {
    marginRight: 16,
  },
  menuLabel: {
    fontSize: 18,
  },
});

