import React from "react";
import { ImageBackground, TouchableOpacity , Text } from "react-native";

const Home = () =>{
    function LoginButton() {
        return (
          <TouchableOpacity style={{ flex: 1, padding:20 , flexDirection: 'column' }} >
            <Text style={{color:'#FFFF', fontSize: 25, fontWeight:'bold'}}>Les Mustaches</Text>
            <Text style={{color:'#FFFF', fontSize: 15, alignSelf: 'flex-end', fontWeight:'bold',marginTop:-25}}>Login</Text>
          </TouchableOpacity>
        );
      }
    return(
           <ImageBackground
                source={require('../assets/images/Profissional.jpg')}
                style={{width: 400, height: 800, marginTop:30  }}>
                <LoginButton />
            </ImageBackground>
    )
}

export default Home;