import styles from "../../styles/order.module.css";
import Image from "next/image";
import axios from "axios";
import Head from 'next/head'

const Order = ({ order }) => {
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
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th className={styles.th}>Order ID</th>
                <th className={styles.th}>Customer</th>
                <th className={styles.th}>Address</th>
                <th className={styles.th}>Phone</th>
                <th className={styles.thNone}>Item</th>
                <th className={styles.thNone}>Quantity</th>
                <th className={styles.thNone}>Extras</th>
                <th className={styles.th}>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.title.map((item, index) => (
                <tr key={index} className={styles.tr}>
                  {index === 0 ? (
                    <>
                      <td rowSpan={order.title.length}>
                        <span className={styles.id}>{order._id}</span>
                      </td>
                      <td rowSpan={order.title.length}>
                        <span className={styles.name}>{order.customer}</span>
                      </td>
                      <td rowSpan={order.title.length}>
                        <span className={styles.address}>{order.address}</span>
                      </td>
                      <td rowSpan={order.title.length}>
                        <span className={styles.address}>0{order.phone}</span>
                      </td>
                    </>
                  ) : null}
                  <td><span className={styles.none}>{order.size[index]} {item}</span></td>
                  <td><span className={styles.none}>{order.quantity[index]}</span></td>
                  <td><span className={styles.none}>{order.extra[index]}<br/></span></td>
                  {index === 0 ? (
                    <td rowSpan={order.title.length}>
                      <span className={styles.total}>£ {order.total}</span>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>£ {order.total}
          </div>
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: { order: res.data },
  };
};

export default Order;
