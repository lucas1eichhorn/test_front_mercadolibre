import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Axios from 'axios';
import Error from './Error';
import ListadoProductos from './ListadoProductos';
import ProductoDetalle from './ProductoDetalle';

class Router extends Component {

    //el state se crea vacio
    state = {
        productos: [],
        terminoBusqueda: "",
        categories: [],
        loaded:false
      
    }
    constructor(props) {
        super(props);
        console.log("props",props);
    }
    //luego se agregan los elementos
    componentDidMount() {
        this.busquedaProducto(this.state.terminoBusqueda);
    }


    busquedaProducto = (terminoBusqueda) => {
   
        const url = `http://localhost:5000/api/items?q=${terminoBusqueda}`;
    
        this.setState({terminoBusqueda:terminoBusqueda});
        //mandamos los headers de autorizacion
        Axios.get(url).then(res => {
            console.log(res.data);
            this.setState({ productos: res.data.items, categories: res.data.categories,loaded:true })
          

        })
    }


    render() {

        return (
            <BrowserRouter>

               

                <Switch>
                    {/**pasar datos al componente por props usamos render*/}
                    <Route exact path="/" render={() => (
                        <ListadoProductos productos={this.state.productos} categories={this.state.categories} busquedaProducto={this.busquedaProducto} terminoBusqueda={this.state.terminoBusqueda} loaded={this.state.loaded}/>
                    )}>
                    </Route>
                    <Route exact path="/items" render={() => (
                        <ListadoProductos productos={this.state.productos} categories={this.state.categories} busquedaProducto={this.busquedaProducto} terminoBusqueda={this.state.terminoBusqueda}/>
                    )}>
                    </Route>
                    {/*para mostrar estatico usamos component,si no hay que pasar datos*/}


                    <Route exact path="/items/:id" render={(props) => {
                        console.log(props)
                        let idProducto = props.location.pathname.replace('/items/', '');
                        
                        console.log(idProducto);
                        return (<ProductoDetalle id={idProducto} categories={this.state.categories}  busquedaProducto={this.busquedaProducto} terminoBusqueda={this.state.terminoBusqueda}/>)

                    }}>
                    </Route>

                    <Route component={Error}></Route>
                </Switch>

            </BrowserRouter >
        )
    }
}

export default Router;