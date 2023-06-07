import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import naviCss from './Styles/naviCss';

function HomeScreen() {
  return (
    <View style={naviCss.navigator}>
      <Text>Home</Text>
    </View>
  );
}

function ServicosScreen() {
  return (
    <View style={naviCss.navigator}>
      <Text>Serviços</Text>
    </View>
  );
}

function ProdutosScreen() {
  return (
    <View style={naviCss.navigator}>
      <Text>Produtos</Text>
    </View>
  );
}

function AjudaScreen() {
  return (
    <View style={naviCss.navigator}>
      <Text >Ajuda</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="Serviços" component={ServicosScreen} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />      
      <Tab.Screen name="Ajuda" component={AjudaScreen} />    
        
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer >
      <MyTabs />
    </NavigationContainer>
  );
}