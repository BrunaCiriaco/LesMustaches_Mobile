import React from 'react';
import { Image, View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Tile } from "react-native-elements";
import { Text } from '@rneui/themed';
import { fonts } from '@rneui/base';
import myLocalImageBarba from '../assets/images/Servico/barba.png';
import myLocalImageCorteInfantil from '../assets/images/Servico/corteKids2.png'
import myLocalImageCorteSenior from '../assets/images/Servico/corteSenior.png'
import myLocalImageCorteAdulto from '../assets/images/Servico/corteAdulto.jpg'
import servicoCss from './Styles/servicoCss'


const Tiles = () => {
    //const HeaderImage = styles.div`background-image: url(${myLocalImage});`;
    return (
        <SafeAreaView style={servicoCss.tela}>
                <ScrollView style={{ paddingVertical: 30 }}>
                    <View style={{ opacity: 0.9 }}>
                        <Tile
                            imageSrc={myLocalImageCorteAdulto}
                            title="CORTE ADULTO"
                            titleStyle={{ fontSize: 40 }}
                            featured
                            caption="Barbearia Les Mustaches"
                            width='100%'
                            height={230}
                            flex={1}
                        />
                    </View>
                    <View style={{ opacity: 0.9 }}>
                        <Tile
                            imageSrc={myLocalImageBarba}
                            title="BARBA"
                            titleStyle={{ fontSize: 40 }}
                            featured
                            caption="Barbearia Les Mustaches"
                            width='100%'
                            height={230}
                            flex={1}
                        />
                    </View>
                    <View style={{ opacity: 0.9 }}>
                        <Tile
                            imageSrc={myLocalImageCorteInfantil}
                            title="CORTE INFANTIL"
                            titleStyle={{ fontSize: 40 }}
                            featured
                            caption="Barbearia Les Mustaches"
                            width='101%'
                            height={230}
                        />
                    </View>
                    <View style={{ opacity: 0.9 }}>
                        <Tile
                            imageSrc={myLocalImageCorteSenior}
                            title="CORTE SÊNIOR"
                            titleStyle={{ fontSize: 40 }}
                            featured
                            caption="Barbearia Les Mustaches"
                            width='100%'
                            height={230}
                            flex={1}
                        />
                    </View>
                </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    subHeader: {
        backgroundColor: "#4f4f4f",
        color: "white",
        textAlign: "center",
        paddingVertical: 5,
        marginBottom: 10,
        fontSize:18,
        fontWeight: "bold",
        fontFamily: fonts.primary
    }
});

export default Tiles;