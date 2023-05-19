import axios from "axios";
import Image from "next/legacy/image";
import { useState, useEffect } from "react";
import Head from 'next/head'

import styles from "../../styles/Admin.module.css";

const Index = ({ orders, products }) => {

  const [productsList, setProductsList] = useState(products);
  const [ordersList, setOrdersList] = useState(orders);
  const handleDeleteOrders = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3000/api/orders/${orderId}`);
      const newOrdersRes = await axios.get("http://localhost:3000/api/orders");
      setOrdersList(newOrdersRes.data); // update the orders list with the new data
    } catch (error) {
      console.error(error);
      alert("Failed to delete order");
    }
  };

  const handleDeleteProducts = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${orderId}`);
      const newProductRes = await axios.get("http://localhost:3000/api/products");
      setProductsList(newProductRes.data); // update the products list with the new data
    } catch (error) {
      console.error(error);
      alert("Failed to delete products");
    }
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
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <tr key={product._id} className={styles.tr}>
                <td>
                  <Image src={product.img} alt="" width={50} height={50} />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>
                  {product.sizesOption.map((size) => (
                    <span key={size._id}>
                      {size.text} ({size.price}){" "}
                    </span>
                  ))}
                </td>
                <td>
                  <button className={styles.button} onClick={() => handleDeleteProducts(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={`${styles.table} ${styles["orders-table"]}`}>
          <thead className={styles.head}>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Extras</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {ordersList.map((order) => (
              <tr key={order._id} className={styles.tr}>
                <td><span className={styles.id}>{order._id.slice(0, 5)}..</span></td>
                <td><span className={styles.name}>{order.customer}</span></td>
                <td><span className={styles.address}>{order.address}</span></td>
                <td><span className={styles.address}>0{order.phone}</span></td>
                <td>
                  {order.title.map((title, index) => (
                    <div key={index}>({order.size[index]}) {title} </div>
                  ))}
                </td>
                <td>
                  {order.quantity.map((quantity, index) => (
                    <div key={index}>{quantity}</div>
                  ))}
                </td>
                <td>
                  {order.extra.map((extra, index) => (
                    <div key={index}>{extra}</div>
                  ))}
                </td>
                <td><span className={styles.total}>£ {order.total}</span></td>
                <td>
                  <button className={styles.button} onClick={() => handleDeleteOrders(order._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> 
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }
  const productRes = await axios.get("http://localhost:3000/api/products");
  const orderRes = await axios.get("http://localhost:3000/api/orders");
  return {
    props:{
      orders: orderRes.data,
      products: productRes.data,
    }
  };
};

export default Index;
