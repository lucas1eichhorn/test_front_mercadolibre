import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import './Buscador.sass'
class Buscador extends Component {

    state = { terminoBusqueda: this.props.terminoBusqueda, redirect: false };

    leerDatos = (e) => {
        console.log(e.target.value)
        this.setState({ terminoBusqueda: e.target.value })

    }

    buscarProductos = () => {
        //enviamos por props

        this.props.busquedaProducto(this.state.terminoBusqueda);
        if (this.props.redirectAfterSearch) {
            this.setState({ redirect: true });
        }


    }

    //seteamos la redireccion al listado de productos si se busca desde el detalle de producto
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/items' />
        }
    }
    //buscar al presionar enter
    handleKeyPress = (event) => {

        if (event.key === 'Enter') {
            this.buscarProductos();
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}

                <div className="navbar navbar-expand-lg navbar-dark buscador ">
                    <div className="container">

                        <Link className="navbar-brand" to={'/'}>
                            <img src="/img/Logo_ML.png" alt="Mercado Libre" />
                        </Link>

                        <div className="collapse navbar-collapse">
                            <div className="input-group">

                                <input type="text" className="form-control" value={this.state.terminoBusqueda || ''} placeholder="Nunca dejes de buscar" onChange={this.leerDatos} onKeyPress={this.handleKeyPress} />
                                <div className="input-group-prepend">
                                    <button className="btn btn-outline-secondary" type="button" onClick={this.buscarProductos} ><img src="/img/ic_search.png" alt="Mercado Libre"></img></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>



        )
    }
}
export default Buscador