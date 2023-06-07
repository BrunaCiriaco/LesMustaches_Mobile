import React from "react";
import { StyleSheet } from "react-native";

const mapsCss = StyleSheet.create({
   
  markerWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,

  },
  markerBody: {
    width: 30,
    height: 30,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  markerDot: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  markerArrow: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderBottomWidth: 16,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    transform: [{ rotate: "180deg" }],
    marginTop: -10,
  },
  callout: {
    width: 270,
    height: 150  
  },
  title:{
    fontWeight:'bold',
    fontSize:19,
  },
  classi:{
    color:'#808080'

  },
  open:{
    color:'#006400'
  },
  starImageStyle:{
    marginTop:30,
    fontSize:21
  }
})
export default mapsCss;