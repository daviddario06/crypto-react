import React,{Component} from 'react';
import OptionSelect from './OptionSelect';

export default class Formulario extends Component {

    monedaRef = React.createRef();
    criptoRef = React.createRef();

    cotizarMonedas = (e) =>{

        e.preventDefault();

        const cotizacion = {
            moneda: this.monedaRef.current.value,
            crypto: this.criptoRef.current.value
        }

        this.props.obtenerValoresCrypto(cotizacion)

    }

    render() {
        const monedas = this.props.monedas
        return (
            <form onSubmit = {this.cotizarMonedas}>
                <div className="form-group">
                    <label>Moneda: </label>
                    <select className = "form-control" ref = {this.monedaRef}>
                        <option value = "" disabled defaultValue>Elige tu moneda </option>
                        <option value = "USD">Dolar Estadounidense</option>
                        <option value = "ARS">Peso Argentino</option>
                        <option value = "GBP">Libros</option>
                        <option value = "EUR">Euros</option>
                    </select>

                    <div className = "form-group">
                        <label>Criptomoneda </label>
                        <select className = "form-control" ref = {this.criptoRef}>
                            {
                                monedas.map( moneda =>(
                                    <OptionSelect
                                        key = {moneda.id}
                                        moneda = {moneda}
                                    />
                                ))}
                        </select>
                    </div>
                    <div className = "form-group">
                        <input type = "submit" className = "btn btn-primary" value = "Cotizar" />
                    </div>
                </div>
            </form>
        );
    }
}