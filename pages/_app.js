import Footer from "../components/modules/footer";
import Header from "../components/modules/header";
import Layout from "../layout/main";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
      <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
