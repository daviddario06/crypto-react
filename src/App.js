import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import axios from 'axios';
import Resultado from './componentes/Resultado';


class App extends Component {
 
  state ={
      currencies: [],
      monedas:{},
      monedaCotizada:'',
      cargando: false
  }

  apiKey='&CMC_PRO_API_KEY=63be189b-a4c5-4a59-84dc-775789307a7e'
  cors = 'https://cors-anywhere.herokuapp.com/'
  componentDidMount(){
    this.obtenerMonedas()
  }

  obtenerMonedas = async () =>{

    
    let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?limit=25&sort=cmc_rank${this.apiKey}`
    //let cors = 'https://cors-anywhere.herokuapp.com/'

    await axios.get(this.cors+url)
    .then(response =>   this.setState({ currencies: response.data.data}))
  }

  obtenerValoresCrypto = async ({moneda, crypto}) =>{

    let url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=${crypto}&convert=${moneda}${this.apiKey}`

    await axios.get(this.cors+url)
    .then(response =>{ 
      this.setState({
        cargando:true
      })
        this.setState({
        monedas: response.data.data[crypto],
        monedaCotizada: moneda,
        cargando:false 
        })
    })
    
  }
  render(){

    const cargando = this.state.cargando
    let resultado;
    if(cargando) {
      resultado = <div class="sk-fading-circle">
                      <div class="sk-circle1 sk-circle"></div>
                      <div class="sk-circle2 sk-circle"></div>
                      <div class="sk-circle3 sk-circle"></div>
                      <div class="sk-circle4 sk-circle"></div>
                      <div class="sk-circle5 sk-circle"></div>
                      <div class="sk-circle6 sk-circle"></div>
                      <div class="sk-circle7 sk-circle"></div>
                      <div class="sk-circle8 sk-circle"></div>
                      <div class="sk-circle9 sk-circle"></div>
                      <div class="sk-circle10 sk-circle"></div>
                      <div class="sk-circle11 sk-circle"></div>
                      <div class="sk-circle12 sk-circle"></div>
                  </div>
    }
    else {
      resultado = <Resultado monedas = {this.state.monedas} monedaCotizada = {this.state.monedaCotizada}/>
    }

    return (
      <div className="container">
          <Header titulo = "Cotiza Criptomonedas al instante" />

          <div className = "row justify-content-center">
              <div className = "col-md-6 bg-light pb-4 contenedor-principal">
                  <Formulario 
                      monedas = {this.state.currencies} 
                      obtenerValoresCrypto = {this.obtenerValoresCrypto}
                  />
                  {resultado}
                  
              </div>
          </div>

      </div>
    );
  }
}

export default App;
