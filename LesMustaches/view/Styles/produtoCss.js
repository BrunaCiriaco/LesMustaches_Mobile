import { StyleSheet } from "react-native";

const produtoCss = StyleSheet.create({
    list:{
        height:300,
        width:350,
        marginTop:150,
        margin:10,
        
    },
    text:{
        backgroundColor:'#000',
        color:'#FFFF',
        padding:40,
        marginTop:-50
    },
    img:{
        height:300,
        width:300, 
        zIndex:1
    },
    quan:{
        margin:50,
      
    },
    modal:{
        backgroundColor:'#000',
        height:'100%',
        width:'100%',
    },
    modalTex:{
        color:'#FFFF',
        fontSize:30,
        justifyContent:'center'

    },
    value:{
        backgroundColor:'#000',
        color:'#FFFF',
        fontWeight:'bold',
        textAlign:'center',
        flexDirection:'row',
        padding:20
    },
    quantidade:{
        fontWeight:'bold',
        color:'#000',
        paddingLeft:60,
        paddingRight:30,         
    }

})
export default produtoCss;