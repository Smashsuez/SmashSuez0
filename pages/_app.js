import Layout from '../components/Layout'
import '/styles/globals.css'
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from 'react-redux';
import store from '@/redux/storelatest';


function App({ Component, pageProps }) {
  useEffect(() => {
		AOS.init({
			delay: 400,
			duration: 800,
		});
   });
  useEffect(() => {
    AOS.refresh()
  }, [])
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      return;
    } else {
      window.location.href = "/";
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 2000); // Wait for 2 seconds before redirecting and attempting to scroll to the component
    }
  };
  return (
    <Provider store={store}>
    <Layout>
      <Component {...pageProps} handleScrollTo={handleScrollTo}/>
    </Layout>
    </Provider>
  );
}
export default App;
