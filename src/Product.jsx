// import React from 'react'
// import Card from './Components/Card'
// import Heading from './Components/Heading'

// const Product = () => {
//   return (
//     <>
//     <div style={styles.container}>
//       <div >
//         <Heading head="Page Heading" subhead="Page Sub heading " />
//       </div>
//       <div className='prod'>
//         <Card title="Product1 Photo" desc="Product1 Description" />
//         <Card title="Product2 Photo" desc="Product2 Description" />
//         <Card title="Product3 Photo" desc="Product3 Description" />
//         <Card title="Product4 Photo" desc="Product4 Description" />
//         <Card title="Product5 Photo" desc="Product5 Description" />
//         <Card title="Product6 Photo" desc="Product6 Description" />
//       </div>
//       </div>
//     </>
//   );
// };

// const styles = {
//   container: {
//     border: '1px solid black',
//     padding: '30px',
//     margin: '10px'
//   },
// };

// export default Product

// import React, { useState, useEffect } from 'react';
// import './Product.css';

// const Product = () => {

//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//             .then(res => res.json())
//             .then(json => setProducts(json.products))
//     }, []);

//     return (
//         <div className="product-container">
//             <h2>Products</h2>
//             <div className="product-list">
//                 {products.map((product) => (
//                     <div key={product.id} className="product-card">
//                         <img src={product.thumbnail} alt='Thumbnail' className="product-thumbnail" />
//                         <div className="product-images" style={{height:'50px'}}>
//                             {product.images.map((image, index) => (
//                                 <img key={index} src={image} alt={'photos'} className="product-image" />
//                             ))}
//                         </div>
//                         <div className="product-details">
//                             <p className="product-title">{product.title}</p>
//                             <p className="product-description">{product.description}</p>
//                             <p className="product-price">${product.price}</p>
//                             <p className="product-brand">Brand: {product.brand}</p>
//                             <p className="product-category">Category: {product.category}</p>
//                             <button className='bt'>Add To Cart</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default Product;

import React, { useState, useEffect } from 'react';
import './Product.css';

const Product = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')

            .then(res => res.json())
            .then(json => setProducts(json.products))
    }, []);

    // const addToCart = (product) => {
    //     setCart([...cart, product]);
    // }

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);

        if (existingProduct) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setCart(updatedCart);
    };

    const decrementQuantity = (productId) => {
        const updatedCart = cart.map(item =>
            item.id === productId
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        );
        setCart(updatedCart);
    };

    return (
        <>
            <h2 style={{ textAlign: 'center' }}> Products</h2>
            <div className="product-container">

                <div className="product-list">
                    {products.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.thumbnail} alt='Thumbnail' className="product-thumbnail" />
                            <div className="product-images" style={{ height: '50px' }}>
                                {product.images.map((image, index) => (
                                    <img key={index} src={image} alt={'photos'} className="product-image" />
                                ))}
                            </div>
                            <div className="product-details">
                                <p className="product-title">{product.title}</p>
                                <p className="product-description">{product.description}</p>
                                <p className="product-price">${product.price}</p>
                                <p className="product-brand">Brand: {product.brand}</p>
                                <p className="product-category">Category: {product.category}</p>
                                <button className='bt' onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-container">
                    <h2>Cart</h2>
                    <ul className="cart-list">
                        {cart.map((cartItem, id) => (
                            <div key={cartItem.id} className="cart-card">
                                <div className='cc'>
                                <img src={cartItem.thumbnail} alt='Thumbnail' className="Cart-thumbnail" />
                                <p key={id}>
                                    {cartItem.title}
                                    <p className="cart-price">- ${cartItem.price}</p>

                                    {cartItem.description} </p>

                                <div className="quantity-controls">
                                    <button onClick={() => decrementQuantity(cartItem.id)}>-</button>
                                    <span className="quantity">{cartItem.quantity}</span>
                                    <button onClick={() => incrementQuantity(cartItem.id)}>+</button>
                                </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
}

export default Product;