import Link from "next/link";
import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>
          <FaExclamationTriangle /> 404
        </h1>
        <h2>Page Not Found!!!</h2>
        <p>
          <Link href="/">
            <a>Go Back to Homepage</a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
