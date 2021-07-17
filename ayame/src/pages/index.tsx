import styles from '../../styles/Home.module.scss'

import Hello from "../components/Hello";

export default function Home() {
  return (
    <div className={styles.container}>
      <Hello />
    </div>
  )
}
