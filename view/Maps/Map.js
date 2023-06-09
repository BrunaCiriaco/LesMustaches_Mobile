import React,{useState} from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import MapView from "react-native-maps";
import CustomMarker from './CustomMarker';
import mapsCss from '../../view/Styles/mapsCss'

const Map = () => {
    const [camera, setCamera] = useState({
        center:{
           latitude: -23.52192,
           longitude: -46.4764514
        },
        pitch: 0,
        heading: 0,
        altitude: 1000,
        zoom: 16,
     });
  return (
    <> 
        <MapView style={styles.map}  camera={camera} >
                <CustomMarker style={mapsCss.markerWrapper}
                    latitude={-23.52192}
                    longitude={-46.4764514}
//                    color={"#FF000080"}
                    color={"#001EFF80"}                    
                    // image={require('../../assets/images/maps/map_marker.png')}
                >
                </CustomMarker>
        </MapView>
      </>
  )
     
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;