import { color } from "@rneui/base";
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
    borderRadius: /*20*/35,
    borderWidth: 2,
    borderColor: 'solid',
    alignItems: 'center',
    justifyContent: 'center'
  },
  markerDot: {
    width: 50,
    height: 5,
    borderRadius: 5,
    //backgroundColor: '#fff'
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

/*     backgroundColor: 'solid',
    borderLeftColor: 'solid',
    borderRightColor: 'solid', */

    transform: [{ rotate: "180deg" }],
    marginTop: -1.8,
  },
  callout: {
    width: 270, /*270*/
    height: 120  /*150*/
  },
  imageTooltip:{
    width: 10,
    height: 10,
  },
  arrowBorder:{/*balao*/
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    //borderTopColor: '#007a87',
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  arrow:{/*pontinha do balão*/
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#4f4f4f',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: /*-32*/-5,
  },
  bubble:{
    //flexDirection: 'row',
    flexDirection: 'column',
    //alignSelf: 'flex-start',
    alignSelf:'center',
    alignContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    borderColor: '#4f4f4f',
    borderWidth: 2,
    //padding: (5,5,5,5),
    width: 220,
    height: 120,
  },
  name:{
    fontSize: 16,
    marginBottom: 5,
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
  starImageStyleAmarelo:{
    //marginTop:350,
    fontSize:20 /*21*/,
    color:'#F5BB00'
  },
  starImageStyleCinza:{
    //marginTop:350,
    fontSize:20 /*21*/,
    color:'#A2A2A2'
  }
})
export default mapsCss;