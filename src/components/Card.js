import React from 'react'
import styles from '@/styles/Card.module.css'

function Card() {
  return (
    <>
    <div className={styles.card}>
        <h1 className={styles.title}>This is a title</h1>
        <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam quisquam soluta adipisci delectus iste dolorum quasi quod sunt, tempore mollitia?</p>
    </div>
    </>
  )
}

export default Card