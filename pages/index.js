import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>parazs.dev</title>
      </Head>

      <main className={styles.main}>
        hey
      </main>
    </div>
  )
}
