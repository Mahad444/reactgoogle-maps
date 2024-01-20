import React from 'react';
import MapView, {Callout,Circle,Marker} from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [pin,setPin] = React.useState({ latitude: 37.78825, longitude: -122.4324 });
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      provider='google'
      >
        <Marker 
        coordinate={pin}
        pinColor="blue"
        draggable={true}
        onDragStart={(e) => {
          console.log("Drag start", e.nativeEvent.coordinates)
        }}
        onDragEnd={(e) => {
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude
          })
        }}
        >
          <Callout>
            <Text>I'm Here alone</Text>
          </Callout>
        </Marker>
        <Circle
          center= {pin}
          radius={1000}
          fillColor='rgba(255,0,0,0.3)'
          strokeColor='rgba(0,0,255,0.3)'
          >
        </Circle>

      </MapView>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
}); 
