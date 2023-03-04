import React from 'react'
import styles from '@/styles/Card.module.css'

function Card(props) {
  return (
    <>
    <div className={styles.card}>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.content}>{props.content}</p>
    </div>
    </>
  )
}

export default Card