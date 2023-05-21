import React, { useState } from 'react';
import styles from '../styles/Cart.module.css';
import Image from 'next/legacy/image';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateCart, reset } from '../redux/cartSlice';
import axios from 'axios';
import { useRouter } from "next/router";
import OrderDetail from "../components/OrderDetail";
import Head from 'next/head'


const Cart = () =>{
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(true);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();


  const createOrder = async (data) => {
    try {
      const res = await axios.post('http://smash-suez0-todb-qxzokpuid-smashsuez.vercel.app/api/orders', data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
        console.log(data)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  
  return (
    
    <div className={styles.container}>
      <Head>
        <title>Smash Burger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/ico.png" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <meta charSet='utf-8' />
      </Head>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product, size) => (
              <tr className={styles.tr} key={product._id}>
                <td className={styles.imgTd}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.size.text} {product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text}, </span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>£ {product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                  £ {product.price * product.quantity}
                  </span>
                </td>
                <td>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>£ {cart.total}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.button}
                style={{ width: "100%" }}
                onClick={() => setCash(true)}
              >
              CASH ON DELIVERY
              </button>

                </div>
              ) : (
                <button onClick={() => setOpen(true)} className={styles.button}>
              CHECKOUT NOW!
              </button>
                  )}
                </div>
              </div>
      
              {cash && <OrderDetail total={cart.total} setCash={setCash} createOrder={createOrder} quantity={cart.products.map((product) => (product.quantity))} extra={cart.products.map((product) => (product.extras.map((extra) => (
                     extra.text
                    ))))} title={cart.products.map((product) => (product.title))} size={cart.products.map((product) => (product.size.text))} />}


              </div>
              

  );
};

export default Cart;