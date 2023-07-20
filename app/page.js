

import Image from 'next/image'
import styles from './page.module.css'
import NavBar from "/components/NavBar";

export default function Home() {
  return (
      <main className={styles.main}>
        <NavBar />

        <h1 className={styles.tittle}>Home section</h1>
        <div className={styles.center}>
          <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
        </div>
      </main>
  )
}
