import { StyleSheet } from "react-native";

const produtoCss = StyleSheet.create({
    list:{
        height:390,
        width:300,
        marginTop:40,
        margin:30,
        marginBottom:170,
        borderColor:'#000'
        
        
    },
    text:{
        backgroundColor:'#4f4f4f',
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
        backgroundColor:'#d4d4d4',
        color:'#000',
        fontWeight:'bold',
        textAlign:'center',
        flexDirection:'row',
        padding:20
    },
    quantidade:{
        backgroundColor:'#d4d4d4',
        fontWeight:'bold',
        color:'#000',
        paddingLeft:60,
        paddingRight:26,         
    }

})
export default produtoCss;