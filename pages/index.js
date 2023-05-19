import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '/styles/Home.module.css'
import Landing from '@/components/Landinglatest';
import List from '@/components/Listlatest';
import Location from '@/components/Locationlatest';
import axios from "axios";
import orderDetail from "@/components/orderDetaillatest"
import { useState } from 'react';
import Add from '@/components/Addlatest';
import AddButton from '@/components/AddButtonlatest';



const inter = Inter({ subsets: ['latin'] })

export default function Home({list, admin}) {
  const [close, setClose] = useState(true);

  return (
    <>
      <Head>
        <title>Smash Burger</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/imgs/ico.png" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
        <meta charSet='utf-8' />
      </Head>
      <Landing />
      {admin && <AddButton setClose={setClose}/> }
      <List list={list} />
      {!close && <Add setClose={setClose}/> }
      <Location />
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script>
  AOS.init();
</script>
    </>
  )
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }



  const res = await axios.get("http://localhost:3000/api/products");
  return{
    props:{
      list: res.data,
      admin
    }
  }
}
