import React , { useState } from 'react'
import styles from "../styles/Add.module.css" ;
import axios from "axios";
import {useRouter} from "next/router";

const Add = ({setClose}) => {
   const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [sizesOption, setSizesOptions] = useState([]);
    const [sizes, setSizes] = useState(null);
    const [extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null);


    const handleSizeInput = (e) => {
        setSizes({ ...sizes, [e.target.name]: e.target.value });
      };
    
      const handleSize = (e) => {
        setSizesOptions((prev) => [...prev, sizes]);
      };

    const handleExtraInput = (e) => {
        setExtra({ ...extra, [e.target.name]: e.target.value });
      };
    
      const handleExtra = (e) => {
        setExtraOptions((prev) => [...prev, extra]);
      };

    const handleCreate = async () =>{
        const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "uploads");
    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dq5bcql29/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        title,
        desc,
        sizesOption,
        extraOptions,
        img: url,
      };

      await axios.post("https://smash-suez0.vercel.app/api/products", newProduct);
      setClose(true);
    } catch (err) {
      console.log(err);
    }
    }
    

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <span onClick={()=>setClose(true)} className={styles.close}>X</span>
            <h1 >Add New Product</h1>
            <div className={styles.item}>
                <label className={styles.label}>Choose an image</label>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </div>
            <div className={styles.item}>
          <label className={styles.label}>Title</label>
          <input
            className={styles.input}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Desc</label>
          <textarea
          className={styles.input}
            rows={4}
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>size</label>
          <div className={styles.size}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleSizeInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleSizeInput}
            />
            <button className={styles.addButton} onClick={handleSize}>
              Add
            </button>
          </div>
          <div className={styles.sizeItems}>
            {sizesOption.map((option) => (
              <span key={option.text} className={styles.sizeItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extra</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Item"
              name="text"
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Price"
              name="price"
              onChange={handleExtraInput}
            />
            <button className={styles.addButton} onClick={handleExtra}>
              Add
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map((option) => (
              <span key={option.text} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate} >
          Create
        </button> 
        </div>
    </div>
  )
}

export default Add