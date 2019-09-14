import React from 'react';
import { Link } from 'react-router-dom';
import './Producto.sass'
import { number_format } from '../helpers/helpers'

const Producto = (props) => {
    console.log("producto", props.info);
    const { title, price, picture, id, address, free_shipping } = props.info;
    const show_free_shipping = () => {
        if (!free_shipping) {
            return <img className="" src="/img/ic_shipping.png" alt="Envío gratis" />
        } else {
            return null;
        }
    }


    return (

        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="img-item-list-container">
                        <Link to={`/items/${id}`}><img className=" img-item-list" src={picture} alt={title} /></Link>

                    </div>
                    <div className="col text-col">
                        <div className="price">
                            <h5 className="price">{price.currency} {number_format(price.amount)}   </h5>
                            {show_free_shipping()}

                        </div>

                        <Link to={`/items/${id}`}>
                            <p className="card-text item-title">{title}</p>
                        </Link>
                    </div>
                    <div className="col text-col">
                        <p className="card-text address-text">{address.state_name}</p>
                    </div>
                </div>
            </div>

            <hr></hr>
        </div>

    )

}

export default Producto;