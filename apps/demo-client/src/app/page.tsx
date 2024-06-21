"use client"

import { Lumina } from "@lumina/core/dist"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Lumina />
      </div>
    </main>
  )
}
