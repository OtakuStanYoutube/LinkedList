import styles from "../../styles/Home.module.scss";

import Hello from "../components/Hello";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <>
      <div>
        <Layout title="Home">
          <div className={styles.container}>
            <Hello />
          </div>
        </Layout>
      </div>
    </>
  );
}
