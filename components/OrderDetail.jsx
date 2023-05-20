import { useState } from "react";
import styles from "../styles/orderDetail.module.css";
import emailjs from '@emailjs/browser';

const OrderDetail = ({ total, createOrder, quantity, extra, title, size, setCash, }) => {
  const [customer, setCustomer] = useState("");  
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_voin4q9', // Replace with your service ID
      'template_5dexk3l', // Replace with your email template ID
      e.target,
      'Ro_eFq8rhrK6vhPck' // Replace with your user ID
    ).then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    createOrder({ customer, address, phone });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <span onClick={()=>setCash(false)} className={styles.close}>X</span>
        <h1 className={styles.title}>You will pay £ {total}</h1>
        <form onSubmit={sendEmail}>
          <div className={styles.item}>
            <label className={styles.label}>Name Surname</label>
            <input
              placeholder="Full Name"
              type="text"
              className={styles.input}
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Phone Number</label >
            <input
              type="text"
              placeholder="Phone Number"
              className={styles.input}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={styles.item}>
            <label className={styles.label}>Address</label>
            <textarea
              rows={5}
              placeholder="Address"
              type="text"
              className={styles.input}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          {/* <input type="hidden" name="customer_name" value={customer} />
          <input type="hidden" name="customer_address" value={address} />
          <input type="hidden" name="customer_phone" value={phone} />
          <input type="hidden" name="order_total" value={total} />
          <input type="hidden" name="order_quantity" value={quantity} />
          <input type="hidden" name="order_extra" value={extra} />
          <input type="hidden" name="order_title" value={title} />
          <input type="hidden" name="order_size" value={size} /> */}
          <button type="submit" className={styles.button} >
            Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderDetail;
