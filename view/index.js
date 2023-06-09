import * as React from 'react';
import { Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import naviCss from './Styles/naviCss'
import Produtos from './ComponProdutos/ListProduto';
import Home from './Home';
import Tiles from './Servico';
import Maps from './Maps/Map';
import Schedules from './schedule';

  function HomeScreen() {
    return (
      <View >
        <>
          <Home/>
        </>
      </View>
    );
  }  

  function ServicosScreen() {
    return (
      <View style={naviCss.navigator}>
        <Tiles/>
      </View>
    );
  }

  function ProdutosScreen() {
    return (
      <View style={naviCss.navigator}>
         <Produtos/>
      </View>
    );
  }

  function Schedule() {
    return (
      <View style={naviCss.navigator}>
          <Schedules/>
      </View>
    );
  }
  
  function MapaScreen() {
    return (
      <View style={naviCss.navigator}>
        <Maps />
      </View>
    );
  }
  
  function LoginScreen() {
    return (
      <View style={naviCss.navigator}>
        <Text>Login</Text>
      </View>
    );
  }
  
  const TabBottom = createBottomTabNavigator();

function MyTabs() {
return (
<TabBottom.Navigator
  screenOptions={{
    activeTintColor: '#000',
    inactiveTintColor: '#fff',
    tabBarActiveBackgroundColor: '#4f4f4f'/*'#999999'*/,
    tabBarActiveTintColor: 'white',/*'black',*/
    tabBarInactiveTintColor: 'black',/*'gray',*/
    tabBarInactiveBackgroundColor: '#F5F2F2',
    headerShown:false
  }}
  >
  <TabBottom.Screen name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/images/TabNavigator/home.png')}
          style={{width: 23,height: 23, tintColor: focused ? 'white' : '#999999'}}
        />
      ),
    }}
  />
  <TabBottom.Screen name="Serviços"
    component={ServicosScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/images/TabNavigator/tesoura.png')}
          style={{width: 25, height: 25, tintColor: focused ? 'white' : '#999999'}}
        />
      ),
    }}
  />
  <TabBottom.Screen name="Produtos"
    component={ProdutosScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/images/TabNavigator/carrinho.png')}
          style={{width: 30,height: 30,tintColor: focused ? 'white' : '#999999'}}
        />
      ),
    }}
  />
  <TabBottom.Screen
    name="Agenda"
    component={Schedule}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/images/agenda.png')}
          style={{width: 35, height: 35,tintColor: focused ? 'white' : '#999999'}}
        />
      ),
    }}
  />
  
  <TabBottom.Screen
    name="Mapa"
    component={MapaScreen}
    options={{
      tabBarIcon: ({ focused }) => (
        <Image
          source={require('../assets/images/TabNavigator/mapa5.png')}
          style={{width: 25,height: 25,tintColor: focused ? 'white' : '#999999'}}
        />
      ),
    }}
  />
</TabBottom.Navigator >
);
}

const index = () =>{
    return(
        <View style={{width:410, height:'100%'}} >
          <NavigationContainer>
            <MyTabs/>
         </NavigationContainer>
        </View>
    )
}




  export default index;