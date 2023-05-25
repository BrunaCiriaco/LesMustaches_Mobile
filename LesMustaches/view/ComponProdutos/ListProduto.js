import React from "react"
import { Alert, Button, ScrollView } from "react-native"
import Produto from "./Carrinho"

ListProdutos = () => {
return(
    <>
        <ScrollView horizontal={true} >

            <Produto
                id='1'
                img={require('../../assets/images/Produtos/01.png')}
                name="Grooming para Cabelo B.URB Midlands 250ml"
                value='59.00'
            />
            <Produto
                id='2'
                img={require('../../assets/images/Produtos/02.png')}
                name="Shampoo Barba Forte Gasoline 250 ml"
                value = '30.00'

            />
              <Produto
                id='3'
                img={require('../../assets/images/Produtos/03.png')}
                name="Kit de Barbear Go. Clinical"
                value='59.00'
            />
            <Produto
                id='4'
                img={require('../../assets/images/Produtos/04.png')}
                name="Shampoo Sólido Nutrição da Kae Cosmeticos - 75g"
                value = '50.00'

            />
            
            <Produto
                id='5'
                img={require('../../assets/images/Produtos/05.png')}
                name="Protetor Solar episol Color Tom 6 Negro 70 FPS 40g"
                value='69.00'
            />
            <Produto
                id='6'
                img={require('../../assets/images/Produtos/06.png')}
                name="Truss Uso Obrigatório - Tratamento Reconstrutor 260ml"
                value = '90.00'

            />
            <Produto
                id='7'
                img={require('../../assets/images/Produtos/07.png')}
                name="Condicionador Para Cabelo Don Alcides Rolling Stones - 300g"
                value = '70.00'

            />
            <Produto
                id='8'
                img={require('../../assets/images/Produtos/08.png')}
                name="Pomada em Pó Route 66"
                value = '20.00'

            />
            
            
        </ScrollView> 
    </>
)

}

export default ListProdutos;