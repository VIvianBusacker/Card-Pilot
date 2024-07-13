import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TextInput } from 'react-native';
import { Card, Icon, Avatar, Button } from 'react-native-elements';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Avatar
          size="medium"
          rounded
          source={{
            uri: 'https://via.placeholder.com/150', // Replace with your profile image URL
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Hello Ramesh</Text>
          <Text style={styles.headerSubtitle}>Your available balance</Text>
        </View>
        <Icon name="bell" type="font-awesome" color="#000" />
      </View>

      <View style={styles.cardsContainer}>
        <Card containerStyle={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>HDFC BANK</Text>
            <Text style={styles.cardBalance}>Total Balance 20,658,00</Text>
          </View>
          <Text style={styles.cardNumber}>7856 1711 8989 1098</Text>
          <Text style={styles.cardExpiry}>Exp 12/28</Text>
        </Card>
        <Card containerStyle={[styles.card, styles.secondaryCard]}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Central Bank</Text>
            <Text style={styles.cardBalance}>Total Balance 57,188,00</Text>
          </View>
          <Text style={styles.cardNumber}>9090 1234 5678 9090</Text>
          <Text style={styles.cardExpiry}>Exp 08/23</Text>
        </Card>
      </View>

      <TextInput style={styles.searchInput} placeholder="Search here" />

      <View style={styles.transactionHistory}>
        <Text style={styles.sectionTitle}>Transaction History</Text>
        <View style={styles.transaction}>
          <Avatar size="small" rounded source={{ uri: 'https://via.placeholder.com/50' }} />
          <View style={styles.transactionTextContainer}>
            <Text style={styles.transactionName}>Kristen Thomas</Text>
            <Text style={styles.transactionDetail}>Pending Payment</Text>
          </View>
          <Text style={styles.transactionAmount}>RS 1500</Text>
        </View>
        <View style={styles.transaction}>
          <Icon name="video" type="font-awesome" color="#000" />
          <View style={styles.transactionTextContainer}>
            <Text style={styles.transactionName}>Prime Video</Text>
            <Text style={styles.transactionDetail}>Subscription fee</Text>
          </View>
          <Text style={styles.transactionAmount}>RS 1870</Text>
        </View>
        <View style={styles.transaction}>
          <Icon name="netflix" type="font-awesome" color="#000" />
          <View style={styles.transactionTextContainer}>
            <Text style={styles.transactionName}>Netflix</Text>
            <Text style={styles.transactionDetail}>Subscription fee</Text>
          </View>
          <Text style={styles.transactionAmount}>RS 1880</Text>
        </View>
      </View>

      <View style={styles.navbar}>
        <Icon name="home" size={30} />
        <Icon name="credit-card" size={30} />
        <Icon name="history" size={30} />
        <Icon name="cog" size={30} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#1e3a8a',
    marginRight: 10,
  },
  secondaryCard: {
    backgroundColor: '#333',
    marginRight: 0,
  },
  cardHeader: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardBalance: {
    fontSize: 14,
    color: '#fff',
  },
  cardNumber: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  cardExpiry: {
    fontSize: 14,
    color: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  transactionHistory: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transaction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  transactionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  transactionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDetail: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
});

