import React, { useState } from 'react';
import Image from 'next/legacy/image'; // changed 'next/legacy/image' to 'next/image'
import styles from '../../styles/Product.module.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/redux/cartSlicelatest';
import Head from 'next/head'


const Product = ({ burger }) => {
  const [price, setPrice] = useState(burger.sizesOption[0].price);
  if (typeof document !== 'undefined') {
    function hideEmptyDiv() {
      const div = document.querySelector('.my-div');
      if (!div.textContent.trim()) {
        div.classList.add('hide');
      }
    }
    
    document.addEventListener('DOMContentLoaded', hideEmptyDiv);
  }

  // const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();
  const [size, setSize] = useState(burger.sizesOption[0]);


  
  const handleSize = (Index) => {
    const selectedSize = burger.sizesOption[Index];
    setSize(selectedSize);
    setPrice(selectedSize.price + extras.reduce((total, extra) => total + extra.price, 0));
  };
  ;
  const changeprice = (number) => {
    setPrice(price + number);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e, option) => {
    const optionText = option.text;
    if (optionText !== 'Cheese' && optionText !== 'D.Cheese') {
      // if the current option is not Cheese or D.cheese, return from the function
      setExtras((prev) => [...prev, option]);
      return;
    }
  
    const checked = e.target.checked;
    const otherOptionText = optionText === 'Cheese' ? 'D.Cheese' : 'Cheese';
    const otherOption = burger.extraOptions.find((o) => o.text === otherOptionText);
    const otherOptionChecked = otherOption ? document.getElementById(otherOption.text).checked : true;
  
    if (checked) {
      if (otherOptionChecked) {
        // if the other option is already checked, uncheck it and deduct its price from the total
        document.getElementById(otherOption.text).checked  = false;
        setExtras((prev) => prev.filter((extra) => extra._id !== otherOption._id));
        setPrice(price - otherOption.price + option.price);
        console.log("dwc");
        setExtras(extras.filter((extra) => extra._id !== otherOption._id));
        setExtras((prev) => [...prev, option]);
      }else{
        setExtras((prev) => [...prev, option]);
        changeprice(option.price);
      }
    } else {
      // remove the current option from extras and deduct its price from the total
      setExtras(extras.filter((extra) => extra._id !== option._id));
      setPrice(price - option.price);
    }
  };
  
  
 

  const handleClick = () => {
    dispatch(addProduct({ ...burger, extras, price, quantity, size }));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // hide the pop-up after 3 seconds
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
        <div className={styles.imgContainer}>
          <Image src={burger.img} layout='fill'  alt=""  />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}> {size.text} {burger.title}</h1>
        <span className={styles.desc}>{burger.desc}</span>
        <div className={styles.price}>£ {price}</div>
        <div className={styles.chooseSize}>
          <h3 className={styles.choose}>Choose the size</h3>
          
          <div className={styles.sizesOption}>
            {burger.sizesOption.map((size, index) => (
              <div className={styles.option} key={size._id}>
                <div className={styles.size} onClick={() => handleSize(index)}>
                  <span>
                    {size.text} <span className={styles.number}>£ {size.price}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Extrabox}>
                <h3 className={styles.choose}>Extra</h3>
                <div className={styles.extra}>
                {burger.extraOptions.map((option) => (
              <div className={styles.option} key={option._id}>
                <input type="checkbox"
                  id={option.text}
                  name={option.text}
                  className={styles.checkbox} onChange={(e)=>handleChange(e, option)}/>
                <label htmlFor={option.text}>{option.text} £ {option.price}</label>
              </div>
            ))}
            
                
                </div>
            </div>
            <div className={styles.add}>
            <input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            defaultValue={1}
            className={styles.quantity}
          />
          <button className={styles.button} onClick={handleClick}>
            Add to Cart
          </button>
        </div>
        </div>
        {showPopup && (
  <div className={styles.popup}>
    <p className={styles.popupText}>Product added to cart!</p>
  </div>
)}

    </div>
  )
                }

export const getServerSideProps = async ({params}) =>{
    const res = await axios.get(`https://smash-suez0.vercel.app/api/products/${params.id}`);
    return{
      props:{
        burger: res.data,
      }
    }
  }
  

export default Product