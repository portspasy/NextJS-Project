import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
      </Head>

      <Header />
      <div className={styles.container}> {children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Music Events | Find the hotties party",
  description: "Find the latest music events",
  keywords: "music, events, party, friends",
};

export default Layout;
