
import React, { Component ,  useState, useEffect } from 'react';
import { StyleSheet,  Platform } from 'react-native';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View} from '../components/Themed';
import { RootTabScreenProps, GeoLocation } from '../types';
import { retrieveLocation, retrieveNetwork} from '../assets/scripts/asyncScripts'

//const urlNearby = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=$latitude,$longitude&radius=1000&keyword=coffee|cafe|tea&type=cafe&key=${key}`;

export default function TabOneScreen(this: any, { navigation }: RootTabScreenProps<'TabOne'>) {
  const [location, setLocation] = useState<GeoLocation | null>(null);
  const [network, setNetwork] = useState<boolean | null>(null);

  useEffect(() => {
    retrieveLocation(setLocation);
    retrieveNetwork(setNetwork);
  }, []);

  let locationText: string = 'Waiting..';
  let networkText: string = "Waiting..";
  if (location) {
    locationText = JSON.stringify(location);
  }
  if (network) {
    networkText = JSON.stringify(network)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One - Test 2</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>{locationText}</Text>
      <Text>{networkText}</Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
