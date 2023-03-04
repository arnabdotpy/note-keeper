import { Inter } from 'next/font/google'
import Card from '@/components/card'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* Header Section */}
    <form className={styles.form} action="http://localhost:3000/api/addnote" method="post">
      <textarea className={styles.textarea1} placeholder="Title goes here" name="title"></textarea>
      <textarea className={styles.textarea2} placeholder="Note goes here" name="content"></textarea>
      <button className={styles.btn} >Add Note</button>
    </form>
    </>
  )
}
