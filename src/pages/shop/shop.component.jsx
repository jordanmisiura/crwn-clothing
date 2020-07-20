import React, { Component } from 'react';
import DATA from './shopdata';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop extends Component {
    constructor(props) {
        super(props);

        this.state={
            collections: DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({id, ...otherProps})=>(
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        );
    }
}

export default Shop;