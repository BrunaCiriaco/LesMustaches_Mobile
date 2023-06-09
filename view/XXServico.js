import React from "react";
import { Text, ScrollView, View, Image } from "react-native";
import servicoCss from './Styles/servicoCss'

function listServico(){
    return(

            <ScrollView>
                <View style={servicoCss.kids}>
                <Image
                  source={require('../assets/images/Servico/corteKids.jpg')}
                  style={{width:300,height: 300, alignSelf:'center', borderRadius:20, marginTop:10}}
                />
                    <Text style={servicoCss.title}> Corte Infantil</Text>
                    <Text style={servicoCss.text}>Um Corte especial para nossas crianças se achar o super heroi</Text>
                </View>
                <View style={servicoCss.kids}>
                <Image
                  source={require('../assets/images/Servico/corteKids.jpg')}
                  style={{width:300,height: 300, alignSelf:'center', marginTop:10}}
                />
                    <Text style={servicoCss.title}> Corte Infantil</Text>
                    <Text style={servicoCss.text}>Um Corte especial para nossas crianças se achar o super heroi</Text>
                </View>
               
            </ScrollView>

    )
}

export default Servico = () =>{
    return(
        listServico()
    )
}
