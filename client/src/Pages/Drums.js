import React from 'react';
import './Styles/ProductPages.css';
import ProductCard from '../Components/ProductCard';
import { connect } from 'react-redux';
import { getProducts } from '../actions/actions';

function Drums(props) {
    const { products, loading, error } = props;
    return (
        <>
            {loading ? (
                <h1 className="product-pages">loading...</h1>
            ) : error ? (
                <h1 className="product-pages">error</h1>
            ) : (
                <div className="product-pages">
                    <h1 className="product-title">Drums</h1>
                    <div className="products-container">
                        {products.drums.map((product) => {
                            return (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    )
    
}

const mapStateToProps = (state) => {
	return state.productList;
};

export default connect(mapStateToProps, getProducts)(Drums);
