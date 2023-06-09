import React,{useState} from "react";
import { Text,View,Image,TouchableOpacity } from "react-native";
import produtoCss from '../Styles/produtoCss'

const Produto = (props) =>{
        const [numero, setNumero] = useState(0);
        const [preco,setPreco] = useState(props.value)

        const estoque = 10
       
        const inc = () => {
           const quant = parseInt(numero + 1)
           setNumero(quant)
        
           const total = parseFloat(preco * quant)
           setPreco(total)   
        }
         
        const dec = () => {
            const sub = numero 
            setNumero(sub - 1 )
           
            const total = parseFloat(preco / numero)
            setPreco(total)
        
        }    
        function carrinho(){
          
        }
        
       
      
         return(
            <View style={produtoCss.list} >
               <Text> {props.id}</Text>
                <Image style={produtoCss.img} source={props.img}/>
                <Text style={produtoCss.text}> {props.name} </Text>
                <Text style={produtoCss.value}> R$ {props.value}</Text>

            <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                <TouchableOpacity onPress={dec} >
                 <Text style={produtoCss.quantidade}> - </Text>
                </TouchableOpacity>
                <Text style={produtoCss.quantidade}>{numero}</Text>
                <TouchableOpacity  onPress={inc} >
                 <Text style={produtoCss.quantidade}> + </Text>
                 </TouchableOpacity>
            </View>
  

                <TouchableOpacity onPress={carrinho} >
                 <Text style={{color:'#000', fontSize: 15, fontWeight:'bold', backgroundColor:'#d4d4d4', paddingLeft:10}}>Adiconar </Text>
                </TouchableOpacity>
                <Text style={{color:'#000', fontSize: 15, fontWeight:'bold', backgroundColor:'#d4d4d4', paddingLeft:10}} >Total : {`${preco}`}</Text>
              
            </View>         
            
    
        )
  
 
}




export default Produto;