import React, { Component } from 'react';

class Resultado extends Component {

    mostrarResultado = () =>{
        
        const monedaCotizada = this.props.monedaCotizada
        const {name, quote} = this.props.monedas
        if (!name || !quote || !monedaCotizada) {
            return null;
        }

        const {price, percent_change_1h, percent_change_24h} = quote[monedaCotizada]

        return(
            <div className = "bg-success py-4">
                <div className = "resumen text-light text-center">
                    <h2 className = "mb-4" >Resumen</h2>
                    <p> <span className = "font-weight-bold">El Precio de {name} en {monedaCotizada} es de: {price}</span> </p>
                    <p> <span className = "font-weight-bold">Porcentaje Última Hora: { percent_change_1h} %</span> </p>
                    <p> <span className = "font-weight-bold"> Porcentaje Últimas 24hs: {percent_change_24h} %</span> </p>
                </div>
            </div>
        )
    }

   render(){
    return (
            <React.Fragment>
                   {this.mostrarResultado()} 
            </React.Fragment>
    )}
}

export default Resultado;