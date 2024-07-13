// app/components/Profile.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const Profile = () => {
  return (
    <View style={styles.profileContainer}>
      <Avatar
        size="medium"
        rounded
        source={require('@/assets/images/profile.png')}
      />
      <View style={styles.profileTextContainer}>
        <Text style={styles.profileName}>Hello Ramesh</Text>
        <Text style={styles.profileDescription}>Your available balance</Text>
      </View>
      <Icon name="bell" type="font-awesome" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default Profile;
