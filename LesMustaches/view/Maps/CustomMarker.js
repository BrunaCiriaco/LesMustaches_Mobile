import React from 'react';
import { Callout, Marker } from 'react-native-maps';
import {  View, Text } from 'react-native';
import mapsCss from '../../view/Styles/mapsCss'

function CustomMarker(
  {
    latitude,
    longitude,
    color
  }) {

  return (
    <Marker
      coordinate={{
        latitude: latitude,
        longitude: longitude,
      }}
      tracksViewChanges={false}
    >
       //Criação de icone do mapa 
      <View style={mapsCss.markerWrapper}>
        <View style={[
          mapsCss.markerBody,
          {
            backgroundColor: color || "#4285F4", //Circulo
          },
        ]}>
          <View style={mapsCss.markerDot}></View>
        </View>
        <View style={[
          mapsCss.markerArrow,
          {
            borderBottomColor: color || "#4285F4",
          }
        ]}>
        </View>
      </View>
      //informações sobre a barbearia
      <Callout style={mapsCss.callout}>
        <View>
            <Text style={mapsCss.title}> Les Mustaches</Text>
            <Text style={mapsCss.classi}> 4.0  ⭐ ⭐ ⭐ ⭐<Text style={mapsCss.starImageStyle}> ★ </Text> (320)</Text>           
           <Text style={mapsCss.classi}> Barbearia Especializada </Text>
           <Text style={mapsCss.open}> Aberto<Text style={mapsCss.classi}> ⋅ Fecha às 23:00 </Text></Text>
        </View>
      </Callout>
    </Marker>
  );
}



/* As props de nosso componente não sofrerão alteração durante o tempo de execução, 
então utilizaremos o React.memo para evitar renderizações desnecessárias */
export default CustomMarker = React.memo(CustomMarker);
