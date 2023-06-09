import React from 'react';
import { Callout, Marker } from 'react-native-maps';
import { View, Text, Image } from 'react-native';
import mapsCss from '../../view/Styles/mapsCss'
import Icon from 'react-native-vector-icons/FontAwesome5';

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
    /*       title="My Rating"
          description="This is my rating"
          rating={5}
          tracksViewChanges={false} */
    >
      <Callout tooltip/*style={mapsCss.callout}*/>
        <View>
{/*         <View>
            <Image
              source={require('../../assets/favicon.png')}
            />
          </View> */}
          <View style={mapsCss.bubble}>
            <>
              {/* source={require('../../assets/images/maps/map_marker.png')} */}
              {/*           <Image 
          style={mapsCss.image}
          source={require('../../assets/images/maps/pngegg.png')}
          /> */}
              <Text style={mapsCss.title}> Les Mustaches</Text>
              <Text style={mapsCss.classi}> 4.0 <Text style={mapsCss.starImageStyleAmarelo}>★★★★</Text><Text style={mapsCss.starImageStyleCinza}>★</Text> (320)</Text>
              <Text style={mapsCss.classi}> Barbearia Especializada </Text>
              <Text style={mapsCss.open}> Aberto<Text style={mapsCss.classi}> ⋅ Fecha às 23:00 </Text></Text>
            </>
          </View>
          <View style={mapsCss.arrowBorder} />
          <View style={mapsCss.arrow} />
        </View>
      </Callout>
    </Marker>
  );
}



/* As props de nosso componente não sofrerão alteração durante o tempo de execução, 
então utilizaremos o React.memo para evitar renderizações desnecessárias */
export default CustomMarker = React.memo(CustomMarker);
