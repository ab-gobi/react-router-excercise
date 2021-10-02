import React from 'react';
import {Link} from 'react-router-dom';

function Product() {
    return (
        <section>
            <h1>This is product page</h1>
            <ul>
                <li>
                    <Link to='/products/p1'>A Book</Link>
                </li>
                <li>
                    <Link to='/products/p2'>A Laptop</Link>
                </li>
                <li>
                    <Link to='/products/p3'>A Smartphone</Link>
                </li>
            </ul>
        </section>
    )
}

export default Product;
