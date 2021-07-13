import styles from '../../styles/Home.module.css'

import Hello from "../components/Hello";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hello />
    </div>
  )
}
