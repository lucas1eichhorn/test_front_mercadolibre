import React, { Component } from 'react';
import Axios from 'axios';
import './ProductoDetalle.sass';
import Breadcrumbs from './Breadcrumbs';

import Buscador from './Buscador';

class ProductoDetalle extends Component {



    constructor(props) {
        super(props);
        //el state se crea vacio

        this.state = { producto: null }


    }
    //consultamos el detalle de producto
    componentDidMount() {
        this.queryAPI();
    }

    queryAPI = () => {
        const url = `http://localhost:5000/api/items/${this.props.id}`;

        //mandamos los headers de autorizacion
        return Axios.get(url).then(res => {
            console.log("response", res.data);
            this.setState({ producto: res.data });

        })
    }



    render() {

        if (!this.state.producto)
            return null;

        const { title, price, picture, condition, sold_quantity, description } = this.state.producto

        return (
            <React.Fragment>
                <Buscador busquedaProducto={this.props.busquedaProducto} redirectAfterSearch={true} terminoBusqueda={this.props.terminoBusqueda} />

                <div className="container">
                    <Breadcrumbs categories={this.props.categories} />
                    <div className="row">


                        <div className="col-lg-12">

                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="row">
                                                <div className="img-container">
                                                    <img className="card-img-top img-detail" src={picture} alt={title} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p className="title">Descripción del producto </p>
                                                    <p className="product-description">{description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <span>{condition} - {sold_quantity} vendidos</span>
                                            <h5>{price.currency} {price.amount}</h5>
                                            <p className="card-text">{title}
                                            </p>
                                            <button className="btn btn-block btn-primary">Comprar</button>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}
export default ProductoDetalle;