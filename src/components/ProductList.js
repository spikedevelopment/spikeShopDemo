import React, { Component } from 'react'
import Product from './Product'

import { ProductConsumer } from '../context'

import Title from './UI/Title'

export default class ProductList extends Component {
    
    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">

                    <div className="container">

                        <Title name="Our" title="products"/>

                        <div className="row">

                            <ProductConsumer>
                                { value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} 
                                                        product={product} />
                                    })               
                                }}
                            </ProductConsumer>

                        </div>

                    </div>

                </div>
            </React.Fragment>
        )
    }
}
