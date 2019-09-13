import React from 'react';
import { Link } from 'react-router-dom';

const Producto = (props) => {
    console.log("producto", props.info);
    const { title, price, picture, id, address, free_shipping } = props.info;
    const show_free_shipping = () => {
        if (free_shipping) {
            return <img className="" src="/img/ic_shipping.png" alt="Envío gratis" />
         } else {
            return null;
        }
    }
    return (
        <div className="col-lg-12 mb-12">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-2">
                            <Link to={`/items/${id}`}><img className="card-img-top" src={picture} alt={title} /></Link>

                        </div>
                        <div className="col-lg-8">
                            <h5>{price.currency} {price.amount}</h5>
                            {show_free_shipping()}
                            <Link to={`/items/${id}`}>
                                <p className="card-text">{title}</p>
                            </Link>
                        </div>
                        <div className="col-lg-2">
                            <p className="card-text">{address.state_name}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )

}

export default Producto;