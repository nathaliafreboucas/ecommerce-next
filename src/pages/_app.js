import React from 'react';
import "@/styles/globals.css";
import Head from 'next/head';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast} from 'react-toastify';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Component {...pageProps} />
      <ToastContainer 
        autoClose={2500}
        theme="light"
        pauseOnHover={true}
        icon={true}
        newestOnTop={false}
        rtl={false}
      />

    </>
  )
}
