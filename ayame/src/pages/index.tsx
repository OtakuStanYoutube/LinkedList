import styles from "../../styles/Home.module.scss";

import Hello from "../components/Hello";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <div>
        <Layout title="Login">
          <div className={styles.container}>
            <Hello />
          </div>
        </Layout>
      </div>
    </>
  );
}
