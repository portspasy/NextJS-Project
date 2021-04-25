import Head from "next/head";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords}></meta>
      </Head>
      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "Music Events | Find the hotties party",
  description: "Find the latest music events",
  keywords: "music, events, party, friends",
};

export default Layout;
