import GetLocation from 'react-native-get-location'


export const retrieveLocation = async () => {
    try {
        let location = await GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
        })
        console.log("Could get Location")
        return location
    } catch (error) {
        const { code, message } = error;
        console.warn(code, message);
        console.log("Could not get Location")
        return "500"
    }
}


