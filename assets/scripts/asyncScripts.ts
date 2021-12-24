
import * as Location from 'expo-location';
import * as Network from 'expo-network';
import { GeoLocation } from '../../types';


export const retrieveLocation = async (setLocation: React.Dispatch<React.SetStateAction<GeoLocation|null>>) => {
    console.log("ran retrieveLocation")
    let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
        } else {
            let location = await Location.getCurrentPositionAsync({});
            setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude})
            console.log(location)
        }
}

export const retrieveNetwork = async (setNetwork: React.Dispatch<React.SetStateAction<boolean|null>>) => {
    console.log("ran retrieveNetwork")
    let network = await Network.getNetworkStateAsync()
    setNetwork(network.isConnected === true)
    console.log(network)
}




